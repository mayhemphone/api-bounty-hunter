// bounties.js
// Required Modules
let express = require('express')

// Router instance
let router = express.Router()

// Routes
router.get('/', (req, res) => {
	res.send('get stub')
})

router.post('/', (req, res) => {
	res.send('psot stub')
})


router.get('/:id', (req, res) => {
	res.send(':id stub')
})

router.put('/:id', (req, res) => {
	res.send(':id put stub')
})

router.delete('/:id', (req, res) => {
	res.send(':id delete stub')
})



module.exports = router