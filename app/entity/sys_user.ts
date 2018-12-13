/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sys_userInstance, sys_userAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sys_userInstance, sys_userAttribute>('sys_user', {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dept_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    user_id_create: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gmt_create: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gmt_modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sex: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pic_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    live_address: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    hobby: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    province: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'sys_user'
  });
};
