class Tables {

    init(connection) {

        this.connection = connection;

        this.createSeries();

    };

    createSeries() {

        const sql = 'CREATE TABLE IF NOT EXISTS Series (id int NOT NULL AUTO_INCREMENT, name varchar(100) NOT NULL, year_debut int NOT NULL, status varchar(50), PRIMARY KEY (id))';

        this.connection.query(sql, error => {

            if(error) {
                console.error(error);
            } else {
                console.log('Tabela Series criada com successo!');
            }

        })

    }

}

module.exports = new Tables();