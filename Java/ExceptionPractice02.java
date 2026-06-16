import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionPractice02 {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);

   

       try {
        System.out.println("숫자1: ");
           int num1 = sc.nextInt();
            System.out.println("숫자2: ");
       int num2 = sc.nextInt();

       System.out.println("몫: " + (num1 / num2));

       }catch (ArithmeticException e){
        System.out.println("계산 중 오류가 발생했습니다.");
        // System.out.println(e.getMessage());
        // e.printStackTrace();

       }catch (InputMismatchException e){
        System.out.println("숫자만 입력하세요.");

     
       }
        finally {
        System.out.println("finally 실행");
       }

 System.out.println("프로그램 종료");
    }
}
