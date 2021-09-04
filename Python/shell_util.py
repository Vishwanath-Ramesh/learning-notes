import shutil

# Move a file to a different location
shutil.move('test.txt', 'C:\\Users\vishw')

# remove all the files in a particulat directory and note that the operation is permanent and it is not recoverable
shutil.rmtree('C:\\Users\\vishw\\test')

# if we want to delete the files temporarily or move the files to trash, use send2trash module