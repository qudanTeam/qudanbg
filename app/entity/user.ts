/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {userInstance, userAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<userInstance, userAttribute>('user', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    userface: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isenable: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1'
    },
    register_mobile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    alipay_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    agent_level: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    register_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_login_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '1'
    },
    user_type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    modify_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    agent_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    recommend_invite_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    invite_code: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    recommend_invite_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    vip_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    realname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vip_level: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    finance_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'user'
  });
};
