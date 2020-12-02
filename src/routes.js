// importando Dependencia Router
import { Router } from "express";
const route = new Router();

// Importando   controllers
import productController from "./controllers/productController";

// Rotas
// Rota de criação de produtos
route.post("/produto", productController.store);

// Rota de pegar todos produto
route.get("/produtos", productController.index);

// Rota de pegar um produto
route.get("/produto/:id", productController.show);

// Rota de Editar  um produto
route.put("/produto/:produtoId", productController.update);

// Rota de Deletar um produto
route.delete("/produto", productController.destroy);

// exportando Routes
export default route;
