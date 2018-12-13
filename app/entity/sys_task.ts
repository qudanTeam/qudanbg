/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sys_taskInstance, sys_taskAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sys_taskInstance, sys_taskAttribute>('sys_task', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cron_expression: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    method_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_concurrent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    update_by: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    bean_class: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    job_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    job_group: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    create_by: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    spring_bean: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    job_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'sys_task'
  });
};
