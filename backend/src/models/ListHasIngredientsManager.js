const AbstractManager = require("./AbstractManager");

class ListHasIngredientsManager extends AbstractManager {
  constructor() {
    super({ table: "list_has_ingredients" });
  }

  async create({ listId, ingredientId }) {
    const [result] = await this.database.query(
      `insert into ${this.table} (list_id, ingredient_id)
       values (?, ?)`,
      [listId, ingredientId]
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
}

module.exports = ListHasIngredientsManager;
