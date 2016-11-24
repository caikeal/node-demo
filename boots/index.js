import Sequelize from 'sequelize';
import config from '../configs/db.js';

let sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: config.type,
	pool: {
		max: 5,
		min: 0,
		idle: 30000
	}
});

export { sequelize };
