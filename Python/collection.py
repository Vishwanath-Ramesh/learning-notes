from collections import Counter, defaultdict, namedtuple

arr = [1, 1, 1, 2, 2]
print(Counter(arr))
print(Counter('Hello'))

# Get unique values
print(list(Counter(arr)))

# default value for a unknown key in a dictionary
def_dict = defaultdict(lambda: 0)
def_dict['name'] = 'John Doe'
print(def_dict['UNKNOWN_KEY'])

# named indices for a tuple
person = namedtuple('Person', ['fname', 'lname', 'age'])
john = person('John', 'Doe', 25)
print(john.age)
print(john[0])