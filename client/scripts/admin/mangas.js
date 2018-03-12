Template.mangasList.helpers({
    "Mangas": function () {
        return Mangas.find({}, { sort: { title: 1 }}).fetch();
    }
});

Template.mangasList.events({
    "click .delete": function () {
        Mangas.remove(this._id)
    },
    "click .update": function () {
        Router.go("admin.update", {title: this.title});
    },
});

Template.updateMangas.helpers({
    "Manga": function () {
        Meteor.subscribe('Mangas');
        return Mangas.findOne({title: Iron.controller().getParams().title});
    }
});

Template.viewManga.helpers({
    "Manga": function () {
        Meteor.subscribe('Mangas');
        return Mangas.findOne({title: Iron.controller().getParams().title});
    }
});
