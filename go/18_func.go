package main 

import "fmt"

func hi(name string) (msg string) {
	msg = "hi!" + name
	return
}

func main() {
	fmt.Println(hi("taguchi"))
}
