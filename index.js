//required modules
let express = require('express')
let cors = require('cors')
// Express instance

let app = express()
app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended:false}))
//Controllers
app.use('/v1/bounties', require('./Controllers/v1/bounties'))


// catch-all (wildcard) route
app.get ('*',(req,res)=>{
	res.status(404).send('Not Found')
})

// Attach to port
app.listen(process.env.PORT || 3000)