const express = require('express')
const routes = express.Router()
const books = require('./controllers/books')

routes.get("/", function(req, res){
    return res.redirect("/home")
})

routes.get("/home", books.home)
routes.get("/new_book", books.new_book)
routes.post("/new_book", books.post)
routes.get("/to_read", books.to_read)
routes.get("/reading", books.reading)
routes.get("/read", books.read)

module.exports = routes