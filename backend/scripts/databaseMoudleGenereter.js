"use strict";
const fs = require('fs');
const { exit } = require('process');
const sqlite3 = require('sqlite3').verbose();
if (process.argv.length < 3) {
    console.log("参数错误")
    exit()
}
console.log("path:", process.argv[2])
const db = new sqlite3.Database(process.argv[2]);
const countTables = () => {
    return new Promise((resolve, reject) => {
        db.serialize(function () {
            db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, tables) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(tables);
                }
            });
        });
    });
};
const handleColumns = (tableName) => {
    return new Promise((resolve, reject) => {
        db.serialize(function () {
            db.all(`PRAGMA table_info(${tableName});`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        })
    })
}
(async () => {
    try {
        const tableNames = []
        const needHandleTables = await countTables();
        needHandleTables.map((table) => {
            tableNames.push(table.name)
        });
        for (let i = 0; i < tableNames.length; i++) {
            const tableName = tableNames[i]
            const columns = await handleColumns(tableName)
            let resultStr = `export default class ${tableName}`
            let constructorStr = "constructor("
            let constructorInStr = ""
            resultStr = resultStr + "{\n"
            for (let j = 0; j < columns.length; j++) {
                let res = columns[j]
                resultStr += res.name
                constructorStr += res.name
                if (res.type === "TEXT") {
                    resultStr += ": String\n"
                    constructorStr += ": String"
                }
                if (res.type === "DATETIME" || res.type === "DATE") {
                    resultStr += ": Date\n"
                    constructorStr += ": Date"
                }
                if (res.type === "BLOB") {
                    resultStr += ": Boolean\n"
                    constructorStr += ": Boolean"
                }
                if (res.type === "NUMERIC") {
                    resultStr += ": Number\n"
                    constructorStr += ": Number"
                }
                if (j < columns.length - 1) {
                    constructorStr += ", "
                }
                constructorInStr += "this." + res.name + " = " + res.name + "\n"
            }
            constructorStr = constructorStr + ")\n{" + constructorInStr + "}"
            resultStr = resultStr + constructorStr + "\n}\n"
            fs.writeFileSync(`genereters/${tableName}.ts`, resultStr);
            console.log("正在生成" + tableName + ".ts")
        }
    } catch (error) {
        console.error(error);
    } finally {
        db.close();
    }
})();