Router.onBeforeAction(function () {
    if (!Meteor.userId() && !Meteor.loggingIn()) {
        this.render('login');
    } else {
        this.next();
    }
}, {
    except: [
        'user.login',
        'home',
        'user.register',
        'view'
    ]
});
/*
Router.onBeforeAction(adminHook, {
    only: ['admin']
    // or except: ['routeOne', 'routeTwo']
});
*/
Router.configure({
    layoutTemplate: "mainLayout",
    notFoundTemplate: '404'
});

Router.route('/', {
    name: "home",
    template: "home"
});

Router.route('/register', {
    name: "user.register",
    template: "register"
});

Router.route('/login', {
    name: "user.login",
    template: "login"
});

Router.route('/profile', {
    name: "user.profile",
    template: "profile"
});


Router.route('/mangas/view/:title', {
    name: "view",
    template: "viewManga",
});

// administration

function isAdmin() {
    return !Roles.userIsInRole(Meteor.userId(), Meteor.user().roles, "admin");
}

Router.route('/admin', {
    name: "admin",
    template: "admin",
    onBeforeAction: function () {
        if (isAdmin()) this.next();
        else this.redirect('/');
    }
});

Router.route('/admin/users', {
    name: "admin.users",
    template: "usersList",
    onBeforeAction: function () {
        if (isAdmin()) this.next();
        else this.redirect('/');
    }
});

Router.route('/admin/mangas', {
    name: "admin.mangas",
    template: "mangasList",
    onBeforeAction: function () {
        if (isAdmin()) this.next();
        else this.redirect('/');
    }
});

Router.route('/admin/mangas/insert', {
    name: "admin.insert",
    template: "insertMangas",
    onBeforeAction: function () {
        if (isAdmin()) this.next();
        else this.redirect('/');
    }
});

Router.route('/admin/mangas/:title', {
    name: "admin.update",
    template: "updateMangas",
    onBeforeAction: function () {
        if (isAdmin()) this.next();
        else this.redirect('/');
    }
});
