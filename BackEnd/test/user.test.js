const request = require('supertest')
const app = require('../app')

test('Should create a new student',async ()=>{
    await request(app)
        .post('/user')
        .send({
            fname:"jay",
            lname:"radadiya",
            email:"jayradadiya81@gmail.com",
            password:"1234567",
            city:"surat"
        }).except(200);
})