package main 

import "fmt"

type user struct {
	name string
	score int
}

func main() {
	u := new(user)
	u.name = "taguchi"
	u.score = 20
	fmt.Println(u)

	u2 := user{"taguchi", 50}
	fmt.Println(u2)
	u3 := user{name:"taguchi", score:50}
	fmt.Println(u3)
}
