Template.mangasList.helpers({
    "Mangas": function () {
        return Mangas.find({}, {sort: {title: 1}}).fetch();
    }
});

Template.insertChapter.helpers({
    "scope": function () {
        return "tomes." + Iron.controller().getParams().index + ".chapters";
    }
});


Template.mangasList.events({
    "click .delete": function () {
        if (confirm("Voulez-vous vraiment supprimer ce manga ?")) {
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
    "click .consult": function () {
        Router.go("admin.update.tome", {title: this.title});
    },

});

Template.viewManga.events({
    "click .addTome": function () {
        Router.go("admin.update.tome", {title: Iron.controller().getParams().title});
    },
    "click .addChapter": function () {
        // can't reach the index
        //Router.go("admin.insert.chapter", {title: Iron.controller().getParams().title, index:this.index });
    },
});
