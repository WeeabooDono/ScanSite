import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Chapters = new Mongo.Collection("chapters");

Chapters.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});

Tomes = new Mongo.Collection("tomes");

Tomes.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});

Mangas = new Mongo.Collection("mangas");

Mangas.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});



Globals.schemas.Chapters = new SimpleSchema({
    title: {
        type: String,
        label: "Titre"
    }
});

Globals.schemas.Tomes = new SimpleSchema({
    title: {
        type: String,
        label: "Titre"
    },
    chapters: {
        type: Array,
        optional: true,
        label: "Chapitres"
    },
    "chapters.$":{
        type: Globals.schemas.Chapters,
        label: "Chapitre"
    }
});

Globals.schemas.Mangas = new SimpleSchema({
    title: {
        type: String,
        label: "Titre"
    },
    tomes: {
        type: Array,
        optional: true,
        label: "Tomes"
    },
    "tomes.$":{
        type: Globals.schemas.Tomes,
        label: "Tome"
    },
    image: {
        type: String,
        optional: true
    },
    synopsis: {
        type: String,
        optional: true,
        label: "Biographie",
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    },
    published: {
        type: Date,
        optional: true,
        label: "Date de publication",
        autoform: {
            afFieldInput: {
                type: "date"
            }
        }
    }
});


Chapters.attachSchema(Globals.schemas.Chapters);
Tomes.attachSchema(Globals.schemas.Tomes);
Mangas.attachSchema(Globals.schemas.Mangas);