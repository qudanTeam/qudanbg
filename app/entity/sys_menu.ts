/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sys_menuInstance, sys_menuAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sys_menuInstance, sys_menuAttribute>('sys_menu', {
    menu_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    perms: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    order_num: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'sys_menu'
  });
};
