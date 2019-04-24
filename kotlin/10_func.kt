fun sayHi(name: String = "taguchi", age: Int = 23) {
    println("hi! $name ($age)")
}

fun main(args: Array<String>) {
    sayHi("tom", 22)
    sayHi("bob", 20)
    sayHi()
    sayHi(age = 19, name = "steve")
}
