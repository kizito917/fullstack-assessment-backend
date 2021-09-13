import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'
import dbConn from './config/dbConfig';
var port = process.env.PORT;
var app = express();

const swaggerOptions = {
    swaggerDefinition: {
    openapi: "3.0.0",
    info: {
        version: "1.0.0",
        title: "Nestor API",
        description: "CLient and Provider API Information",
        contact: {
          name: "Kizito917"
        },
        servers: ["http://localhost:2000"]
      }
    },
    apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//importing all files from route folder
import providersRoute from './routes/providers';
import clientsRoute from './routes/clients';

var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}

const path = __dirname + '/views/';
app.use(express.static(path));
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors(corsOptions));

app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
});

app.use('/v1/api', providersRoute,clientsRoute)

app.listen(port, (connected, err) => {
    if (!err) {
        console.log(`Nestor server listening to port ${port}`)
    } else {
        console.log(`Error in connecting server, ${err}`)
    }
})