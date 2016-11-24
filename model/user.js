import Sequelize from 'sequelize';
import { sequelize } from '../boots';

let User = sequelize.define('user', {
	id: {
		type: Sequelize.BIGINT(11),
		primaryKey: true
	},
	name: Sequelize.STRING(100),
	gender: Sequelize.BOOLEAN,
	birth: Sequelize.STRING(10),
	createdAt: Sequelize.BIGINT,
	updatedAt: Sequelize.BIGINT
});    // more detail to see [http://sequelize.readthedocs.io/en/latest/docs/models-definition/]
