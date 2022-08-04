const Skill = require('../models/skills')

// represent showing all the resources
// list out all the todos here

function index(req, res, next) {
    res.render('skills/index.ejs', {
        skill: Skill.getAll(),
    });
}


function show(req, res) {
    console.log(req.params, " <- req.params"),
        res.render('skills/show.ejs', {
            skill: Skill.getOne(req.params.id),

        });
}


function newSkill(req, res) {


    res.render('skills/new.ejs')

}

function create(req, res) {
    //this should be contents of the form
    //that was just submitted the browser.

    console.log(req.body, "< - req.body");
    Skill.create(req.body)
    res.redirect('/skills'); // <- telling the clinte 
    // make a get request to /todos now

}


function deleteSkill(req, res) {

    console.log(req.params, "< - req.paras dlt");

    Skill.deleteOne(req.params.id);
    res.redirect('/skills'); // <- telling the clinte


}

module.exports = {

    // index: index,
    index, // what is actually happening
    show,
    new: newSkill,
    create,
    delete: deleteSkill,

}