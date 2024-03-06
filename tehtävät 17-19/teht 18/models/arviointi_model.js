const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where arviointiID=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (opintojaksoID,opiskelijaID,arvosana, paivamaara) values(?,?,?,?)',
      [arviointi.opintojaksoID, arviointi.opiskelijaID, arviointi.arvosana, arviointi.paivamaara],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where arviointiID=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set opintojaksoID=?, opiskelijaID=?, arvosana=?, paivamaara=? where arviointiID=?',
      [arviointi.opintojaksoID, arviointi.opiskelijaID, arviointi.arvosana, arviointi.paivamaara, id],
      callback
    );
  }
};
module.exports = arviointi;