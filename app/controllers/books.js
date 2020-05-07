const fs = require('fs')
const data = require('../../data.json') 

exports.home = function(req, res) {
    return res.render("home")
}

exports.new_book = function(req, res) {
    return res.render("new_book")
}

exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('PLease, fill out all fields.')
        }
    }

    data.books.push(req.body)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err){
        if (err) return res.send("Erro")

        return res.redirect("/home")
    })

}

exports.to_read = function(req, res){
    return res.render("to_read", { books: data.books })
}

exports.reading = function(req, res){
    return res.render("reading", { books: data.books })
}

exports.read = function(req, res){
    return res.render("read", { books: data.books })
}