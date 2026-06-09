
import java.util.Scanner;
public class FirstJava {
    public static void main(String[]args) {

       
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        int age = sc.nextInt();
 System.out.println("\"시스템\" 테스트를 시작합니다.");
        //    System.out.println("이름 : " + name);
           System.out.printf("이름 : %s", name);
        // System.out.println("나이 : " +age);
        System.out.print("\n");
          System.out.printf("나이 : %d", age);
    }
      
}