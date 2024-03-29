const AbstractManager = require("./AbstractManager");

class ListHasIngredientsManager extends AbstractManager {
  constructor() {
    super({ table: "list_has_ingredients" });
  }

  async create({ listId, ingredientId, quantity = 0 }) {
    const [result] = await this.database.query(
      `insert into ${this.table} (list_id, ingredient_id, quantity)
       values (?, ?, ?)`,
      [listId, ingredientId, quantity]
    );

    return result.insertId;
  }

  async update({ listId, ingredientId, quantity }) {
    const [rows] = await this.database.query(
      `update ${this.table}
       set quantity = ?
       where ingredient_id = ?
         and list_id = ?`,
      [quantity, ingredientId, listId]
    );

    return rows[0];
  }

  async delete({ listId, ingredientId }) {
    await this.database.query(
      `delete from ${this.table} where list_id = ? and ingredient_id = ?`,
      [listId, ingredientId]
    );
  }
}

module.exports = ListHasIngredientsManager;
