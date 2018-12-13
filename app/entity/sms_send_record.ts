/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sms_send_recordInstance, sms_send_recordAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sms_send_recordInstance, sms_send_recordAttribute>('sms_send_record', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    send_type: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    invalid_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_valid: {
      type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL,
      allowNull: true,
      defaultValue: '0000000000'
    }
  }, {
    tableName: 'sms_send_record'
  });
};
