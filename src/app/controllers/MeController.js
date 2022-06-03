const Course = require('../models/Course')
const { multiOject } = require('../../ulti/mongoose');
class MeController {

    //GET /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: multiOject(courses)
            }))
            .catch(next);

    }
}


module.exports = new MeController;