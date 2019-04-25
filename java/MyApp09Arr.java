public class MyApp09Arr {
    public static void main(String[] args) {
        int[] sales;
        sales = new int[3];

        sales[0] = 100;
        sales[1] = 200;
        sales[2] = 300;
        System.out.println(sales[1]);

        sales[1] = 1000;
        System.out.println(sales[1]);

        int[] sales2;
        sales2 = new int[] {100, 200, 300};
        System.out.println(sales2[1]);

        int[] sales3 = {100, 200, 300};
        System.out.println(sales3[1]);
    }
}
