class PGroup {

    #items;
    constructor(items = []) {
        this.#items = [...items];
    }

    add(item) {

        if (this.has(item)) {
            return this;
        }

        let updatedItems = [...this.#items];
        updatedItems.push(item);
        return new PGroup(updatedItems);

    }

    delete(item) {
        if (!this.has(item)) {
            return this;
        }

        let remainingItems = this.#items.filter(value => value !== item);
        return new PGroup(remainingItems);
    }

    has(item) {
        return this.#items.includes(item);
    }

}

PGroup.empty = new PGroup();
