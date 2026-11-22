package JAVA.OOPS_CONCEPT.CONSTRUCTOR;

public class Student {
    String name;
    int age;
    String course;

    Student(String n, int a, String c) {
        this.name = n;
        this.age = a;
        this.course = c;
    }

    void PrintDetail() {
        System.out.println("Name:" + name);
        System.out.println("age:" + age);
        System.out.println("course:"+course);
    }
    public static void main(String[] args) {
        Student S1 = new Student("sachin kumar", 22, "B.A");
        Student S2 = new Student("Apirita Reddy ", 22, "B.S.C");
        Student S3= new Student("Rohan kumar", 22, "Betch");
        Student S4= new Student("Rahul kumar", 22, "B.A");
        Student S5 = new Student("Sahil", 22, "Betch");
        Student S6 = new Student("Rohan kumar", 22, "B.A");
        Student S7 = new Student("Ravinder Yadav", 45, "B.L.L.B");
        Student S8= new Student("Anshu kuamri yadav", 22, "Betch");
        Student S9= new Student("sonam kuamari", 42, "B.A");
        Student S10 = new Student("Ankita Reddy ", 23, "B.s.c");
     
               
        S1.PrintDetail();
        S2.PrintDetail();
        S3.PrintDetail();
        S4.PrintDetail();
        S5.PrintDetail();
        S6.PrintDetail();
        S7.PrintDetail();
        S8.PrintDetail();
        S9.PrintDetail();
        S10.PrintDetail();
    }
   
}
