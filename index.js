const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseUrl = require('./framework/parseUrl')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

const app = new Application()

app.use(jsonParser)
app.use(parseUrl('http://localhost:5000'))
app.addRouter(userRouter)

const start = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://mxsin:mxsin19&Sd@cluster0.uqyha93.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
		)
		app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
	} catch (err) {
		console.log('error: ', err)
	}
}

start()
