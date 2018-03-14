Template.mangasList.helpers({
    "Mangas": function () {
        return Mangas.find({}, {sort: {title: 1}}).fetch();
    }
});



Template.mangasList.events({
    "click .delete": function () {
        if(confirm("Voulez-vous vraiment supprimer ce manga ?")) {
            HTTP.call('DELETE', 'http://localhost:3000/mangas/' + this._id, function (error, response) {
                if (error) console.log(error);
                else console.log(response);
            });
        }
        else console.log("requête annulée.")
        //Mangas.remove(this._id)
    },
    "click .update": function () {
        Router.go("admin.update", {title: this.title});
    },
    "click .addTome": function () {
        Router.go("admin.add.tome", {title: this.title});
    },

});

Template.viewManga.events({

    "click .updateTome": function () {
        Router.go("admin.update.tome", {title: this.title, _id:0});

    }
});

Template.updateMangas.helpers({
    "Manga": function () {
        /*
        let manga = Mangas.findOne({title: Iron.controller().getParams().title})
        console.log(manga)
        HTTP.call( 'GET', 'http://localhost:3000/mangas/' + manga._id, function( error, response ) {
            if ( error ) {
                console.log( error );
            } else {
                // presque le même
                return JSON.parse(response.content);
            }
        });
        */
        return Mangas.findOne({title: Iron.controller().getParams().title});
    }
});

Template.viewManga.helpers({
    "Manga": function () {
        return Mangas.findOne({title: Iron.controller().getParams().title});
    }
});

Template.insertTome.helpers({
    "Manga": function () {
        return Mangas.findOne({title: Iron.controller().getParams().title});
    }
});

Template.updateTome.helpers({
    "Manga": function () {
        return Mangas.findOne({title: Iron.controller().getParams().title});
    },
    "Tome": function(){
        return Mangas.findOne({title: Iron.controller().getParams().title}).tomes[Iron.controller().getParams()._id]
    }
});