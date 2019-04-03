package main 

import "fmt"

func main() {
	const name = "taguchi"
	fmt.Println(name)

	const (
		sun = iota
		mon
		tue
	)
	fmt.Println(sun,mon,tue)
}
