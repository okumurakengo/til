public class MyApp05If {
    public static void main(String[] args) {
        int score = 35;
        if (score > 80) {
            System.out.println("Great!");
        } else if (score > 60) {
            System.out.println("Good!");
        } else {
            System.out.println("so so ...");
        }

        String msg = score > 80 ? "Great!" : "so so ... !";
        System.out.println(msg);
    }
}
