const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("App is running!!!");
});

app.post("/api/v1/product", async (req, res) => {
  try {
    const product = new Product(req.body);

    const result = await product.save();

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "unsuccess",
      message: "Data insert operation unsuccessful!",
      data: error,
    });
  }
});

// schema design

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this product."],
      trim: true,
      unique: [true, "Name must be unique."],
      minLength: [5, "Name must be at least 5 characters."],
      maxLength: [80, "Name must be between 80 characters."],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value can't {value}, must be kg/litre/pcs",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity can't be negative."],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Quantity must be an integer.",
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status must be {value}",
      },
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
    categories: [
      {
        name: String,
        required: true,
      },
      //   (_id: mongoose.Schema.Types.ObjectId),
    ],
  },
  {
    timestamps: true,
  }
);

// SCHEMA -> MODEL -> QUERY

const Product = mongoose.model("Product", productSchema);

// mongoose middlewares

productSchema.pre("save", function (next) {
  console.log("before saving data");
  next();
});

productSchema.post("save", function () {
  console.log("after saving data");
});

productSchema.methods.logger = function (doc, next) {
  console.log("logger running successfully");
  next();
};

module.exports = app;
