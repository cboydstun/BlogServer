const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`CONNECTED TO DATABASE`);
  } catch (err) {
    console.error(`Database connection error: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { dbConnect, mongoose };
