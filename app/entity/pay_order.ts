/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {pay_orderInstance, pay_orderAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<pay_orderInstance, pay_orderAttribute>('pay_order', {
    sid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trade_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    order_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    total_fee: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prepay_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trade_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'pay_order'
  });
};
