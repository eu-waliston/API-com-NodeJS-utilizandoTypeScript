import sqlite3 from "sqlite3";
const DBSOURCE = 'db.sqlite'

const SQL_ITENS_CREATE = `
    CREATE TABLE itens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT
    )

`

const databse = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log("Base de dados conectada com sucesso.")
        databse.run(SQL_ITENS_CREATE, (err) => {
            if (err) {
                //Possivelmente a tabela ja foi criada
            } else {
                console.log("Tabela de itens criada com sucesso");

            }
        })

    }
})

export default databse;

