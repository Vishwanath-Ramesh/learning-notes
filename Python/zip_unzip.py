import zipfile, shutil, os

# create temporary files
f = open('./tempFiles/fileOne.txt', 'w+')
f.write('File one')
f.close()

f = open('./tempFiles/fileTwo.txt', 'w+')
f.write('File two')
f.close()

# zip files
zip_files = zipfile.ZipFile('./tempFiles/compressedFile.zip', 'w')
zip_files.write('./tempFiles/fileOne.txt')
zip_files.write('./tempFiles/fileTwo.txt')
zip_files.close()

# unzip files
unzip_files = zipfile.ZipFile('./tempFiles/compressedFile.zip', 'r')
unzip_files.extractall('./tempFiles/extractedFiles')

# instead of zipping files one by one, we can compress the whole folder by using shell utility(shutil) : Refer shell_util.py