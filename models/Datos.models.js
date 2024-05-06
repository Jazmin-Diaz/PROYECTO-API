import mongoose from "mongoose";

const datos = mongoose.Schema(
    {
        nombre: String,
        direccion: String,
        correo: String,
        estado: String,
        telefono: Number,
        producto:String,
        cantidad:Number, 
        precio_unitario:Number,
        proveedor:Number, 
        
    }
);



const Datos = mongoose.model('datos', datos);
export default Datos;

