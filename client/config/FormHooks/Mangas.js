AutoForm.hooks({
    'insertMangas': {
        onSubmit: function (doc) {
            //handeled by type="insert"
            return false; // Dans tout les cas, arrete la soumission des donneés.
        },

        onSuccess: function () {
            Router.go(Utils.pathFor('admin.mangas'));
        },

        onError: function (formType, err) {
            alert(err.reason)
        }

    },
    'updateMangas': {
        onSubmit: function (doc) {
            //handeled by type="update"
            return false; // Dans tout les cas, arrete la soumission des donneés.
        },

        onSuccess: function () {
            Router.go(Utils.pathFor('admin.mangas'));
        },

        onError: function (formType, err) {
            alert(err.reason)
        }
    },
    'addTomes': {
        onSubmit: function (doc) {
            console.log(doc)
            Mangas.update(
                {_id: doc._id},
                {
                    $set:
                        {
                            tomes: doc.tomes ? doc.tomes: {}
                        },

            }, function(err){
                if(err){
                    error = new Error("Une erreur s'est produite");
                }
            });
            //handeled by type="update"
            return false; // Dans tout les cas, arrete la soumission des donneés.
        },

        onSuccess: function () {
            Router.go(Utils.pathFor('admin.mangas'));
        },

        onError: function (formType, err) {
            alert(err.reason)
        }
    }
});