Template.thumbnail.helpers({
    "folder": function () {
        return "/mangas/"
            + Iron.controller().getParams().title + "/"
            + Iron.controller().getParams().tome + "/"
            + Iron.controller().getParams().chapter;
    },
    "pictures": function () {
        let tomes = Mangas.findOne(Mangas.findOne({title: Iron.controller().getParams().title})).tomes;
        let folder = Iron.controller().getParams().tome + "/" + Iron.controller().getParams().chapter;
        let thumbs = [];
        tomes.forEach(function (tome) {
            if (tome.folder === Iron.controller().getParams().tome) {
                let chapters = tome.chapters;
                for (let i = 0; i < chapters.length; i++) {
                    let curr_folder = chapters[i].folder;
                    if (curr_folder === folder) {
                        let pictures = chapters[i].pictures;
                        for (let j = 0; j < pictures.length; j++) {
                            thumbs.push(pictures[j])
                        }
                    }
                }
            }
        });
        return thumbs;
    }
});