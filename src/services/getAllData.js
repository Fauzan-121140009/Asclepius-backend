const { Firestore } = require('@google-cloud/firestore');

async function getAllData() {
    const db = new Firestore({databaseId: "(default)"});
    const predictionCollection = db.collection('predictions');

    const allData = await predictionCollection.get();
    return allData;
}

module.exports = getAllData;