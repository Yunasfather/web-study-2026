import java.util.Scanner;

public class Week02Practice {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("이름 입력 : ");

        String name = sc.nextLine();

         System.out.println("나이 입력 : ");
           int age = sc.nextInt();

         if (age >= 20) {

            System.out.println("성인 입니다.");
         }else {
              System.out.println("미성년 입니다.");
         }

      

         System.out.println("키 입력 : ");
        float height = sc.nextFloat();

         System.out.println("공부중 입력 : ");
        boolean studying = sc.nextBoolean();

        
      

        System.out.println("===== 자기소개 =====");
        System.out.println("이름: " + name);
        System.out.println("나이: " + age);
        System.out.println("키 :" + height);
        System.out.println("개발자 준비중 :" + studying);
    System.out.println("==================");
    }
   
}

