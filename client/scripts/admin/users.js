Template.usersList.helpers({
    "users": function () {
        return Meteor.users.find();
    },
    "count": function() {

        return Meteor.users.find().count();
    },
    "role": function() {
        let prefix = "User";
        if (getAdmin(this)) prefix = "Admin";
        return prefix;
    }
});

Template.usersList.events({
    "click .delete": function () {
        if (!getAdmin(this))
        Meteor.users.remove(this._id);
        else alert("You don't have rights to delete this one.")
    },
    "click .update": function () {
        console.log(getRights(this));
    },
});


function getAdmin(user){
    let res = false;
    if (user.roles !== undefined) {
        user.roles.forEach(function(role){
            if (role === "admin"){
                res = true;
            }
        });
    }
    return res;
}


function getRights(user) {
    return Roles.userIsInRole(user._id, ["admin"]/*user.roles*/, "admin");
}