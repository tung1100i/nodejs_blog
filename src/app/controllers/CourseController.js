const Course = require('../models/Course')
const { singleOject } = require('../../ulti/mongoose');
class CourseController {

    //GET /courses/:slug
    show(req, res, next) {
            Course.findOne({ slug: req.params.slug })
                .then(course => {
                    res.render('courses/show', { course: singleOject(course) });
                })
                .catch(next);
        }
        //GET /courses/create   
    create(req, res, next) {
        res.render('courses/create');
    }

    //POST /courses/store   
    store(req, res, next) {
        const formData = req.body;
        formData.img = `https://i.ytimg.com/vi/${req.body.VideoID}/maxresdefault.jpg`;
        formData.link = `https://www.youtube.com/watch?v=${req.body.VideoID}`;
        const courese = new Course(formData);
        courese.save()
            .then(() => res.redirect('/'))
            .catch(erro => {

            })
    }

    //GET /courses/:id/edit
    edit(req, res, next) {
            Course.findById(req.params.id)
                .then(course => res.render('courses/edit', {
                    course: singleOject(course)
                }))
                .catch(next);

        }
        //PUT /courses/:id
    update(req, res, next) {

        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
        // Course.findById(req.params.id)
        //     .then(course => res.render('courses/edit', {
        //         course: singleOject(course)
        //     }))
        //     .catch(next);

    }
}


module.exports = new CourseController;