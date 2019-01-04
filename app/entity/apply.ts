/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {applyInstance, applyAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<applyInstance, applyAttribute>('apply', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    product_id: {
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
    },
    mobile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '1'
    },
    official_status: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    last_official_query: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reject_reason: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    salary_status: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '1'
    },
    invite_code: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    apply_id_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    official_limit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    official_expire: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    official_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'apply'
  });
};
