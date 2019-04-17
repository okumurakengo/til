package main 

import "fmt"

func main() {
	// m := make(map[string]int)
	// m["taguchi"] = 200
	// m["fkoji"] = 300

	m := map[string]int{"taguchi":100, "fkoji":200}

	fmt.Println(m)
	fmt.Println(len(m))
	delete(m, "taguchi")
	fmt.Println(m)
	v, ok := m["fkoji"]
	fmt.Println(v)
	fmt.Println(ok)
}
