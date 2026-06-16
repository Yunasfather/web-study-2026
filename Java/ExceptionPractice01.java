import java.util.Scanner;

public class ExceptionPractice01 {
    public static void main(String[]args) {
        Scanner sc = new Scanner(System.in);


        try {
            System.out.println("숫자1 입력: ");
                  int num1 = sc.nextInt();
                System.out.println("숫자2 입력: ");
                  int num2 = sc. nextInt();

                  System.err.println("나눈 몫: " + (num1 / num2));

        }catch (ArithmeticException e) {
                System.out.println("0으로 나눌 수 없습니다.");
                System.out.println(e.getMessage());
                e.printStackTrace();
        }
      

    }
}
