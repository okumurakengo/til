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

```elm
> if True then "hello" else "world"
"hello"

> if False then "hello" else "world"
"world"

> over9000 powerLevel = \
|   if powerLevel > 9000 then "It's over 9000!!!" else "meh"
<function>

> over9000 42
"meh"

> over9000 100000
"It's over 9000!!!"
```
