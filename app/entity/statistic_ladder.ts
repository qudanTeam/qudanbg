/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {statistic_ladderInstance, statistic_ladderAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<statistic_ladderInstance, statistic_ladderAttribute>('statistic_ladder', {
    recommend_invite_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      primaryKey: true,
      defaultValue: '0'
    },
    product_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    product_type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    base_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    a_limit: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    b_limit: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    c_limit: {
      type: DataTypes.INTEGER(100),
      allowNull: true
    },
    a_begin: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    b_begin: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    c_start: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    a_level_reward: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    b_level_reward: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    c_level_reward: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tmonth: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    total: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    load_money: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'statistic_ladder'
  });
};
