Meteor.publish('Mangas', function () {
    return Mangas.find();
});

Meteor.publish('Tomes', function () {
    return Mangas.find();
});

Meteor.publish('Chapters', function () {
    return Mangas.find();
});

Meteor.publish('Users', function (){
    return Meteor.users.find({});
});