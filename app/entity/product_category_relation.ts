/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {product_category_relationInstance, product_category_relationAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<product_category_relationInstance, product_category_relationAttribute>('product_category_relation', {
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
    category_id: {
      type: DataTypes.INTEGER(10),
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
    tableName: 'product_category_relation'
  });
};
