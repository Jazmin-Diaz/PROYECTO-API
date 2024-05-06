import routerx from "express-promise-router";
import DatosR from "./Datos.routes";
import Tabla_psR from "./Tabla_p.routes";


const router = routerx();

router.use("/datos", DatosR);
router.use("/proveedor", Tabla_psR);


export default router;