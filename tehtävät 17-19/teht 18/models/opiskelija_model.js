const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opiskelija where opiskelijaID=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (etunimi,sukunimi,luokkatunnus, osoite) values(?,?,?,?)',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.luokkatunnus, opiskelija.osoite],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where opiskelijaID=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set etunimi=?,sukunimi=?, luokkatunnus=?, osoite=? where opiskelijaID=?',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.luokkatunnus,opiskelija.osoite, id],
      callback
    );
  }
};
module.exports = opiskelija;