import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var providerSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const providers = mongoose.model('providers', providerSchema)

export default providers;