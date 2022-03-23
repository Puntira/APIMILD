const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

router.get('/',(req , res) => {
    res.send("Hello World")
})

router.get('/:id', (req,res) => {
    res.send(req.params.id)
})


module.exports = router
