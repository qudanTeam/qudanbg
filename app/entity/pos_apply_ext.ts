/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {pos_apply_extInstance, pos_apply_extAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<pos_apply_extInstance, pos_apply_extAttribute>('pos_apply_ext', {
    id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    express_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    express_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    apply_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    apply_mobile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pay_type: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    pay_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pay_deposit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    receiver: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    receiver_mobile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    modify_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deposit_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    apply_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invite_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deliver_status: {
      type: DataTypes.INTEGER(255),
      allowNull: true,
      defaultValue: '0'
    },
    pos_no: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pay_order_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'pos_apply_ext'
  });
};
