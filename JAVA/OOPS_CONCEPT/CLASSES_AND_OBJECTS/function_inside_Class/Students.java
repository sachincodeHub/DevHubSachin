package function_inside_Class;

public class Students {
    String name;
    int age;

    Students(String name, int age) {
        this.name = name;
        this.age = age;

    }

    void display() {
        System.out.println(name);
        System.out.println(age);
    }
    public static void main(String[] args) {
        Students s1 = new Students("sachin", 21);
        s1.display();
    }
    
}
