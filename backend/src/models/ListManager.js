const AbstractManager = require("./AbstractManager");

class ListManager extends AbstractManager {
  constructor() {
    super({ table: "list" });
  }

  async read(userId) {
    const [rows] = await this.database.query(
      `select lhi.ingredient_id, lhi.list_id, i.name, lhi.quantity
       from ${this.table} l
                join shopping_list.list_has_ingredients lhi on l.id = lhi.list_id
                join shopping_list.ingredient i on i.id = lhi.ingredient_id
       where l.user_id = ?`,
      [userId]
    );

    return rows.map((row) => {
      return {
        ingredientId: row.ingredient_id,
        listId: row.list_id,
        name: row.name,
        quantity: row.quantity,
      };
    });
  }
}

module.exports = ListManager;
