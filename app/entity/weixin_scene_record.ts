/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {weixin_scene_recordInstance, weixin_scene_recordAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<weixin_scene_recordInstance, weixin_scene_recordAttribute>('weixin_scene_record', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    params: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expire_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expire_seconds: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ticket: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    scene_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    qr_type: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '2'
    },
    apply_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    qr_address: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    tableName: 'weixin_scene_record'
  });
};
