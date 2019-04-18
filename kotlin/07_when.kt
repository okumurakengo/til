fun main(args: Array<String>) {
    val num = 5

    when (num) {
        0 -> println("Zero")
        1 -> println("One")
        2, 3 -> println("Tow or Three")
        in 4..10 -> println("Many")
        else -> println("other")
    }

    val result = when (num) {
        0 -> "Zero"
        1 -> "One"
        2, 3 -> "Tow or Three"
        in 4..10 -> "Many"
        else -> "other"
    }
    println(result)
}
