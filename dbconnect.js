const mongoose = require("mongoose");

const dbConnection2 = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/short-url`);
    console.log("Mongodb Connected !!");
  } catch (error) {
    console.log(`MongoDB Connection Error: ${error}`);
  }
};

module.exports = {
  dbConnection2,
};
