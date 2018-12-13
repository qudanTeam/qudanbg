/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {agent_viewInstance, agent_viewAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<agent_viewInstance, agent_viewAttribute>('agent_view', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      defaultValue: '0'
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    beign_agent_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modify_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    invite_code: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    direct_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    related_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'agent_view'
  });
};
