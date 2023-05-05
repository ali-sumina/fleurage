import express from "express";
import mysql from "mysql";

//CONNECTION, SETUP

const server = express();
server.use(express.json());
const port = 4600;

server.listen (port, function(){
    console.log("Server started on port", port);
})

const db = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'Fleurage'
})

db.connect (function(error){
    if (error) {
        console.log("Connection to SQL failed", error)
    } else {
        console.log ("Successfully connected to SQL db")
    }
})


// CRUD

server.get('/seebouquets', function (req, res){
    let SQLquery = 'CALL `getAllProducts`()';

    db.query(SQLquery, function(error, data){
        if (error) {
            res.json({error_message: error})
        } else {
            res.json({bouquets:data})
        }
    })
})

server.post('/addbouquet', function (req,res){
    let SQLquery = 'CALL `createProduct`(?, ?, ?, ?, ?)';

    db.query(SQLquery, [req.body.image, req.body.title, req.body.description, req.body.price, req.body.stock], function(error, data){
        if (error) {
            res.json({error_message:error})
        } else {
            res.json({message:data})
        }
    })
})

server.put('/updatebouqprice', function(req,res){
    let SQLquery = 'CALL `updatePrice`(?, ?)';

    db.query(SQLquery, [req.body.id, req.body.price], function (error,data){
        if (error) {
            res.json({error_message:error})
        } else {
            res.json({message:data})
        }
    })
})

server.delete('/deletebouquet', function (req,res){
    let SQLquery = 'CALL `deleteProduct`(?)';

    db.query(SQLquery, [req.body.id], function (error,data){
        if (error) {
            res.json ({error_message:error})
        } else {
            res.json ({message:data})
        }
    })
})

server.post ('/bouquets', function (req,res){
    let title = req.body.title
    let image = req.body.image
    let description = req.body.description
    let price = req.body.price
    let stock = req.body.stock

    let SQLInsertQuery = 'CALL `createProduct`(?, ?, ?, ?, ?)'

    db.query(SQLInsertQuery, [image, title, description, price, stock], function(error, data){
        if (error) {
            res.json({error_message:error})
        } else {
            res.json({message:"success", data: data})
        }
    })
    })


//GET BY PROD ID
server.get('/bouquets/:id/', (req,res) => {
    let SQLquery = 'CALL `getProductByID`(?)';
    db.query(SQLquery, [req.params.id], (error,data) => {
        (error) ? res.json( { error_message: error } ) : res.json( { message: data[0] } )
        //in data if [0] -- won't take meta data
    })
    // let reqID = req.params.id;

    // console.log(reqID)

    //Send it back
    // res.json({id:reqID})

    // res.json({id: req.params.id, title: req.body.title})


})


//PUT  by prod id

server.put('/bouquets/:id', (req, res) => {
    let SQLquery = 'CALL `updatePrice`(?, ?)';
    db.query(SQLquery, [req.params.id, req.body.price], (error, data) => {
        (error) ? res.json( { error_message: error}) : res.json ( { message: "updated", data: data })
    })
})

// DELETE by prod id

server.delete('/bouquets/:id', (req, res) => {
    let SQLquery = 'CALL `deleteProduct`(?)';
    db.query(SQLquery, [req.params.id], (error, data) => {
        (error) ? res.json({ error_message: error }) : res.json({ message: "deleted", data: data })
    })
})