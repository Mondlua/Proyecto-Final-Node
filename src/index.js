import express from "express";
import { join, __dirname } from "./utils/index.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import cors from "cors";
import { envs } from "./config/envs.js";

//* Settings
const app = express();
app.set("PORT", envs.port);

//* Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
//! No usar app.use(authentication) porque bloquea todo

//* Routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

app.use("/auth", authRoutes);
app.use("/api/products", productRoutes);

app.use((req, res, next) => {
  res.status(404).send("Recurso no encontrado");
});

//* Listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
