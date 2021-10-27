:: cd "C:/Users/joris/Downloads/bing scraper/dataset/seedvault svalbard/"

magick convert ^
  *.jpg ^
   -canny 0x1+10%%+30%% ^
   -set filename:base "%%[basename]" ^
   "%%[filename:base]_edge.jpg"

magick montage ^
  *.jpg ^
   -tile 2x1 ^
   -geometry +0+0 ^
   -background none ^
    output.png

pause