/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {agents_viewInstance, agents_viewAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<agents_viewInstance, agents_viewAttribute>('agents_view', {
    parent_agent_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      defaultValue: '0'
    },
    parent_user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
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
    }
  }, {
    tableName: 'agents_view'
  });
};
