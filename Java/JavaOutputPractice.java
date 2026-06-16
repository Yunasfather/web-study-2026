import java.util.Scanner; 

public class JavaOutputPractice {

    public static void main(String[] args) {

        int num1 = 10;
        int num2 = 0;

        try {
            System.out.println("몫: " + (num1 / num2));
        } catch (ArithmeticException e) {
            System.out.println("0으로 나눌 수 없습니다.");
            // System.out.println(e.getMessage());
            // e.printStackTrace();
        }
        System.out.println("프로그램 종료");
    }

  

   
}
    
