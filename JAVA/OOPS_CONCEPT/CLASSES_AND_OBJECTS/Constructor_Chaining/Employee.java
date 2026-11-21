package Constructor_Chaining;

public class Employee {
    Employee() {
        this(2500000);
        System.out.println("default constructor called : ");
        
    }

    Employee(int salary) {
        System.out.println("Employee salary : " + salary);

    }

    public static void main(String[] args) {
        Employee E1 = new Employee();
    }
}

