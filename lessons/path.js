const path = require('path')

// Склеить участки пути
// console.log(path.join('first', 'second'))
// console.log(path.join(__dirname))
// console.log(path.join(__filename))
// console.log(path.join(__dirname, '..', '..'))

// Получить обсолютный путь
// const fullpath = path.resolve(__dirname, 'first', 'second')
// console.log('Парсинг пути: ', path.parse(fullpath))
// console.log('Разделитель в ОС: ', path.sep)
// console.log('Проверка на абсолютный путь: ', path.isAbsolute('first/second'))
// console.log('Название файла: ', path.basename(fullpath))
// console.log('Расширение файла: ', path.extname(fullpath))

// ========

const siteUrl = 'http://localhost:8080/users?id=123'

const url = new URL(siteUrl)

console.log(url)