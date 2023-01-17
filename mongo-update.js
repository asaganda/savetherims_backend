const { MongoClient } = require('mongodb')
const uri = process.env.MONGODB_URI

const client = new MongoClient(uri)

async function run() {
    // try {
    //     await client.connect()
    //     const db = client.db("savetherims")
    //     const collection = db.collection("coordinates")

    //     const filter = {}
    //     const updateDoc = {
    //         $set: {
    //             fixed: false,
    //         },
    //         upsert: false,
    //         multi: true
    //     }
    //     const result = await collection.updateMany(filter, updateDoc)
    //     console.log("Number of documents updated: " + result.modifiedCount)
    // } finally {

    //     await client.close()
    // }
    
    // try {
    //     await client.connect()
    //     const db = client.db("savetherims")
    //     const collection = db.collection("coordinates")

    //     // const filter = {}
    //     // const updateDoc = {
    //     //     $set: {
    //     //         fixed: false,
    //     //     },
    //     //     upsert: false,
    //     //     multi: true
    //     // }
    //     // const result = await collection.updateMany(filter, updateDoc)
    //     // console.log("Number of documents updated: " + result.modifiedCount)
    //     const cursor = collection.find()
    //     await cursor.forEach(console.log)
    // } finally {

    //     await client.close()
    // }
    try {
        await client.connect()
        console.log("connected, yay!")

        // const filter = {}
        // const updateDoc = {
        //     $set: {
        //         fixed: false,
        //     },
        //     upsert: false,
        //     multi: true
        // }
        // const result = await collection.updateMany(filter, updateDoc)
        // console.log("Number of documents updated: " + result.modifiedCount)
        
    } catch (err) {
        console.log(err.stack)
    } 
    finally {
        await client().close();
    }
}
run().catch(console.dir);