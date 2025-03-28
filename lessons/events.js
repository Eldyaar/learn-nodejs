// const Emitter = require('events')

// const emitter = new Emitter()

// const callback = (data, second, thrid) => {
// 	console.log('message: ', data)
// 	console.log('second argument: ', second)
// }

// emitter.on('message', callback)
// emitter.once('message', callback)

// emitter.removeAllListeners()
// emitter.removeListener('message', callback)

// const MESSAGE = process.env.message || ''

// if (MESSAGE) {
// 	emitter.emit('message', MESSAGE, 123)
// } else {
// 	emitter.emit('message', 'Not arguments')
// }

// Когда использовать?
// http
// websockets
// long pulling
// clusters
