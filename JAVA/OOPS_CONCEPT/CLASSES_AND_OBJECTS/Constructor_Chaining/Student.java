package Constructor_Chaining;

public class Student {
    Student() {
        this(20);
        System.out.println("default constructor");
    }

    Student(int age) {
        System.out.println("Age:" + age);

    } 
    public static void main(String[] args) {
        Student s1 = new Student();
    }
    
}
