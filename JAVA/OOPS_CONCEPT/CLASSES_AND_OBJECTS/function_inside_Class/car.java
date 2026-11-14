package function_inside_Class;

public class car {
    String brand;
    int price;

    car(String brand, int price) {
        this.brand = brand;
        this.price = price;
    }

    void showDetails() {
        System.out.println("brand :"+brand);
        System.out.println("price :"+price);
    }
    public static void main(String[] args) {
        car c1 = new car("bmw", 25000000);
        c1.showDetails();
    }
    
}
