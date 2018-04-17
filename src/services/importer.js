export class Importer {
    constructor(ebus) {
        this.handleOnChangeEvent(ebus);
    }

    handleOnChangeEvent(ebus) {
        ebus.on('changed', (data) => {
            console.log(data);
        })
    }
}