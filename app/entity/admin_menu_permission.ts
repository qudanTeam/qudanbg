/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {admin_menu_permissionInstance, admin_menu_permissionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<admin_menu_permissionInstance, admin_menu_permissionAttribute>('admin_menu_permission', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    admin_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    permission_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'admin_menu_permission'
  });
};
