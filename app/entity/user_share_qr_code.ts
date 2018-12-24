/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {user_share_qr_codeInstance, user_share_qr_codeAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<user_share_qr_codeInstance, user_share_qr_codeAttribute>('user_share_qr_code', {
    id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    share_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    img_url: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    address_url: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  }, {
    tableName: 'user_share_qr_code'
  });
};
