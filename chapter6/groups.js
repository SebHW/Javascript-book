class Group {
    // Your code here
    constructor() {
        this.groupMembers = [];
    }
    add(value) {
        if (!this.groupMembers.includes(value)) {
            this.groupMembers.push(value);
        }
    }
    delete(value) {
        // The .filter will still create a new 
        //const filtered = this.members.filter(x => x !== value);
        //this.members = filtered;
        this.groupMembers = this.groupMembers.filter(x => x !== value);
    }
    has(value) {
        return this.groupMembers.includes(value)
    }
    static from(iterableObject) {
        let group = new Group;
        for (let value of iterableObject) {
            group.add(value);
        }
        return group;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this);
    };
}

class GroupIterator {
    constructor(group) {
        this.group = group
    }
    next() {
        let value = {
            value: this.group.members[this.position],
            done: false
        };
        position++;
        //if (this.position >= this.group.members.length) {
        //    return {done: true};
        return value;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c