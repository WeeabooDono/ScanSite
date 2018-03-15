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
    'updateManga': {
        onSubmit: function (doc) {
            //handeled by type="update"
            return false; // Dans tout les cas, arrete la soumission des donneés.
        },

        onSuccess: function () {
            history.back()
        },

        onError: function (formType, err) {
            alert(err.reason)
        }
    },


});