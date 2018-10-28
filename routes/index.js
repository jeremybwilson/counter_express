const express = require('express');
const router = express.Router();

/* GET  => Counter home page. */

router.get('/', (request, response, next) => {
    console.log('getting to index');
    response.render('index', { counter: addOneToCounter(request), title: 'Counter' });
});

router.post('/by-two', (request, response, next) => {
    addOneToCounter(request);

    response.redirect('/');
});

router.post('/reset', (request, response) => {
    request.session.destroy();
    response.redirect('/');
});

function addOneToCounter(request) {
    return request.session.counter = request.session.counter ? request.session.counter + 1 : 1;
}

module.exports = router;