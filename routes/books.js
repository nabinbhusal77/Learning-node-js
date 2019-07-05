const express = require('express'),
      router = express.Router()
      Author = require('../models/author')

const Book = require('../models/book');
    //   All books route
router.get('/', async (req, res) => {
    res.render('books/index')
})

    // new books route
router.get('/new', async (req, res) => {
    try {
        const authors = await Author.find({})
        const book = new Book()
        res.render('books/new', {
            authors: authors,
            book: book
        })
    } catch {
        res.redirect('/books')
    }
})

    // Create books route
router.post('/', async (req, res) => {
    const book = new Author({
        title: req.body.title,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        description: description
    })

})

module.exports = router