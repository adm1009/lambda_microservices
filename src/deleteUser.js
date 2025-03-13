exports.handler = deleteUser = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'User deleted successfully!' })
    };
};