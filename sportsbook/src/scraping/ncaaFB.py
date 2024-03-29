import json
import requests
from bs4 import BeautifulSoup

def scraping():
    ADDRESS = 'https://classic.sportsbookreview.com/betting-odds/college-football/'
    # Above address gives point spread
    MONEYLINE_EXTENSION = 'money-line/'
    TOTALS_EXTENSION = 'totals/'
    DATE_EXTENSION = '?date=20210910'
    USER_SETTINGS = "bbuserid=10017271; bbpassword=7274d03eb3521d19e02cd7871f6b345c; bb_userid=10017271; bb_password=7274d03eb3521d19e02cd7871f6b345c; sbrSession=aaronw4"

    headers = {
        "cookie" : USER_SETTINGS,
        "User-Agent" : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0'
    }
    
    ODDS = []
    TIMES = []
    TEAM_NAMES = []
    SPREAD = []
    SPREAD_PRICE = []
    MONEYLINES = []
    TOTALS = []
    TOTALS_PRICE = []

    spread_data = requests.get(
        ADDRESS + DATE_EXTENSION,
        headers=headers
    )
    moneyline_data = requests.get(
        ADDRESS + MONEYLINE_EXTENSION + DATE_EXTENSION,
        headers=headers
    )
    totals_data = requests.get(
        ADDRESS + TOTALS_EXTENSION + DATE_EXTENSION,
        headers=headers
    )

# Collect initial data and Runline Odds
    soup_spread = BeautifulSoup(spread_data.text, 'lxml')
    date = soup_spread.find('div', class_='date').text
    container = soup_spread.find('div', class_='content-scheduled')

    times = container.find_all('div', class_='eventLine-time')
    for div in times:
        time = div.find('div').text
        TIMES.append(time)

    names = container.find_all('span', class_='team-name')
    for anchor in names:
        name = anchor.find('a').text
        TEAM_NAMES.append(name[0:3].strip())

    spreads = container.find_all('div', class_='eventLine-opener')
    for spread in spreads:
        opening_spread = spread.text.split()

        if len(opening_spread) == 0:
            opening_spread1 = ''
            opening_spread2 = ''
            opening_odds1 = ''
            opening_odds2 = ''
        else:
            opening_spread1 = opening_spread[0]
            opening_spread1 = opening_spread1.replace('\u00BD', '.5')
            opening_odds1 = opening_spread[1][:4]

            opening_spread2 = opening_spread[1][4:]
            opening_spread2 = opening_spread2.replace('\u00BD', '.5')
            opening_odds2 = opening_spread[2]

        SPREAD.append(opening_spread1), SPREAD.append(opening_spread2)
        SPREAD_PRICE.append(opening_odds1), SPREAD_PRICE.append(opening_odds2)

# Collect moneyline odds
    soup_moneyline = BeautifulSoup(moneyline_data.text, 'lxml')
    container = soup_moneyline.find('div', class_='content-scheduled')
    moneylines = container.find_all('div', class_='eventLine-opener')
    for moneyline in moneylines:
        opening_moneyline = moneyline.text
        MONEYLINES.append(opening_moneyline[:4])
        MONEYLINES.append(opening_moneyline[4:])

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
        team_stats['spread_away'] = SPREAD[i]
        team_stats['spread_home'] = SPREAD[i+1]
        team_stats['spread_odds_away'] = SPREAD_PRICE[i]
        team_stats['spread_odds_home'] = SPREAD_PRICE[i+1]
        team_stats['moneyline_away'] = MONEYLINES[i]
        team_stats['moneyline_home'] = MONEYLINES[i+1]
        team_stats['total'] = TOTALS[i]
        team_stats['total_over'] = TOTALS_PRICE[i]
        team_stats['total_under'] = TOTALS_PRICE[i+1]
        
        ODDS.append(team_stats)

    with open('./sportsbook/src/data/ncaaFB.json', 'w') as data:
        json.dump(ODDS, data)

if __name__ == "__main__":
    scraping()
