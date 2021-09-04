import os

# current working directory
print(os.getcwd())

# list all directories
print(os.listdir())
print(os.listdir('C:\\Users'))

# delete a file
os.unlink('C:\\Users\\vishw\\test.txt')

# deletes the folder if empty
os.rmdir('C:\\Users\\vishw\\test')

# walking through the folders
for folders, sub_folders, files in os.walk('C:\\Users\\'):
    print(f"Currently looking at {folders}\n")
    print(f"The sub folders are: ")
    for sub_folder in sub_folders:
        print(f"\t Subfolder: ${sub_folder}\n")

    print("The files are: ")
    for file in files:
        print(f"File: ${file}\n")