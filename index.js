const express =  require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const pessoas =[

    {   
        email:'maria@gmail.com',
        password:'1234'
    },
    {
        email:'julio@gmail.com',
        password:'4321'

    },
]

app.get('/', function(request, response){
    
        response.write('<h1>olá</h1>')
        response.end();
    
    });


app.get('/pessoas', function(request, response){

    response.json(pessoas)
    pessoas.push(
        {
            email: "maisuma@mmm",
            password: "7897987"
        }
    )

});

app.post('/pessoas', function(request, response){
    //response.send('resposta do post2222')
    console.log(request.body);
    
    pessoas.push(
        {
            email: request.body.email,
            password: request.body.password
        }
    )
    
    response.end()
})


app.listen(3000);


