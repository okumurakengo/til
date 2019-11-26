enum E {
    Foo,
    Bar,
    Baz
}
function f(x: E) {
    if (x !== E.Foo || x !== E.Bar) {
        //             ~~~~~~~~~~~ Error! This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap.
    }
}
// これだとFooでもBarでもBazでも常にtrueだから、条件分岐として間違ってません？ってエラー
//xがFoo
// 左、「x !== E.Foo」 => false、
// 右、左の結果でxはFoo決定だから、「E.Foo !=== x.Bar」 => true
//xがBar
// 左、「x !== E.Foo」 => true、
// 右、左がtrueだから短絡で実行されない
//xがBaz
// 左、「x !== E.Foo」 => true、
// 右、左がtrueだから短絡で実行されない
