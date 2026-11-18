package Method_With_Parameter;

public class Mobile {
    int price;
    String name;

    Mobile() {
        System.out.println("default constructor");
    }

    Mobile(int p) {
        this.price = p;

    }

    Mobile(String n) {
        this.name = n;

    }

    void dataDetail() {
        System.out.println("default parametr");
    }

    void namePint() {
        System.out.println("Name :" + name);
    }

    void pricePrint() {
        System.out.println("price :"+price);
    }
   public static void main(String[] args) {
       Mobile M1 = new Mobile();
       Mobile M2 = new Mobile(150000);
       Mobile M3 = new Mobile("Samsung");
// object call
M1.dataDetail();
M2.pricePrint();
M3.namePint();
   }
    
}
