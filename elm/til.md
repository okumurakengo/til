$ npx elm repl

```
> "hello"
"hello"

> "hello" ++ "world"
"helloworld"

> "hello" ++ " world"
"hello world"
```

```elm
> isNegative n = n < 0
<function>

> isNegative 4
False

> isNegative -7
True

> isNegative (-3 * -4)
False
```

```elm
> \n -> n < 0
<function>

> (\n -> n < 0) 4
False
```
