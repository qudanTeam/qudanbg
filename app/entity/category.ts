/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {categoryInstance, categoryAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<categoryInstance, categoryAttribute>('category', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
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
    category_type: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    get_link: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    need_verify_code: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    need_mobile_verify_code: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    verify_code_link: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    mobile_verify_code_link: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    is_delete: {
      type: DataTypes.TINYINT(2),
      allowNull: true,
    }
  }, {
    tableName: 'category'
  });
};
