const db = require('./../services/db');
const config = require('./../../config');

function getAll(page = 1, table) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM ${table} LIMIT ?,?`, [offset, config.listPerPage]);
  const meta = {page};

  return {
    data,
    meta
  }
}

function getSingle(page = 1, table, id) {
    const offset = (page - 1) * config.listPerPage;
    //const data = db.prepare(`SELECT * FROM ${table}  WHERE id = ? `);
    const data = db.query(`SELECT * FROM ${table}  WHERE id = ${id} LIMIT ?,?`, [offset, config.listPerPage]);
    //const instance = data.get(id);
    const meta = {page};
    //if(instance) {
    //    return data;
    //}
    return {
      data,
      meta
    }
  }

function getMultiple(page = 1, statement) {
    const offset = (page - 1) * config.listPerPage;
    const data = db.query(`${statement} LIMIT ?,?`, [offset, config.listPerPage]);
    const meta = {page};

    return {
      data,
      meta
    }
}

module.exports = {
    getAll,
    getMultiple,
    getSingle
}