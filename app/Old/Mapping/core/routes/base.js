
module.exports = function(app, db) {
    app.get('/', (req, res)=>{
        res.send(<p>page was deleted. SAD.</p>);
    })
};