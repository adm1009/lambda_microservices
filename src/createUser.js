exports.handler = createUser = async(event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'a User created successfully!' })
    };
};