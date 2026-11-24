package JAVA.OOPS_CONCEPT.CONSTRUCTOR.Chaining_constructor;

public class Employee {
    Employee() {
        this(250000);
        System.out.println("default constructor :--");
    }

    Employee(int salary) {
        System.out.println("salary : "+ salary);
    }
    
    public static void main(String[] args) {
        Employee E1 = new Employee();
        
    }
}
