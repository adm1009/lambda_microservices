const createUser = require('../../../src/createUser');
const getUser = require('../../../src/getUser');
const updateUser = require('../../../src/updateUser');
const deleteUser = require('../../../src/deleteUser');

exports.handler = async (event) => {
  const { path } = event;
  
  switch (path) {
    case '/user/create':
      return await createUser(event);
    case '/user/get':
      return await getUser(event);
    case '/user/update':
      return await updateUser(event);
    case '/user/delete':
      return await deleteUser(event);
    default:
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Route not found' }),
      };
  }
};