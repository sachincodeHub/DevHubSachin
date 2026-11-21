
public class Students {
//    class property
      String name;
      int age;

    //   constructor
    Students(String name, int age) {
        // this.me kya hai class property ok
        
        this.name = name;
       this. age = age;
    }
    public static void main(String[] args) {
        Students s1 = new Students("sachin kumar", 21);
        Students s2 = new Students("ravi", 22);

        // print value
        System.out.println(s1.name);
        System.out.println(s1.age);
        System.out.println(s2.name);
        System.out.println(s2.age);
    }
}
