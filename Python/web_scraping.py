import requests, bs4

# Get response text from a website
response = requests.get('http://www.example.com/')
print(response.text) # prints HTML doc as text

# parse HTML doc using beautifulsoup
soup = bs4.BeautifulSoup(response.text, 'lxml')
print(soup)

# get content with it's tag wrapper based on element tags
print(soup.select('title')) # [<title>Example Domain</title>]

# get content between the element tags
print(soup.select('title')[0].getText()) # Example Domain