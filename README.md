# Manga App

Manga module app using React and Redux.

## Features

* Can add and view manga available from the below sites with the URL
* Download chapters
* Download cache, resume download on re-opening app
* No need to confirm the latest chapter since there is a queue that does that
* Single page viewer
* Go to the next or previous page by clicking the left or right side of the viewer.
* Horizontal scroll slider to move between pages
* English version manga

## Manga Sources

* mangareader.net
* mangafreak.net
* ~~mangaeden.com~~ (removed due to conflicts with non en language sourcing)
* mangapanda.com (replaced mangaeden)
* Currently adding mangahere and mangafox (now know as fanfox)

## Note

* For env using Electron for native module and Jest for testing with babel and webpack configs
* Can find cache for downloads and saved titles on local here:

    ~/Library/Application Support/manga-app/init.json

* Currently changing and fixing design (Material UI and others).
* Currently optimizing file structure
