public class mobile {
    String name;
    int price;
    String color;
    String brand;
    public static void main(String[] args) {
        mobile m1 = new mobile();
          mobile m2 = new mobile();

        // data insert 
        m1.name = "galaxy m35";
        m1.price = 20000;
        m1.color = "black";
        m1.brand = "Samsung";
        // m2 data object insert 
        m2.name = "vivo 29";
        m2.brand = "vivo";
        m2.price = 15000;
        
        // print data 
        System.out.println(m1.name);
        System.out.println(m1.brand);
        // m2 object data print 
        System.out.println(m2.name);
        System.out.println(m2.price);
        System.out.println(m2.brand);

    }




    
}