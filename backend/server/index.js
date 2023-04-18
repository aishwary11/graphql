require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 5000;
const schema = require('./schema/schema');
const connectDB = require('./config/db');
connectDB();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));
app.listen(port, console.log(`🚀 Server running on ${port}`));