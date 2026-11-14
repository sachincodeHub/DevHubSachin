package Method_With_Parameter;

public class Employee {
    String name;
    int salary;

    Employee(String name,int salary) {
       
        this.name = name;
        this.salary = salary;

    }

    void display() {
        System.out.println("Welcome :" + name);
        System.out.println("salary : "+ salary);

    }
    public static void main(String[] args) {
        Employee Sachin = new Employee("sachin",200000);
        Employee Ravi = new Employee("ravi", 300000);
        Sachin.display();
        Ravi.display();
    }
}
