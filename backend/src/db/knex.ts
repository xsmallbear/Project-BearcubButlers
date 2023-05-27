import Knex from "knex"

const knex = Knex({
    client: "sqlite3",
    connection:{
        filename:"C:/Users/bigst/Desktop/Project-BearcubButlers HELP/database.db"
    }
});

export default knex;