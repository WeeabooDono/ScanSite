UI.registerHelper('getGlobal', function(varName) {
    return Globals[varName];
});

UI.registerHelper('setTitle', function(title){
    if(!title){
        title = Globals.appName;
    }
    else{
        title += " - " + Globals.appName;
    }
    document.title = title;
});

UI.registerHelper('isAdmin', function () {
    if(Meteor.user().roles !== undefined)
    return Roles.userIsInRole(Meteor.userId(), ['admin']);
});

UI.registerHelper('Manga', function() {
    return Mangas.findOne({title: Iron.controller().getParams().title});
});