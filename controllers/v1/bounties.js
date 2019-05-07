// bounties.js
// Required Modules
let express = require('express')

// Router instance
let router = express.Router()

// Include models
let db = require('../../models')


// Routes

//GET /bounties
router.get('/', (req, res) => {
	db.Bounty.find()
	.then(foundBounties => {	
		res.send(foundBounties)
	})
	.catch((err) => {
	    console.log('Error in GET /bounties', err)
	    res.status(500).send('Something went wrong, please contanct an admin.')
	  })

})

// POST /bounties
router.post('/', (req, res) => {
	db.Bounty.create(req.body)
	.then(createdBounty => {	
		console.log('POSTING:', createdBounty)
		res.send(createdBounty)
	})
	.catch((err) => {
	    console.log('Error in POST /bounties', err)
	    res.status(500).send('Something went wrong, please contanct an admin.')
	  })

})



router.get('/:id', (req, res) => {
	db.Bounty.findById(req.params.id)
	.then(foundBounty =>{
		res.send(foundBounty)
	})
	.catch((err) => {
	    console.log('Error in GET v1/bounties/:id', err)
	    res.status(500).send('Something went wrong, please contanct an admin.')
	  })
})

router.put('/:id', (req, res) => {
	// args: {where}, data, {options}
	db.Bounty.findOneAndUpdate(
		{ _id: req.params.id },
		req.body,
		{ new: true, useFindAndModify: false })
	.then(editBounty =>{
		res.send(editBounty)
	})
	.catch((err) => {
	    console.log('Error in DELETE v1/bounties/:id', err)
	    res.status(500).send('Something went wrong, please contanct an admin.')
	  })
})

router.delete('/:id', (req, res) => {
	db.Bounty.findOneAndDelete({
		_id: req.params.id
	},{ useFindAndModify: false })
	.then(()=>{
		res.status(204).send()
	})
	.catch((err) => {
	    console.log('Error in DELETE v1/bounties/:id', err)
	    res.status(500).send('Something went wrong, please contanct an admin.')
	  })
	
})



module.exports = router