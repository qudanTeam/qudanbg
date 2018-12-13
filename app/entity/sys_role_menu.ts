/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sys_role_menuInstance, sys_role_menuAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sys_role_menuInstance, sys_role_menuAttribute>('sys_role_menu', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    menu_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'sys_role_menu'
  });
};
