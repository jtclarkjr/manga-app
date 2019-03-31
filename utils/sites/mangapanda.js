const cheerio = require('cheerio')
const fetch = require('node-fetch')
const { NOT_LOADED, NOT_DOWNLOADED } = require('../constants.js')

function mangaURL (mangaName) {
  return `https://www.mangapanda.com/${mangaName}`
}

function sendRequest (url, buffer = false) {
  if (buffer) {
    return fetch(url).then((res) => res.buffer())
  }
  return fetch(url).then((res) => res.text())
}

function parseMangaData (mangaName, body) {
  const $ = cheerio.load(body)

  const title = $('#mangaproperties h1').text().trim()
  const description = $('#readmangasum p').text().trim()
  const image = $('#mangaimg img').attr('src')

  let chapters = []
  $('#listing tr').each(function (idx, element) {
    if (idx !== 0) {
      let [name, url, date] = [null, null, null]
      $(element).find('td').each(function (idx, element) {
        if (idx === 0) {
          name = $(element).find('a').text()
          url = `https://www.mangapanda.com${$(element).find('a').attr('href')}`
        } else if (idx === 1) {
          date = $(element).text().trim()
        }
      })

      chapters.push({
        name,
        url,
        date,
        loadState: NOT_LOADED,
        download: {
          state: NOT_DOWNLOADED,
          progress: 0
        },
        currentPage: 0,
        pages: []
      })
    }
  })

  return {
    type: 'www.mangapanda.com',
    title,
    name: mangaName,
    description,
    new: true,
    image,
    chapters,
    currentChapter: 0
  }
}

function parsePageLinks (url, body) {
  const $ = cheerio.load(body)

  let links = []
  $('#pageMenu option').each(function (idx, option) {
    const url = `https://www.mangapanda.com${option.attribs.value}`
    links.push(url)
  })

  return links
}

function parsePageImage (body) {
  const $ = cheerio.load(body)
  return $('#img').attr('src')
}

module.exports = {
  mangaURL,
  sendRequest,
  parseMangaData,
  parsePageLinks,
  parsePageImage
}
