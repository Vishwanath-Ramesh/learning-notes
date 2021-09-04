def gen_counter():
    counter = 1

    while(True):
        yield counter
        counter = counter + 1

result = gen_counter()
print(next(result))
print(next(result))
print(next(result))