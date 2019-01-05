/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {productInstance, productAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<productInstance, productAttribute>('product', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    product_type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    is_hot: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    is_show: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    customer: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    is_in_shop: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    is_shelf: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modify_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    commission: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sort_val: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    bg_category: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    amount_line: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    progress_query_img: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    allow_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    apply_num: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    apply_condition: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    apply_tp_img: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    day_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    month_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    a_begin: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    a_limit: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    b_begin: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    b_limit: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    c_start: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    c_limit: {
      type: DataTypes.INTEGER(100),
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
    base_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    month_salary: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    salary: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    salary_desc: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    month_salary_desc: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    second_summary: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    third_summary: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    detail_header_img: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    card_long_img: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    product_show_img: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    burundian: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    settlement_type: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    expire_unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    how_settle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expire_begin: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    expire_end: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    commission_standard: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    share_title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    card_progress_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    base_right: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    preferential: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    special_tag: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    special_txt: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jl_unite: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_profit_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    product_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    product_poster: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    loan_limit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'product'
  });
};
