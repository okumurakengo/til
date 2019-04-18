```elm
type alias Model = Int
```

```elm
type Msg = Increment | Decrement
```

```elm
update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment ->
      model + 1

    Decrement ->
      model - 1
```
