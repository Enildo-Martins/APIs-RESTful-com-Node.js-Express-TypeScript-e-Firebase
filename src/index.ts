import express from "express";
import * as admin from "firebase-admin";
import {routes} from "./routes/index";

const serviceAccount = require('../firebase-adminsdk.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express();

routes(app);

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");
});