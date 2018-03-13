if (Meteor.isServer) {
    Router.onBeforeAction(Iron.Router.bodyParser.urlencoded({
        extended: false
    }));
}

Router.route("/mangas", {
    where: "server"
}).get(function () {
        // If a GET request is made, return the manga list.
        let response = Mangas.find().fetch();
        this.response.setHeader('Content-Type', 'application/json');
        this.response.end(JSON.stringify(response));

    },
    {name: 'mangas.get'}
).post(function () {
        // If a POST request is made, create a manga.
        // body ==> application/x-www-form-urlencoded
        // Editor view ==> Form data (www-url-form-encoded)

        let response;
        if (this.request.body.title === undefined) {
            response = {
                "error": true,
                "message": "invalid data"
            };
        } else {
            Mangas.insert({
                title: this.request.body.title
            });
            response = {
                "error": false,
                "message": "Manga added.",
            }
        }

        this.response.setHeader('Content-Type', 'application/json');
        this.response.end(JSON.stringify(response));

    },
    {name: 'mangas.post'}
);

Router.route("/mangas/:_id", {
    where: "server"
}).get(function () {
        // If a GET request is made, return the manga list.
        let response = Mangas.findOne({_id: this.params._id}); // no need fetch() if findOne()
        this.response.setHeader('Content-Type', 'application/json');
        this.response.end(JSON.stringify(response));

    },
    {name: 'mangas.this.get'}
).put(function () {
        // If a PUT request is made, either update the manga or
        // create it if it doesn't already exist.
        // body ==> application/x-www-form-urlencoded
        // Editor view ==> Form data (www-url-form-encoded)
        let response;
        if (this.params._id !== undefined) {
            let data = Mangas.findOne({_id: this.params._id});
            if (Mangas.findOne({_id: this.params._id})) {

                if (Mangas.update({_id: data._id},
                        {
                            $set:
                                {
                                    title: this.request.body.title,
                                    image: this.request.body.image
                                },
                        }
                    ) === 1) {
                    response = {
                        "error": false,
                        "message": "Manga information updated."
                    }
                } else {
                    response = {
                        "error": true,
                        "message": "Manga information not updated."
                    }
                }
            } else {
                response = {
                    "error": true,
                    "message": "Manga not found."
                }
            }
        }
        this.response.setHeader('Content-Type', 'application/json');
        this.response.end(JSON.stringify(response));

    },
    {name: 'mangas.this.put'}
).delete(function () {
        // If a DELETE request is made, delete a manga.
        let response;
        if (this.params._id !== undefined) {
            let data = Mangas.find({_id: this.params._id}).fetch();

            if (data.length > 0) {
                if (Mangas.remove(data[0]._id) === 1) {
                    response = {
                        "error": false,
                        "message": "Manga deleted."
                    }
                } else {
                    response = {
                        "error": true,
                        "message": "Manga not deleted."
                    }
                }
            } else {
                response = {
                    "error": true,
                    "message": "Manga not found."
                }
            }
        }
        this.response.setHeader('Content-Type', 'application/json');
        this.response.end(JSON.stringify(response));

    },
    {name: 'mangas.this.delete'}
);