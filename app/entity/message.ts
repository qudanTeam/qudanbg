/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {messageInstance, messageAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<messageInstance, messageAttribute>('message', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    msg_logo: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    msg_title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    msg_content: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    msg_link: {
      type: DataTypes.STRING(2000),
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
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    is_user_delete: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'message'
  });
};
