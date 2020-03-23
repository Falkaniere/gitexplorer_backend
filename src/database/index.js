import Sequelize from 'sequelize';

import Repos from '../app/models/Repos';

import databaseConfig from '../config/database';

const models = [Repos];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
