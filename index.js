
import express from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from "mongoose";
import "dotenv/config";


const app = express();
app.set('port', process.env.PORT || 4000);

//conexion a base de datos
// mongoose es un ODM
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI)
  .then(mongoose => console.log('Conectado al Mongodb Atlas'));


//Listening de puertos

app.use(cors());

// OPTIONS es un método de solicitud HTTP que se utiliza para describir las opciones de comunicación para el recurso de destino.


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port:` + app.get('port'));
})

