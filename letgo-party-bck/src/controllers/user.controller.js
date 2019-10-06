const db = require("../database/db.config")

exports.createUser = (req,res)=>{
    try{
        res.status(200).send({ message: "Ocurrió algo maravilloso." })
    }catch(error){
        res.status(500).send({ error: "Ocurrió un error." })
    }
}

exports.findUsers = (req,res)=>{
    try{
        res.status(200).send({ message: "Ocurrió algo maravilloso." })
    }catch(error){
        res.status(500).send({ error: "Ocurrió un error." })
    }
}