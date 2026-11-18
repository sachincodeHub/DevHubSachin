package Method_With_Parameter;

public class Employees {
    int salary;

    Employees(int s) {
        this.salary = s;
        
    }

    void salary() {
        System.out.println(salary);
    }
    public static void main(String[] args) {
        Employees E1 = new Employees(150000);
         Employees E2 = new Employees(200000);
         E1.salary();
         E2.salary();

    }
}
