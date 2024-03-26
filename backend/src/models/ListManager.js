const AbstractManager = require("./AbstractManager");

class ListManager extends AbstractManager {
  constructor() {
    super({ table: "list" });
  }

  async read(userId) {
    const [rows] = await this.database.query(
      `select i.name, lhi.quantity
       from ${this.table} l
                join shopping_list.list_has_ingredients lhi on l.id = lhi.list_id
                join shopping_list.ingredient i on i.id = lhi.ingredient_id
       where l.user_id = ?`,
      [userId]
    );

    return rows;
  }
}

module.exports = ListManager;
