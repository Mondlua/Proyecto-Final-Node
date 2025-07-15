import express from "express";
import { join, __dirname } from "./utils/index.js";
// import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import cors from 'cors';
import bodyParser from "body-parser";


//* Settings
const app = express();
app.set("PORT", 5000);

//? middlewares, uso bodyParser por requerimiento 
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));


//* Routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

// app.use("/auth", authRoutes);
app.use("/api/products", productRoutes);

app.use((req,res,next)=>{
  res.status(404).send('Recurso no encontrado');
});

//* Listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});