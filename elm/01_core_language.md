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

```elm
> names = [ "Alice", "Bob", "Chuck" ]
["Alice","Bob","Chuck"]

> List.isEmpty names
False

> List.length names
3

> List.reverse names
["Chuck","Bob","Alice"]

> numbers = [1,4,3,2]
[1,4,3,2]

> List.sort numbers
[1,2,3,4]

> double n = n * 2
<function>

> List.map double numbers
[2,8,6,4]
```

```elm
> import String
> goodName name = \
|   if String.length name <= 20 then \
|   (True, "name accepted!") \
|   else \
|   (False, "name was too long; please limit it to 20 characters")
<function> : String.String -> ( Bool, String.String )
> goodName "Tom"
(True,"name accepted!") : ( Bool, String.String )
```

```elm
> point = { x = 3, y = 4 }
{ x = 3, y = 4 }

> point.x
3

> bill = { name = "Gates", age = 62 }
{ age = 62, name = "Gates" }

> bill.name
"Gates"
```

```elm
> .name bill
"Gates"

> List.map .name [bill,bill,bill]
["Gates","Gates","Gates"]
```

```elm
> under70 {age} = age < 70
<function>

> under70 bill
True

> under70 { species = "Triceratops", age = 68000000 }
False
```

```elm
> { bill | name = "Nye" }
{ age = 62, name = "Nye" }

> { bill | age = 22 }
{ age = 22, name = "Gates" }
```
