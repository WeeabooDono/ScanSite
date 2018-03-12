Template.mangasList.helpers({
    "Mangas": function () {
        return Mangas.find({}, { sort: { title: 1 }}).fetch();
    }
});

Template.mangasList.events({
    "click .delete": function () {
        Mangas.remove(this._id)
    },
    "click .update": function (event) {
        event.preventDefault();
        console.log("update");
        Session.set('showUpdateForm', true)
    },
});

Template.updateMangas.helpers({
    "Manga": function () {
        Meteor.subscribe('Mangas');
        return Mangas.findOne({title: Iron.controller().getParams().title});
    }
});

