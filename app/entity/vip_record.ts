/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {vip_recordInstance, vip_recordAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<vip_recordInstance, vip_recordAttribute>('vip_record', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    }
  }, {
    tableName: 'vip_record'
  });
};
