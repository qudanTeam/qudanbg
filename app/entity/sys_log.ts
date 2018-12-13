/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sys_logInstance, sys_logAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sys_logInstance, sys_logAttribute>('sys_log', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    operation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    method: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    params: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    gmt_create: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'sys_log'
  });
};
