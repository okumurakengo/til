// 全てを readonly にする
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
// 全てオプショナルにする 
type Partial<T> = {
    [P in keyof T]?: T[P];
}

type Foo = {
    a: number;
    b: boolean;
}

// readonly にしたから代入でエラー
let x: Readonly<Foo> = {a:1, b:true}
x.a = 1;

// partialにしたから中身なくてもOK
let y: Partial<Foo> = {}

