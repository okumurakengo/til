package main

import (
    "fmt"
    "reflect"
)

func main() {
	msg := "hello world"
	tes := 1
	tes2 := 2.5
	fmt.Println(reflect.TypeOf(msg)) // string
	fmt.Println(reflect.TypeOf(tes)) // int
	fmt.Println(reflect.TypeOf(tes2)) // float64
}
