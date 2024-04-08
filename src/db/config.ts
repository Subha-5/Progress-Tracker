import mongoose from 'mongoose';

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!,
      {
        dbName: process.env.DB_NAME!,
        appName: process.env.APP_NAME!
      }
    );
    
    const connection = mongoose.connection
    connection.on('connected', () => {
      'MongoDB connected'
    })
    connection.on('error', (err) => {
      console.log('MongoDB connection error, please make sure DB is up and running.' + err);
      process.exit(1);
    })
  } catch (error) {
    console.log('Something went wrong in connecting to DB');
    console.log(error)
  }
}