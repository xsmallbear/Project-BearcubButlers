import Knex from "knex"

const knexInstance = Knex({
    client: "sqlite3",
    //TODO:更改成配置文件
    connection: {
        filename: "C:/Users/bigst/Desktop/Project-BearcubButlers HELP/database.db"
    },
    pool: { min: 1, max: 10 },
    acquireConnectionTimeout: 10000,
    useNullAsDefault: true
});

export default knexInstance;