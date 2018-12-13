/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {vip_record_enabled_viewInstance, vip_record_enabled_viewAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<vip_record_enabled_viewInstance, vip_record_enabled_viewAttribute>('vip_record_enabled_view', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      defaultValue: '0'
    },
    trade_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    vip_config_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    trade_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    add_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    vip_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_vip_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'vip_record_enabled_view'
  });
};
