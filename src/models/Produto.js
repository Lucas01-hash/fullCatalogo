import { Schema, model } from "mongoose";

const ProdutoSchema = new Schema({
      image_base64: String,
      name: String,
      description: String,
      price: Number,
      cost_price: Number,
      stock: Number,
      status: Boolean,
});

export default new model("Produto", ProdutoSchema);