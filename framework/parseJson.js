module.exports = (req, res) => {
	res.send = data => {
		if (!res.headersSent) {
			res.setHeader('Content-Type', 'application/json')
		}
		res.end(JSON.stringify(data))
	}
}
