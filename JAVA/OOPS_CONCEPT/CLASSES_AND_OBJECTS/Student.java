package JAVA.OOPS_CONCEPT.CLASSES_AND_OBJECTS;

public class Student {
    // properties 
    String Name;
    int Age;
    String rollNumber;

    // parameterized Constructor 
    Student(String N, int A, String R) {
        Name = N;
        Age = A;
        rollNumber = R;
        System.out.println(" constructor called........ ");

    }

    public static void main(String[] args) {

        // oject create 

        Student s1 = new Student("sachin kumar", 23, "0179cs221068");
        Student s2 = new Student("sohal kumar", 33, "0179cs221008");
        Student s3 = new Student("anamika kumari", 33, "0179cs221028");
        Student s4 = new Student("pradeep kumar", 24, "0179cs221098");
        Student s5 = new Student("sonu kumar", 23, "0179cs221058");
        
        //  print value
    
        System.out.println(s1.Name);
        System.out.println(s1.Age);
        System.out.println(s1.rollNumber);

       System.out.println(s2.Name);
        System.out.println(s2.Age);
        System.out.println(s2.rollNumber);

        System.out.println(s3.Name);
        System.out.println(s3.Age);
        System.out.println(s3.rollNumber);

        System.out.println(s4.Name);
        System.out.println(s4.Age);
        System.out.println(s4.rollNumber);

       System.out.println(s5.Name);
        System.out.println(s5.Age);
        System.out.println(s5.rollNumber);
    

    }

    
}
