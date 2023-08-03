// exports.handler = async function () {
//   return {
//     statusCode: 200,
//     body: "Hello world!",
//   };
// };

exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: "hello-world!"
    }
}