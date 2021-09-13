import mongoose from 'mongoose';
var Schema = mongoose.Schema

var clientSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    providers: {
        type: Array,
        required: true,
    }
})

var client = mongoose.model('client', clientSchema)

export default client;