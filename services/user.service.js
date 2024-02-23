const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');
class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const user = await pool.query(query);
    return user.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;