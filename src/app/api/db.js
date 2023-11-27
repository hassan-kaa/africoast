import { MongoClient } from 'mongodb';

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  if (!client.isConnected()) {
    await client.connect();
  }

  cachedClient = client;
  return client;
}

export default connectToDatabase;
