/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {weixin_bindingInstance, weixin_bindingAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<weixin_bindingInstance, weixin_bindingAttribute>('weixin_binding', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    openid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    unionid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    wechat_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    wechat_logo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modify_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'weixin_binding'
  });
};
