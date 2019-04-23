package main 

import "fmt"

func main() {
	for i := 0; i < 10; i++ {
		if i == 7 { break }
		if i == 3 { continue }
		fmt.Println(i)
	}

	i := 0
	for i < 10 {
		fmt.Println(i)
		i++
	}

	j := 0
	for {
		fmt.Println(j)
		j++
		if j == 3 { break }
	}
}
