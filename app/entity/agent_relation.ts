/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {agent_relationInstance, agent_relationAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<agent_relationInstance, agent_relationAttribute>('agent_relation', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    agent_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modify_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'agent_relation'
  });
};
