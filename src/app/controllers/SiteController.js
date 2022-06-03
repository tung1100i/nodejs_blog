const Course = require('../models/Course')
const { multiOject } = require('../../ulti/mongoose');
class SiteController {

    //GET /home
    index(req, res, next) {
        Course.find({})
            .then(courses => {

                res.render('home', { courses: multiOject(courses) })

            })
            .catch(next);

    }

    //GET /search
    search(req, res) {
        res.render('search');
    }
}


module.exports = new SiteController;