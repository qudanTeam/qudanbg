/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {weixin_scene_scan_logInstance, weixin_scene_scan_logAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<weixin_scene_scan_logInstance, weixin_scene_scan_logAttribute>('weixin_scene_scan_log', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    open_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    scene_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    qr_type: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    }
  }, {
    tableName: 'weixin_scene_scan_log'
  });
};
