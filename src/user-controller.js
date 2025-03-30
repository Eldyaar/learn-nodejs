const User = require('./user-model')

const getUser = async (req, res) => {
	let users
	const { id } = req.params

	if (id) users = await User.findById(id)
	else users = await User.find()

	res.send(users)
}

const createUser = async (req, res) => {
	try {
		const user = await User.create(req.body)
		res.send(user)
	} catch (err) {
		res.writeHead(500, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify({ error: err.message }))
	}
}

module.exports = { getUser, createUser }
