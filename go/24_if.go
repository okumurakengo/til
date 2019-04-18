package main 

import "fmt"

func main() {
	if score := 43; score > 80 {
		fmt.Println("Great!")
	} else if score > 60 {
		fmt.Println("Good!")
	} else {
		fmt.Println("so so ...")
	}
}
