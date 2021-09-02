from datetime import date, datetime

# custom date and time
mydatetime = datetime(2021, 10, 3, 14, 20, 1)
print(mydatetime) 

# modify date and time
mydatetime.replace(year=2020) 

# arithmetic on date
mydate1 = date(2021, 8, 22)
mydate2 = date(2022, 8, 22)

date_diff = mydate2 - mydate1
print(date_diff.days) # 365

# arithmetic on datetime
mydatetime1 = datetime(2021, 8, 22, 22, 0)
mydatetime2 = datetime(2020, 8, 22, 12, 0)

datetime_diff = mydatetime1 - mydatetime2
print(datetime_diff.seconds) # 36000
print(datetime_diff.total_seconds()) # includes both date and time