const { response } = require('express');
const repositories = require('./../repositories/series');

class Series {

    create(serie) {

        return repositories.create(serie)
            .then(response => {
                const id = response.insertId;
                return {...serie, id}
            })
        
    }

    list(){

        return repositories.list();

    }

    show(id) {

        return repositories.show(id);

    }

    update(id, values) {
        
        return repositories.update(id, values);
    
    }

    delete(id) {

        return repositories.delete(id);

    }

}

module.exports = new Series();