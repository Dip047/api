var {MongoClient} = require('mongodb');

var url='mongodb+srv://dipthakur139:Dip70154$@cluster0.zo4b3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client=new MongoClient(url);

const dbname='sample_mflix'
async function main()
{
    await client.connect();
    const db=client.db(dbname)
    return db
}
module.exports={main}

//var url = "mongodb://localhost:27017/";
// const dbname='admin'
// MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
// var dbo = db.db("admin"); 
// dbo.collection("student").find({}).toArray(function(err, result) {
//  if (err) throw err;
//  console.log(result);
//  db.close();
//  });
//  });