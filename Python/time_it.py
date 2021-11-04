import time, timeit

def func_one(n):
    print('some operation')

def func_two(n):
    print('some operation')

start_time = time.time()
result = func_one(1000)
end_time = time.time()
elapsed_time = end_time - start_time
print(elapsed_time)

# timeit - Used to test how much time a paticular operation takes
statement = '''
func_one(1000)
'''
setup = '''
def func_one(n):
    print('some operation')
'''

elapsed_time = timeit.timeit(statement, setup, number=10000)
print(elapsed_time)