/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {user_shareInstance, user_shareAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<user_shareInstance, user_shareAttribute>('user_share', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    weixin_scene_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    share_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user_share'
  });
};
