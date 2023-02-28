const express = require("express")
const mongodb = require("mongodb")
const cors = require("cors")
const app = express()

app.use(cors())


const uri = "mongodb://127.0.0.1";

const client = new mongodb.MongoClient(uri);

console.log("Connected successfully to server");

const todo = client.db("todo");
const users = todo.collection("users");
const notes = todo.collection("notes");

async function insertUser(collection,email,password){
    try{
        const User = { email: email, password: password };
        await collection.insertOne(User);
        console.log(`Successfully inserted ${email}`)
    }
    catch(e){
        console.log(`Something went wrong : ${e}`)
    }
}

async function insertNote(collection,email,note){
    try{
        const Note = {email: email , note: note};
        await collection.insertOne(Note)
        console.log(`Successfully inserted Note : ${Note}`)
    }
    catch(e){
        console.log(e)
    }
}

app.listen(5000)