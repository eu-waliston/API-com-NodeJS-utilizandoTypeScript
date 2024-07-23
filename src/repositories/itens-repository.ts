import Item from "../models/item";
import database from "./database";

const itensRepository = {
    criar: (item: Item, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO itens(nome, descricao) VALUES (?,?)'

        const params = [item.nome, item.descricao]
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },

    lerTodos: (callback: (itens: Item[]) => void) => {
        const sql = "SELECT * FROM itens"
        const params: any[] = []
        database.all(sql, params, (_err, rows: any) => callback(rows))
    },

    ler: (id: number, callback: (item?: Item) => void) => {
        const sql = 'SELECT * FROM itens WHERE id = ?'
        const params = [id]
        database.get(sql, params, (_err, row: any) => callback(row))
    }
}

export default itensRepository