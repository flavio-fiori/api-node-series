const customExpress = require('./config/customExpress');
const connection = require('./infra/database/connection');
const Tables = require('./infra/database/tables');

connection.connect(error => {

    if(error) {

        console.error('Error:', error);

    } else{
        console.log('Conectado ao mysql');

        Tables.init(connection);

        const app = customExpress();
        app.listen(3000, () => console.log('Server started port 3000'));

    }

})


