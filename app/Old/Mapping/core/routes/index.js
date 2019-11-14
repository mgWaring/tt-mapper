const base = require('./base');
const notes = require('./router_notes');


module.exports = function(app, db) {
  notes(app, db);
  base(app, db);
  // Other route groups could go here, in the future
};