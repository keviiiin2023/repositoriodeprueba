const express = require("express");
const morgan = require("morgan")
const { database } = require("./db")


const server = express();

server.use(morgan("dev")); //muestra informacion de la peticion
server.use(express.json()); //transforma los datos a objetos de JS

const PORT = 3001;

database
    .sync({ force: true })
    .then(() => {

        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        })
    }

    ).catch(err => console.log(err.message))


