const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cors
app.use(cors());

//connect to atlas 
mongoose.connect('mongodb+srv://master:<password>@cluster0-swr0v.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log('Connected to Mongo DB')
})

app.use('/graphql',graphqlHTTP({
//schema:schema
schema,
graphiql:true
}));

app.listen(4000,()=>{
    console.log('Listening to requests on port 4000');
});