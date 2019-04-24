//
//  main.c
//  c_practice
//
//  Created by kengo okumura on 2019/04/16.
//  Copyright © 2019 kengo okumura. All rights reserved.
//

#include <stdio.h>

int main(void) {
    int rank = 20;
    
    switch (rank) {
        case 1:
            printf("Gold!\n");
            break;
        case 2:
            printf("Silver!\n");
            break;
        case 3:
            printf("Bronze!\n");
            break;
        default:
            printf("no medal...\n");
            break;
    }
    
    return 0;
}
