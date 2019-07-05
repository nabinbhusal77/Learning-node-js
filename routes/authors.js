const express = require('express'),
      router = express.Router()

const Author = require('../models/author');
      
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const authors = await Author.find(searchOptions)
        res.render('authors/index', {
            authors: authors,
            searchOptions: req.query
        })
    } catch {
        res.redirect('/');
    }
})

router.get('/new', (req, res) => {
    res.render('authors/new', {author: new Author()})
})

router.post('/', async (req, res) => {

    const author = new Author({
        name: req.body.name
    })
    try {
        let saveAuthor = await author.save()
        res.redirect('/authors')

    } catch (error) {
        res.render('authors/new', {
            author: req.body.name, 
            errorMsg: 'Error Creating User..'})
    }

})

module.exports = router