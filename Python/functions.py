# # simple function
# def addition(a, b):
#     print(sum((a, b)))

# addition(50, 50) # 100

# # function with multiple arguments
# def addition_with_args(*args):
#     print(sum(args))

# addition_with_args(25, 25, 25, 25) # 100

# # function with keyword arguments
# def function_with_keywordargs(**kwargs):
#     print(kwargs)

# function_with_keywordargs(a=10, b=20, c=30) # {'a': 10, 'b': 20, 'c': 30}

# # function with both args and kwargs
# def function_with_both_args(*args, **kwargs):
#     print(args) # (10, 20, 30)
#     print(kwargs) # {'a': 100, 'b': 200, 'c': 300}

# function_with_both_args(10, 20, 30, a=100, b=200, c=300)

def myfunc(args):
    output = ''
    for idx in range(0, len(args)):
        print(idx)
        if(idx % 2 == 0):
            output += args[idx].upper()
        if(idx % 2 != 0):
            output += args[idx].lower()
        
    print(output)

myfunc('skdnfksjnfsdkjf')