//
//  main.c
//  c_practice
//
//  Created by kengo okumura on 2019/04/16.
//  Copyright © 2019 kengo okumura. All rights reserved.
//

#include <stdio.h>

int main(void) {
    int m = 0;
    
    while (m < 10) {
        printf("m: %d\n", m);
        m++;
    }
    
    m = 20;
    do {
        printf("m: %d\n", m);
        m++;
    } while (m < 10);
    
    return 0;
}
