//print("hello world")
//print("hello")
//
//var msg = "hello world"
//print(msg)
//msg = "aa"
//
//let i = 10
//let d = 53.8
//let s = "hello"
//let flag = true
//
//var x = "five"
//x =  String(5)
//print(x)

//print(10 / 3)
//print(10.0 / 3)
//print(10 % 3)
//
//var y = 10
//y += 5
//print(y)
//
//print("hello " + "world")
//print("y is \(y)")
//print("y2 is \(y * 2)")
//
//print(true && false)
//print(true || false)
//print(!true)

//let score = 82
//let result: String
//
//if score > 80 {
//    result = "great"
//} else if score > 60 {
//    result = "good"
//} else {
//    result = "so so ..."
//}
//print(result)
//
//print(score > 80 ? "great" : "so so ...")

let num = 10

switch num {
case 0:
    print("zero")
case 1, 2, 3:
    print("small")
case 4...6:
    print("4/5/6")
case 7..<9:
    print("7/8")
case let n where n > 20:
    print("\(n) is huge!")
default:
//    print("n.a.")
    break
}
