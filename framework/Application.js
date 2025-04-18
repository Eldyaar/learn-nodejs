const http = require('http')
const EventEmitter = require('events')

module.exports = class Application {
	constructor() {
		this.emitter = new EventEmitter()
		this.server = this._createServer()
		this.middlewares = []
	}

	use(middleware) {
		this.middlewares.push(middleware)
	}

	listen(port, callback) {
		this.server.listen(port, callback)
	}

	addRouter(router) {
		Object.keys(router.endpoints).forEach(path => {
			const endpoint = router.endpoints[path]
			Object.keys(endpoint).forEach(method => {
				this.emitter.on(this._getRouteMask(path, method), (req, res) => {
					const handler = endpoint[method]
					handler(req, res)
				})
			})
		})
	}

	_createServer() {
		return http.createServer((req, res) => {
			let body = ''

			req.on('data', chunk => {
				body += chunk
			})
			req.on('end', () => {
				try {
					req.body = body ? JSON.parse(body) : {}
				} catch (err) {
					console.error('Ошибка парсинга JSON:', err.message)
					res.writeHead(400, { 'Content-Type': 'application/json' })
					return res.end(JSON.stringify({ error: 'Invalid JSON' }))
				}

				this.middlewares.forEach(middleware => middleware(req, res))

				const emitted = this.emitter.emit(
					this._getRouteMask(req.pathname, req.method),
					req,
					res
				)

				if (!emitted) {
					res.writeHead(404, { 'Content-Type': 'application/json' })
					res.end(JSON.stringify({ error: 'Route not found' }))
				}
			})
		})
	}

	_getRouteMask(path, method) {
		return `[${path}]:[${method}]`
	}
}
