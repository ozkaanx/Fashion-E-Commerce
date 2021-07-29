const express = require("express");
const app = express();
const cors = require("cors");
const AdminRouter = require("./routes/AdminRouters");
const ProductRouter = require("./routes/Product");
const CategoryRouter = require("./routes/Category");
const SettingsRouter = require("./routes/Settings")


app.use(cors());
app.use(express.json());

app.use("/admin", AdminRouter);
app.use("/product", ProductRouter);
app.use("/category", CategoryRouter);
app.use("/settings" , SettingsRouter)



app.listen(8080, (req, res) => {
  console.log("Server running...");
});
