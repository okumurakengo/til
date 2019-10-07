interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
let uiElement: UIElement = {
    addClickListener(onclick: (this: void, e: Event) => void) {
        let e = new Event("hoge")
        onclick(e);
    }
}

class Handler {
    info: string;
    onClickGood(this: void, e: Event) {
        // can't use `this` here because it's of type void!
        console.log('clicked!');
    }
}
let h = new Handler();
uiElement.addClickListener(h.onClickGood);
