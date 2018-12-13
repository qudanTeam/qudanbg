/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {message_storeInstance, message_storeAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<message_storeInstance, message_storeAttribute>('message_store', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    msg_logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    msg_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    msg_content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    msg_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    user_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'message_store'
  });
};
