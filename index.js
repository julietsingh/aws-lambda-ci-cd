const { v4 } = require('uuid')
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello from Lambda and Github CI CD !!! ${v4()}`),
    };
    return response;
};