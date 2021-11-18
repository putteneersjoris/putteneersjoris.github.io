import os

# get current working directory 
cwd = os.getcwd()
 
# user picks a folder in the current working directory 
folder = input("Enter the folder you want to compress: ")

# change dir to inside that folder 
pwd = os.path.join(cwd, folder)
os.chdir(pwd) 

# your actual imageMagick command
os.system("magick *.jpg -strip -interlace Plane  -quality 50% -set filename:base \"%[basename]\" \"%[filename:base]_label.jpg\"")