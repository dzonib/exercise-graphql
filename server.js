const {GraphQLServer} = require('graphql-yoga');
const mongoose = require('mongoose');

const db = require('./config/key').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })

const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log('server runnin on http://localhost:4000'))