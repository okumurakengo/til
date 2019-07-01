using System;

enum Direction {
    Stay,
    Right,
    Left
}

class MyApp {
    static void Main() {
        Direction dir = Direction.Right;
        Console.WriteLine((int)Direction.Right);

        switch (dir) {
            case Direction.Stay:
                break;
            case Direction.Right:
                break;
            case Direction.Left:
                break;
        }
    }
}
