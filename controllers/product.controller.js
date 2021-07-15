const Product = require("../models/product.model");
const db = require("../db/connection");

const addProduct = async (req, res) => {
  const body = req.body;

  try {
    const result = await Product.create(body);

    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const result = await Product.find();

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.findOne({ _id: id });

    if (!result) {
      return res
        .status(404)
        .json({ message: "Product with such id doesn't exist" });
      // throw new Error("Product with such id doesn't exist");
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateProductById = async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  try {
    const result = await Product.findOneAndUpdate(
      { _id: id },
      { ...body },
      { new: true }
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteProductBId = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Product.findOneAndDelete({ _id: id });

    res.status(204).json();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductBId,
};
