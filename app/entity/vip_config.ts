/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {vip_configInstance, vip_configAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<vip_configInstance, vip_configAttribute>('vip_config', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    add_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    vip_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    service_days: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    over_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vip_logo: {
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
    isenable: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    vip_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vip_level: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    promotion_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'vip_config'
  });
};
