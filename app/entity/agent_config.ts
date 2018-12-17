/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {agent_configInstance, agent_configAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<agent_configInstance, agent_configAttribute>('agent_config', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    level: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    direct_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    related_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    invite_limit: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    task_done_limit: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    share_limit: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    modify_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'agent_config'
  });
};
