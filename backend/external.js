import Request from "request"
const APIexternal =
    Request.get("http://localhost:8000/api/data", (error, respose, body) => {
        if (error) {
            return console.log(error);
        }
        console.dir(JSON.parse(body));
    });