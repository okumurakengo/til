fun main(args: Array<String>) {
    var i = 0

    while (i < 10) {
        println("loop: $i")
        i++
    }

    do {
        println("loop2: $i")
        i++
    } while (i < 5)
}
