/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {order_viewInstance, order_viewAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<order_viewInstance, order_viewAttribute>('order_view', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      defaultValue: '0'
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
    loan_money: {
      type: "DOUBLE",
      allowNull: true
    },
    loan_expire: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    card_money: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_invite_code: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    invite_code: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    apply_id_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    realname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    register_mobile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    product_type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    product_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    syr_realname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    syr_id_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    syr_register_mobile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    finished_task_count: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    finished_task_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pae_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    deposit_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    pos_apply_invite_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pay_order_no: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pay_price: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pay_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'order_view'
  });
};
