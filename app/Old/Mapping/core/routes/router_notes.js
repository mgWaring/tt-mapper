module.exports = function (app, db) {
    app.get('/notes', (req, res) => {
        res.send(`<html><h1>what's up</h1>`);
    });

    app.put('/notes', (req, res) => {
        //bleh
    });

    app.post('/notes', (req, res) => {
        console.log(req.body)
        res.send('Hello')
    });

    app.delete('/notes', (req, res) => {
        //bleh
    });

};