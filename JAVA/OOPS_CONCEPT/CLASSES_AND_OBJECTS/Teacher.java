 package JAVA.OOPS_CONCEPT.CLASSES_AND_OBJECTS;

 public class Teacher {
     // properties
     String name;
     int age;
     String department;

     //  contructor overloading 
     
     Teacher() {
        name = "unknown";
        age = 0;
       department = "not assigned";
     }

     Teacher(String name) {
         this.name = name;
     }

     Teacher(int age,String department)
     {
        this.age=age;
        this.department=department;
    }
public static void main(String[] args) {
    // create object
    Teacher T1 = new Teacher("sachin reddy");
    Teacher T2= new Teacher(23, "it");
    // value print 
    System.out.println(T1.name);
    System.out.println(T2.department);
}

    
}