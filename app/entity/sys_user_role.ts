/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sys_user_roleInstance, sys_user_roleAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sys_user_roleInstance, sys_user_roleAttribute>('sys_user_role', {
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
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'sys_user_role'
  });
};
