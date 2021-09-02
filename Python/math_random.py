import math, random

value = 4.35

# floor
print(math.floor(value)) # 4

# ceil
print(math.ceil(value)) # 5

# round - which is already built into python
print(round(4.5)) # 4 
print(round(5.5)) # 6 

print(math.pi)
print(math.e)
print(math.inf) # infinity
print(math.nan) # Not a number

rand_num = random.randint(0, 100)
print(rand_num)

# random
my_list = list(range(0, 20))
print(random.choice(my_list)) # randomly chooses one values from the list
print(random.uniform(a=0, b=100)) # randomly chooses the values within the given range including floating point values
print(random.choices(population=my_list, k=10)) # randomly chooses the elements with length based on 'k' in which the selected values can be repeated
print(random.sample(population=my_list, k=10)) # randomly chooses the elements with length based on 'k' in which the resulting values are unique

# shuffle
print(random.shuffle(my_list)) # shuffle the given input randomly in-place