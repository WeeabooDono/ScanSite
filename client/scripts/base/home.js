Template.home.helpers({
    "Mangas": function () {
        return Mangas.find({}, { sort: { title: 1 }}).fetch();
    }
});