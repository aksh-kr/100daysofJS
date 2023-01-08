let student = {
    name : "alfa",
    age : 23
};

let studentJson = JSON.stringify(student);
console.log(studentJson);

let str = '{"name":"alfa","age":23}';
let ob = JSON.parse(str);
console.log(ob);