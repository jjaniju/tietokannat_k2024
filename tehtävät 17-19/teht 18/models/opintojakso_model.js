const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opintojakso where opintojaksoID=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (nimi,koodi,laajuus) values(?,?,?)',
      [opintojakso.nimi, opintojakso.koodi, opintojakso.laajuus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where opintojaksoID=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set nimi=?,koodi=?, laajuus=? where opintojaksoID=?',
      [opintojakso.nimi, opintojakso.koodi, opintojakso.laajuus, id],
      callback
    );
  }
};
module.exports = opintojakso;