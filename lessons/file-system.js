const fs = require('fs')
const path = require('path')

//  Создание
// fs.mkdirSync(path.resolve(__dirname, 'dir'))
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {
// 	recursive: true,
// })

// console.log('Start')
// fs.mkdir(path.resolve(__dirname, 'dir'), err => {
// 	if (err) {
// 		console.log('error: ', err)
// 		return
// 	}
// 	console.log('Directory created')
// })
// console.log('End')

//  Удаление
// fs.rmdir(path.resolve(__dirname, 'dir'), err => {
// 	if (err) {
// 		throw err
// 	}
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'test file content', err => {
// 	if (err) throw err
// 	console.log('Файл записан')

// 	fs.appendFile(
// 		path.resolve(__dirname, 'test.txt'),
// 		' added test file content',
// 		err => {
// 			if (err) throw err
// 			console.log('Файл обновлен')
// 		}
// 	)
// })

const writeFileAsync = async (path, data) => {
	return new Promise((resolve, rejected) =>
		fs.writeFile(path, data, err => {
			if (err) {
				return rejected(err.message)
			}
			resolve()
		})
	)
}

const appendFileAsync = async (path, data) => {
	return new Promise((resolve, rejected) =>
		fs.appendFile(path, data, err => {
			if (err) {
				return rejected(err.message)
			}
			resolve()
		})
	)
}

const readFileAsync = async path => {
	return new Promise((resolve, rejected) =>
		fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
			if (err) {
				return rejected(err.message)
			}
			resolve(data)
		})
	)
}

const removeFileAsync = async path => {
	return new Promise((resolve, rejected) =>
		fs.rm(path, err => {
			if (err) {
				return rejected(err.message)
			}
			resolve()
		})
	)
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'test data')
// 	.then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123'))
// 	.then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456'))
// 	.then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '789'))
// 	.then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
// 	.then(data => console.log(data))
// 	.catch(err => console.log('error: ', err))

// removeFileAsync(path.resolve(__dirname, 'test.txt')).then(() =>
// 	console.log('File was removed')
// )

const info = process.env.INFO || ''

writeFileAsync(path.resolve(__dirname, 'info.txt'), info).then(() =>
	readFileAsync(path.resolve(__dirname, 'info.txt'))
		.then(data => data.split(' ').length)
		.then(res =>
			writeFileAsync(
				path.resolve(__dirname, 'count.txt'),
				`words count: ${res}`
			)
		)
		.then(() => removeFileAsync(path.resolve(__dirname, 'info.txt')))
		.catch(err => console.log('error: ', err))
)
