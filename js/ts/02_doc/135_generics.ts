type Tree<T> = {
    value: T;
    left: Tree<T> | null;
    right: Tree<T> | null;
}

let a: Tree<string> = {
    value: "aaa",
    left: {
        value: "bbb",
        left: null,
        right: null,
    },
    right: null,
}

type LinkedList<T> = T & { next: LinkedList<T> | null };

interface Person {
    name: string;
}

const b: LinkedList<Person> = {
    name: "aaa",
    next: {
        name: "bbb",
        next: null,
    },
}
