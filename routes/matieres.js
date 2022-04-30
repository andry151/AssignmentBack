let Matiere = require('../model/matiere');

// Récupérer tous les matières (GET)
function getMatieres(req, res){
    Matiere.find((err, matieres) => {
        if(err){
            res.send(err)
        }

        res.send(matieres);
    });
}


// Récupérer une matière par son id (GET)
function getMatiere(req, res){
    let matiereId = req.params.id;

    Matiere.findOne({_id: matiereId}, (err, matiere) =>{
        if(err){res.send(err)}
        res.json(matiere);
    })
}

// Ajout d'un assignment (POST)
function postMatiere(req, res){
    let matiere = new Matiere();
    matiere.idmatiere = req.body.idmatiere;
    matiere.nom = req.body.nom;
    matiere.image = req.body.image;
    matiere.prof = req.body.prof ;

    console.log("POST matiere reçu :");
    console.log(matiere)

    matiere.save( (err) => {
        if(err){
            res.send('cant post matiere ', err);
        }
        res.json({ message: `${matiere.nom} saved depuis la version HEROKU!`})
    })
}

// Update d'une matière (PUT)
function updateMatiere(req, res) {
    console.log("UPDATE recu matière : ");
    console.log(req.body);
    Matiere.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, matiere) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: `${matiere.nom} updated!`})
        }

      // console.log('updated ', assignment)
    });

}

// suppression d'une matière (DELETE)
function deleteMatiere(req, res) {

    Matiere.findByIdAndRemove(req.params.id, (err, matiere) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${matiere.nom} deleted`});
    })
}



module.exports = { getMatieres, postMatiere, getMatiere, updateMatiere, deleteMatiere };
