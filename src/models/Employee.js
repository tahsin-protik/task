import { DataTypes } from 'sequelize';
import sequelize from './db.js';
import Position from './Position.js';
const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  positionId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Position',
      key: 'id'
    },
    allowNull: false
  },
  parentId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Employee',
      key: 'id'
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
},{
    tableName: 'Employee'
});

Employee.belongsTo(Position, { foreignKey: 'positionId' });

export default Employee; 