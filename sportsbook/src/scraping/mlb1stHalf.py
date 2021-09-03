import json
import requests
from bs4 import BeautifulSoup

def scraping():
    ADDRESS = 'https://classic.sportsbookreview.com/betting-odds/mlb-baseball/'
    RUN_EXTENSION = 'pointspread/1st-half/'
    TOTALS_EXTENSION = 'totals/1st-half/'
    DATE_EXTENSION = '?date=20210903'
    USER_SETTINGS = "bbuserid=10017271; bbpassword=7274d03eb3521d19e02cd7871f6b345c; bb_userid=10017271; bb_password=7274d03eb3521d19e02cd7871f6b345c; sbrSession=aaronw4"

    headers = {
        "cookie" : USER_SETTINGS,
        "User-Agent" : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0'
    }
    
    ODDS = [], TIMES = [], TEAM_NAMES = [], PITCHERS = []
    RUNLINES_SPREAD = [], RUNLINES_PRICE = [], TOTALS = [], TOTALS_PRICE = []

    runline_data = requests.get(
        ADDRESS + RUN_EXTENSION + DATE_EXTENSION,
        headers=headers
    )
    totals_data = requests.get(
        ADDRESS + TOTALS_EXTENSION + DATE_EXTENSION,
        headers=headers
    )

# Collect initial data and Runline Odds
    soup_runline = BeautifulSoup(runline_data.text, 'lxml')
    date = soup_runline.find('div', class_='date').text
    container = soup_runline.find('div', class_='content-scheduled')

    times = container.find_all('div', class_='eventLine-time')
    for div in times:
        time = div.find('div').text
        TIMES.append(time)

    names = container.find_all('span', class_='team-name')
    for anchor in names:
        name = anchor.find('a').text
        TEAM_NAMES.append(name[0:3].strip())

        pitcher = anchor.find('span', class_='player')
        if pitcher:
            PITCHERS.append(' '.join(pitcher.text.split()))
        else:
            PITCHERS.append('')

    spreads = container.find_all('div', class_='eventLine-opener')
    for spread in spreads:
        opening_spread = spread.text.split()
        
        if len(opening_spread) == 0:
            opening_spread1 = ''
            opening_spread2 = ''
            opening_odds1 = ''
            opening_odds2 = ''
        else:
            opening_spread1 = 'pick'
            opening_odds1 = opening_spread[0][:4]

            opening_spread2 = 'pick'
            opening_odds2 = opening_spread[0][4:]
    # These runline spreads are always picks instead of 1/2 point
        RUNLINES_SPREAD.append(opening_spread1)
        RUNLINES_SPREAD.append(opening_spread2)
        RUNLINES_PRICE.append(opening_odds1)
        RUNLINES_PRICE.append(opening_odds2)

# Collect total odds
    soup_totals = BeautifulSoup(totals_data.text, 'lxml')
    container = soup_totals.find('div', class_='content-scheduled')

    totals = container.find_all('span', class_='adjust')
    for total in totals:
        total = total.text.replace('\u00BD', '.5')
        TOTALS.append(total)

    totals_price = container.find_all('span', class_='price')
    for price in totals_price:
        opening_price = price.text
        TOTALS_PRICE.append(opening_price)

# Create dictionary of odds for each game
    for i in range(0, len(TEAM_NAMES), 2):
        team_stats = {}

        team_stats['date'] = date
        team_stats['time'] = TIMES[i//2]
        team_stats['team_away'] = TEAM_NAMES[i]
        team_stats['team_home'] = TEAM_NAMES[i+1]
        team_stats['pitcher_away'] = PITCHERS[i]
        team_stats['pitcher_home'] = PITCHERS[i+1]
        team_stats['runline_away'] = RUNLINES_SPREAD[i]
        team_stats['runline_home'] = RUNLINES_SPREAD[i+1]
        team_stats['runline_odds_away'] = RUNLINES_PRICE[i]
        team_stats['runline_odds_home'] = RUNLINES_PRICE[i+1]
        team_stats['total'] = TOTALS[i]
        team_stats['total_over'] = TOTALS_PRICE[i]
        team_stats['total_under'] = TOTALS_PRICE[i+1]
        
        ODDS.append(team_stats)

    with open('./sportsbook/src/scraping/mlbHalf.json', 'w') as data:
        json.dump(ODDS, data)

if __name__ == "__main__":
    scraping()
