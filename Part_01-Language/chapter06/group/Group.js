class Group {

    #items;
    constructor() {
        this.#items = [];
    }

    add(item) {
        if (this.#items.indexOf(item) < 0) {
            this.#items.push(item);
        }
    }

    delete(item) {
        this.#items = this.#items.filter(value => value !== item);
    }

    has(item) {
        return this.#items.indexOf(item) >= 0;
    }

    static from(values) {
        let res = new Group();
        values.forEach(value => res.add(value));
        return res;
    }
}
