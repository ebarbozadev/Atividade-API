import mongoose from 'mongoose';

async function conectarNoBanco() {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.qb5dynn.mongodb.net/store?retryWrites=true&w=majority&appName=Cluster0",
        { useNewUrlParser: true, useUnifiedTopology: true });

    return mongoose.connection;
}

export default conectarNoBanco;