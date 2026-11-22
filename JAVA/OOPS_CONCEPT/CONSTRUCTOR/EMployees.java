package JAVA.OOPS_CONCEPT.CONSTRUCTOR;
public class EMployees {
    String name;
    int age;

    EMployees(String N, int A) {
        this.name = N;
        this.age = A;

    }

    void printDetails() {
        System.out.println("name :" + name);
        System.out.println("age :"+ age);
    }
    public static void main(String[] args) {
        EMployees E1 = new EMployees("sachin", 22);
        E1.printDetails();
    }
    
}
