type Foo = {
    a: number
    b: boolean
    c: string
}

// b,cのみの型にできる
type Foo2 = Pick<Foo, 'b'|'c'>
const foo2: Foo2 = {a: 1, b: false, c: 'abc'}
// 全部numberにできる
type Foo3 = Record<keyof Foo, number>
const foo3: Foo3 = {a: 1, b: false, c: 'abc'}
