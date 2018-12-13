/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {share_managerInstance, share_managerAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<share_managerInstance, share_managerAttribute>('share_manager', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_show: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    share_img: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    modify_tiime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sort_val: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'share_manager'
  });
};
