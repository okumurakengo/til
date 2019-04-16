package main 

import "fmt"

func main() {
	// s := make([]int, 3)
	s := []int{1, 3, 5}
	s = append(s, 8, 2, 10)
	t := make([]int, len(s))
	n := copy(t, s)
	fmt.Println(s)
	fmt.Println(t)
	fmt.Println(n)
}
