import express from 'express';
import mongoose from 'mongoose';


const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb+srv://giorgizaqroshvili:123@cluster0.mnq3dfg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


app.use(express.json());
app.use(cors());

app.use('/films', carRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
    mongoose.connect(MONGO_URL)
        .then(() => console.log('Connected to DB'))
        .catch(err => console.log(err))
})