import * as config from "../config/default";
import * as path from 'path';
import { User, Product } from "./models/"
import { DirWatcher } from "./services/dirwatcher";
import { EventEmitter } from 'events';
import { Importer } from "./services/importer";
import express from "express";

const ebus = new EventEmitter();

const user = new User();
const product = new Product();

// new Importer(ebus);
// new DirWatcher(ebus, path.resolve(__dirname, '../data'), 1000);

export const app = express();

app.get("/api/products", (req, res) => {
    res.send();
});
app.get("/api/products/:id", (req, res) => {
    res.send();
});
app.get("/api/products/:id/reviews", (req, res) => {
    res.send();
});
app.post
("/api/products", (req, res) => {
    res.send();
});
app.get("/api/users", (req, res) => {
    res.send();
});