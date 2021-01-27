exports.viewProject = function(req, res){
    var name = req.params.name;
    console.log("This project name is: " + name);
    res.render("project", {
        "projectName": name
    });
};