import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "@/docs/swagger.json";
import listRoutes from "@/routes/list.routes";
import taskRoutes from "@/routes/task.routes";

const app = express();
const port = 3000;

mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());

app.use("/list", listRoutes);
app.use("/task", taskRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
