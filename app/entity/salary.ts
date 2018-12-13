/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {salaryInstance, salaryAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<salaryInstance, salaryAttribute>('salary', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    PROC_INS_ID: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    USER_ID: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    OFFICE_ID: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    POST: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AGE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    EDU: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONTENT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OLDA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OLDB: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OLDC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NEWA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NEWB: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NEWC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADD_NUM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EXE_DATE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HR_TEXT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LEAD_TEXT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MAIN_LEAD_TEXT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_by: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    update_by: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    remarks: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    del_flag: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'salary'
  });
};
