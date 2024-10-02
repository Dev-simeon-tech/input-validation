const  {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')
const  dbName = 'usersdb';

let  db
module.exports  = {
    connectDb:  async (func)=> {
        try {
            await client.connect();
            console.log('Connected to MongoDB');
            
            db = client.db(dbName);
            
            return func();
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);
            return func(err)
            // process.exit(1);
        }
    },
    getDb: ()=>{
        return db;
    }
}