/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {menu_permissionInstance, menu_permissionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<menu_permissionInstance, menu_permissionAttribute>('menu_permission', {
    id: {
      type: DataTypes.INTEGER(20).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    permission_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    permission_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'menu_permission'
  });
};
