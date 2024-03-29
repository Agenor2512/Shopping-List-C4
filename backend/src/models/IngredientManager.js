const AbstractManager = require("./AbstractManager");

class IngredientManager extends AbstractManager {
  constructor() {
    super({ table: "ingredient" });
  }

  async create({ name }) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name)
       values (?)`,
      [name]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select *
       from ${this.table}
       where id = ?`,
      [id]
    );

    return rows[0];
  }

  async searchByQuery(query) {
    const [rows] = await this.database.query(
      `select *
              from ${this.table}
              where LOWER(${this.table}.name)
                        like CONCAT('%', LOWER(?), '%')`,
      [query]
    );

    return rows;
  }
}

module.exports = IngredientManager;
