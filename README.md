# Manga App

Manga desktop module application using React/ Redux/ Electron.

## Features

* Can add and view manga available from the below sites with the URL
* Download chapters
* Download cache, resume download on re-opening app
* Delete unwanted chapters within the specific chapter section (where you can see the chapters)
* No need to confirm the latest chapter since there is a queue that updates for new chapters
* Single page viewer
* Go to the next or previous page by clicking the left or right side of the viewer.
* Horizontal scroll slider to move between pages
* English translated manga only

## Manga Sources

* mangareader.net
* mangafreak.net
* ~~mangaeden.com~~ (removed due to conflicts with non en language sourcing)
* mangapanda.com (replaced mangaeden)
* ~~Currently adding mangahere and mangafox (now know as fanfox)~~ 

(Uses scrapping from manga sources to get the img data)

## Note

* For dev yarn/npm on root folder at cd /folder and yarn/npm start to run scripts on local
* Env using Electron for native module and jest/ travis for testing with babel and webpack configs
    
        Jest:
        Travis: npm test
    
* Can find cache for downloads and saved titles on local here (Mac OS):

        ~/Library/Application Support/manga-app/init.json

* Currently changing and fixing design (Material UI and others).
* Currently optimizing file structure
