Template.home.helpers({
    "Mangas": function () {
        Meteor.subscribe('Mangas');
        return Mangas.find({}, { sort: { title: 1 }}).fetch();
    }
});