const AbstractManager = require("./AbstractManager");

class IngredientManager extends AbstractManager {
  constructor() {
    super({ table: "ingredient" });
  }

  async create(ingredient) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, quantity)
       values (?, ?)`,
      [ingredient.name, ingredient.quantity]
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

  async readAll() {
    const [rows] = await this.database.query(`select *
                                              from ${this.table}`);

    return rows;
  }
}

module.exports = IngredientManager;
