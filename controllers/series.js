const Series = require('./../models/series');

module.exports = app => {

    app.post('/series', (request, response) => {

        const serie = request.body;

        Series.create(serie)
            .then(seriesCreated => response.status(201).json(seriesCreated))
            .catch(errors => response.status(400).json(errors));

    })

    app.get('/series', (request, response) => {

        Series.list()
            .then(series => response.status(200).json(series))
            .catch(errors => response.status(400).json(errors));

    })

    app.get('/serie/:id', (request, response) => {

        const id = parseInt(request.params.id);

        console.log(id);
        Series.show(id)
            .then(serie => response.status(200).json(serie))
            .catch(errors => response.status(400).json(errors));

    })

    app.patch('/serie/:id', (request, response) => {

        const id = parseInt(request.params.id);
        const values = request.body;

        Series.update(id, values)
            .then(serie => response.status(200).json(serie))
            .catch(errors => response.status(400).json(errors));

    })

    app.delete('/serie/:id', (request, response) => {

        const id = parseInt(request.params.id);
        
        Series.delete(id)
            .then(serie => response.status(200).json(serie))
            .catch(errors => response.status(400).json(errors));

    })

}