AutoForm.hooks({
    'insertMangas': {
        onSubmit: function (doc) {
            // console.log(doc);
            let error = null;
            let title = doc.title;
            Mangas.insert({
                title: title
            }, function (err) {
                if (err) {
                    error = new Error("Une erreur s'est produite");
                }
            });

            if (error === null) {
                this.done(); // Appelle onSuccess
            }
            else {
                this.done(error); // Appelle onError
            }

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
            let error = null;

            let title = doc.title;
            Mangas.update({title: title},
                {
                    $set:
                        {
                            title: title,
                        },
                }
                , function (err) {
                    if (err) {
                        error = new Error("Une erreur s'est produite");
                    }
                });

            if (error === null) {
                this.done(); // Appelle onSuccess
            }
            else {
                this.done(error); // Appelle onError
            }

            return false; // Dans tout les cas, arrete la soumission des donneés.
        },

        onSuccess: function () {
            Router.go(Utils.pathFor('admin'));
        },

        onError: function (formType, err) {
            alert(err.reason)
        }
    }
});