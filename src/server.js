const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const credentialRoutes = require("./routes/credentialRoutes");
const credentialController = require("./controllers/credentialController");
const presentationRoutes = require("./routes/presentationRoutes");

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
  credentialController.seedSampleData();
});

app.use("/credentials", credentialRoutes);
app.use("/presentation", presentationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
