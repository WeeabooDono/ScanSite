Utils = {
    formatDate: function(date) {
        date = new Date(date);

        let day = date.getDate().toString();
        let month = (date.getMonth() + 1).toString();
        let year = date.getFullYear();

        if (day.length === 1) {
            day = '0' + day;
        }

        if (month.length === 1) {
            month = '0' + month;
        }

        return day + '/' + month + '/' + year;
    },
    pathFor: function(routeName, params){
        // Similaire au helper "pathFor", mais utilisable directement dans le code
        return Router.routes[routeName].path(params);
    }
};