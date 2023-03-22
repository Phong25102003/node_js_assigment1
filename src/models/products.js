import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: "String",
    },
    price: {
        type: "number",
    },
    disc: {
        type: "String",
    },
    status: {
        type: "Boolean",
    },
    quality: {
        type: "number",
    }
})


export default mongoose.model('nodejs', productSchema);