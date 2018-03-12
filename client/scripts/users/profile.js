Template.profile.helpers({
    "profile": function() {
        if (Meteor.user())
        return Meteor.user().profile;
    }
});