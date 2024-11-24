import Employee from '../models/Employee.js';
import Position from '../models/Position.js';


async function getInfo(employeeId, data) {
  let result = {
    id: data?.id,
    name: data?.name,
    positionId: data?.positionId,
    positionName: data?.Position?.name
    
  };
  let child = await Employee.findAll({
    where: {
      parentId: employeeId
    },
    include: [{
      model: Position,
      attributes: ['name']
    }]
  });

  if (child.length > 0) {
    result.child = [];
  }
  else {
    result.child = null;
  }

  

  for (let i = 0; i < child.length; i++) {
    result.child.push(await getInfo(child[i].id, child[i].dataValues));
  }
  
  return result;
}

export const getEmployeeInfoById = async (req, res) => {
  try {
    let result = await getInfo(req.params.id);
    result = result.child ? result.child : [];
    res.json({
    error: false,
    data: result
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message
    });
  }
};

