/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sys_roleInstance, sys_roleAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sys_roleInstance, sys_roleAttribute>('sys_role', {
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    role_sign: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_id_create: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gmt_create: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gmt_modified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'sys_role'
  });
};
