
import * as fs from 'fs';
import { join, normalize } from 'path';

export class DirWatcher {
    filenames = [];

    constructor(ebus, path, delay) {
        setInterval(async () => {
            const changes = await this.watch(path);
            if (changes.length > 0) {
                this.sendChanges(ebus, changes);
            }
        }, delay);
    }

    sendChanges(ebus, data) {
        ebus.emit('changed', data);
    }

    watch(path) {
        return this.traverseDirectory(path);
    }

    async traverseDirectory(path) {
        let changes = [];
        try {
            const list = await this.readdirAsync(path);
            for (const name of list) {
                try {
                    const filename = join(path, name);
                    const stat = await this.statAsync(filename);
                    if (stat.isDirectory()) {
                        changes = changes.concat(await this.traverseDirectory(filename, changes));
                    } else {
                        if (!this.filenames.find(name => name === filename)) {
                            this.filenames.push(filename);
                            changes.push(filename);
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        } catch (err) {
            console.log(err);
        }

        return changes;
    }

    readdirAsync(path) {
        return new Promise((resolve, reject) => {
            fs.readdir(path, (err, result) => {
                if (err) {
                    return reject(err);
                }

                return resolve(result);
            });
        });
    }

    statAsync(name) {
        return new Promise((resolve, reject) => {
            fs.stat(name, (err, stat) => {
                if (err) {
                    return reject(err);
                }

                return resolve(stat);
            })
        })
    }
}