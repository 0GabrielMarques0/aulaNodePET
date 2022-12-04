const express = require("express");
const app = express();
const mongoose = require("mongoose")

const DB_CONNECT = require("./db/configDB");
const usersRoutes = require("./routes/usersroutes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(usersRoutes)


mongoose.connect(DB_CONNECT)
.then( () => {
    app.listen(3000,() => {
        console.log("Conectado com o mongodb ...")
    })
})
.catch( (err) => {
    console.log(err)
})

//GbMarques
//E7pNs4Y5rDx0YuLc
//mongodb+srv://GbMarques:E7pNs4Y5rDx0YuLc@cluster0.bxuimul.mongodb.net/?retryWrites=true&w=majority//