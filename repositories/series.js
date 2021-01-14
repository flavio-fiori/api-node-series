const queries = require('./../infra/database/queries');

class Series {

    create(serie){

        const sql = "INSERT INTO Series SET ?";
        return queries(sql, serie);

    }

    list() {
    
        const sql = "SELECT * FROM Series";
        return queries(sql);

    }

    show(id) {

        const sql = `SELECT * FROM Series WHERE id=${id}`;
        return queries(sql);

    }

    update(id, values) {

        const sql = "UPDATE Series SET ? WHERE id=?";
        return queries(sql, [values, id]);

    }

    delete(id) {

        const sql = "DELETE FROM Series WHERE id=?";
        return queries(sql, id);

    }

}

module.exports = new Series();