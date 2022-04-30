
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let AssignmentSchema = new Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    createur : String,
    auteur : String,
    note : String,
    remarques : String,
    matiere: {
        idmatiere: Number,
        nom: String,
        image: String,
        prof: {
            idprof: Number,
            sexe: String,
            nom: String,
            photo: String,
        }
    }
});

// Pour ajouter la pagination
AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('assignments', AssignmentSchema);

