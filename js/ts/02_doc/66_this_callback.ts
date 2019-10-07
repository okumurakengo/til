interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

let obj: UIElement = {
    addClickListener(onclick: (this: void, e: Event) => void) {
        let e = new Event("hoge")
        onclick(e);
    }
}

obj.addClickListener(e => { console.log(e) })
