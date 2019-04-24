package main 

import "fmt"

func main() {
	s := []int{2, 3, 8}
	for _, v := range s {
		fmt.Println(v)
	}
	m := map[string]int{"taguchi":200,"fkoji":300}
	for k, v := range m {
		fmt.Println(k, v)
	}
}
