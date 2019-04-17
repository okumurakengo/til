fun main(args: Array<String>) {
    val score = 35
    if (score > 80) {
        println("Great!")
    } else if (score > 60) {
        println("Good!")
    } else {
        println("so so ...")
    }
    val result = if (score > 80) "Great" else "so so ..."
    println(result)
}
