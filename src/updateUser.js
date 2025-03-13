exports.handler = updateUser = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'User updated successfully!' })
    };
};