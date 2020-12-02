import { model } from "mongoose";
import Produto from "../models/Produto";

class ProdutoController {
  // Retorna todos os usuarios
  async index(req, res) {
    const { status } = req.query;

    const produto = await Produto.find({ status });

    return res.json(produto);
  }

  // Retorna 1 usuario
  async show(req, res) {
    const { id } = req.params;

    const produto = await Produto.findOne({ _id: id });

    return res.json(produto);
  }

  // Salva no banco de Dados
  async store(req, res) {
    const {
      image_base64,
      name,
      description,
      price,
      cost_price,
      stock,
      status,
    } = req.body;

    let produto = await Produto.findOne({ name });
    if (!produto) {
      produto = await Produto.create({
        image_base64,
        name,
        description,
        price,
        cost_price,
        stock,
        status,
      });
      return res.json(produto);
    } else {
      return res.json({ message: "Desculpe, mas este produto já existe!" });
    }
  }

  async update(req, res) {
    const { produtoId } = req.params;
    const {
      image_base64,
      name,
      description,
      price,
      cost_price,
      stock,
      status,
    } = req.body;

    const produto_edit = await Produto.updateOne(
      { _id: produtoId },
      {
        image_base64,
        name,
        description,
        price,
        cost_price,
        stock,
        status,
      }
    );

    return res.json(produto_edit);
  }

  async destroy(req, res) {
    const { produtoId } = req.body;
    const { status } = req.query;

    await Produto.deleteOne({ _id: produtoId });
    const produto = await Produto.find({ status });

    return res.json(produto);
  }
}

export default new ProdutoController();
