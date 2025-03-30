// Readable - Чтение
// Writable - Запись
// Duplex - Для чтение т записи Readable + Writable
// Transform - Такой же как Duplex, но можеь изменить данные по мере чтение

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
// 	if (err) throw err
// 	console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

// При создании стрима можно указать опции вторым аргументом, например кодировку в которой считывать - и не получать буфер а сразу текст.
// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), {
// 	encoding: 'utf-8',
// 	// ...
// })

// Один chunk по дефолту 64кб
// stream.on('data', chunk => {
// 	console.log(chunk)
// })

// stream.on('end', () => console.log('Закончили читать'))
// stream.on('open', () => console.log('Начали читать'))
// stream.on('error', (err) => console.log(err))

// const writableStream = fs.createWriteStream(
// 	path.resolve(__dirname, 'test2.txt')
// )

// for (let i = 0; i < 20; i++) {
// 	writableStream.write(i + '\n')
// }

// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error', (err) => console.log(err))

// const http = require('http')

// http.createServer((req, res) => {
// 	// req - readable stream
// 	// res - writable stream

// 	const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

// 	// Стрим закончит читать раньше чем пользователь скачает
// 	// stream.on('data', chunk => res.write(chunk))
// 	// stream.on('end', () => res.end)
// 	stream.pipe(res)
// })
