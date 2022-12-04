require("dotenv").config()

const DB_PASS = process.env.PASSWORD

const DB_CONNECT = `mongodb+srv://GbMarques:${DB_PASS}@cluster0.bxuimul.mongodb.net/?retryWrites=true&w=majority`

module.exports = DB_CONNECT