import * as config from "../config/default";
import * as path from 'path';
import { User, Product } from "./models/"
import { DirWatcher } from "./services/dirwatcher";
import { EventEmitter } from 'events';
import { Importer } from "./services/importer";

const ebus = new EventEmitter();

console.log(config.name);
const user = new User();
const product = new Product();

new Importer(ebus);
new DirWatcher(ebus, path.resolve(__dirname, '../data'), 1000);