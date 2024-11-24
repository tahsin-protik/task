import Employee from './models/Employee.js';
import Position from './models/Position.js';


const positions = [
  { name: 'CTO' },
  { name: 'Senior Software Engineer' },
  { name: 'Software Engineer' },
  { name: 'Junior Software Engineer' }
];

const seedPositions = async () => {
  try {
    const createdPositions = await Position.bulkCreate(positions);
    const positionIds = createdPositions.map(position => position.id);
    console.log('Created Position IDs:', positionIds);
    console.log('Positions created successfully');
  } catch (error) {
    console.error('Error creating positions:', error);
  }
};

const employees = [
  { name: 'CTO', positionId: 1, parentId: null },
  { name: 'Senior Software Engineer 1', positionId: 2, parentId: 1 },
  { name: 'Senior Software Engineer 2', positionId: 2, parentId: 1 },
  { name: 'Software Engineer 1', positionId: 3, parentId: 2 },
  { name: 'Software Engineer 2', positionId: 3, parentId: 2 },
  { name: 'Software Engineer 3', positionId: 3, parentId: 3 },
  { name: 'Software Engineer 4', positionId: 3, parentId: 3 },
  { name: 'Junior Software Engineer 1', positionId: 4, parentId: 4 },
  { name: 'Junior Software Engineer 2', positionId: 4, parentId: 4 },
  { name: 'Junior Software Engineer 3', positionId: 4, parentId: 5 },
  { name: 'Junior Software Engineer 4', positionId: 4, parentId: 5 },
  { name: 'Junior Software Engineer 5', positionId: 4, parentId: 6 },
  { name: 'Junior Software Engineer 6', positionId: 4, parentId: 6 },
  { name: 'Junior Software Engineer 7', positionId: 4, parentId: 7 },
  { name: 'Junior Software Engineer 8', positionId: 4, parentId: 7 }
];

const seedEmployees = async () => {
  try {
    const createdEmployees = await Employee.bulkCreate(employees);
    const employeeIds = createdEmployees.map(employee => employee.id);
    console.log('Created Employee IDs:', employeeIds);
    console.log('Employees created successfully');
  } catch (error) {
    console.error('Error creating employees:', error);
  }
};
seedPositions().then(() => seedEmployees());



