/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {trade_typeInstance, trade_typeAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<trade_typeInstance, trade_typeAttribute>('trade_type', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    trade_type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    apply_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    price: {
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
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1'
    },
    account: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    indirect_type: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    send_status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1'
    },
    audit_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    send_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vip_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    vip_level: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    base_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    relation_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    vip_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    reject_reason: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    tx_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tx_alipay_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agent_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    agent_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    tableName: 'trade_type'
  });
};
