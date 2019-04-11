package main 

import "fmt"

func main() {
	var a [5]int
	a[2] = 3;
	a[4] = 10
	fmt.Println(a[2])

	b := [...]int{1, 3, 5}
	fmt.Println(b)
	fmt.Println(len(b))
}
