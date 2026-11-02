package JAVA.OOPS_CONCEPT.CLASSES_AND_OBJECTS;

public class Car {

    // properties 

    String brand;
    String color;
    int price;

    // method(actions || behaviour)

    void start() {
        System.out.println(" car is starting....... ");
    }

    void accelerate() {
        System.out.println(" accerate the car......");
    }

    void stop() {
        System.out.println("stop the car......");
    }

    public static void main(String[] args) {
        
        //object  creation 

        Car bmw = new Car();
        Car audi = new Car();
        audi.brand = "AUDI";
        audi.color = "white";
        audi.price = 300000000;
         System.out.println(audi.brand);
        System.out.println(audi.color);
        System.out.println(audi.price);
        audi.start();
        audi.stop();
        audi.accelerate();


        // assign the values 

        bmw.brand = "BMW";
        bmw.color = "Blaack";
        bmw.price = 50000000;

        // printing properties 

        System.out.println(bmw.brand);
        System.out.println(bmw.color);
        System.out.println(bmw.price);

        // calling methods

        bmw.start();
    }
    
}
