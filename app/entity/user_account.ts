/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {user_accountInstance, user_accountAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<user_accountInstance, user_accountAttribute>('user_account', {
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
    blance: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    allow_tx: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tx: {
      type: DataTypes.DECIMAL,
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
    tableName: 'user_account'
  });
};
