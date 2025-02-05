const express = require("express");
const settings = require("./src/config/settings.js");
const cors = require("cors");
const mainRouter = require("./src/routes/mainRoutes.js");

if (settings.configs.debug) {
    console.clear();
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => { res.end("working..") })
app.use("/auth", mainRouter.userRoutes.router);
app.use("/menu", mainRouter.menuRoutes.router);
app.use("/order", mainRouter.orderRoutes.router);



app.listen(settings.configs.PORT, settings.configs.allowed_host[0], () => console.log(`Server listening on port: ${settings.configs.PORT}`));