let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let AssignmentSchema = new Schema({
    idmatiere: Number,
    nom: String,
    image: String,
    prof: {
        idprof: Number,
        sexe: String,
        nom: String,
        photo: String,
    }
});

// Pour ajouter la pagination
AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('matieres', AssignmentSchema);

