class Group {

    constructor() {
        this.items = [];
    }

    add(item) {
        if (!this.has(item)) {
            this.items.push(item);
        }
    }

    delete(item) {
        this.items = this.items.filter(value => value !== item);
    }

    has(item) {
        return this.items.includes(item);
    }

    static from(values) {
        let res = new Group();
        values.forEach(value => res.add(value));
        return res;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {

    constructor(group) {
        this.pos = 0;
        this.group = group;
    }

    next() {

        if (this.pos === this.group.items.length) {
            return {done: true};
        }

        let value = this.group.items[this.pos];

        this.pos++;

        return {value, done: false};
    }
}
