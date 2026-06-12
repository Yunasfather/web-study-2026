public class JavaLoopPractice  {
    public static void main(String[] args) {
        // for(int i = 2; i <= 9; i++) {
        //     System.out.println(i + "단 \n");
        //     for(int j = 1; j <= 9; j++) {
        //         System.out.println(i + "*" + j  + "=" + (j  * i));
        //     }
        //      System.out.println("\n");
        // }
       
        // int num = 1;
       

        // while (num <= 10) {
        //     System.out.println(num);
        //     num ++;
        // }

        for(int i =1; i <= 10; i++) {
            if (i == 5) {
                continue;
            }else {
                System.out.println(i);

            }
        }
    }

}