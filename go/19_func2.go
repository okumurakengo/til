package main 

import "fmt"

func swap(a, b int) (int, int) {
	return b, a
}

func main() {
	fmt.Println(swap(5, 2))

	f := func(a, b int) (int, int) {
		return b, a
	}
	fmt.Println(f(5, 2))

	func(msg string) {
		fmt.Println(msg)
	}("taguchi")
}
