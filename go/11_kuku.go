package main

import (
	"fmt"
	"strconv"
)

func main() {
	s := "";
	for i := 1; i <= 9; i++ {
		for j := 1; j <= 9; j++ {
			s += strconv.Itoa(i * j) + " ";
		}
		fmt.Println(s);
		s = "";
	}
}
