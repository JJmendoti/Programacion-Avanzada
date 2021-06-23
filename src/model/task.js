// Utilizar la biblioteca de Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // estructura de la colección a trabajar task

const TaskSchema = Schema({
    title: String,
    description: String,
    status:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('tasks',TaskSchema);
