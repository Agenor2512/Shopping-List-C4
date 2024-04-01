const { v4: generateRandomUUID } = require("uuid");

const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async create({ name, email, password }) {
    const id = generateRandomUUID();

    const [result] = await this.database.query(
      `insert into ${this.table} (id, name, email, password)
       values (?, ?, ?, ?)`,
      [id, name, email, password]
    );

    return result.insertId;
  }
}

module.exports = UserManager;
