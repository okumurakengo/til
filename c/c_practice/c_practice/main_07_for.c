//
//  main.c
//  c_practice
//
//  Created by kengo okumura on 2019/04/16.
//  Copyright © 2019 kengo okumura. All rights reserved.
//

#include <stdio.h>

int main(void) {
    int m;
    
    for (m = 0; m < 10; m++) {
        if (m == 2) {
            continue;
        }
        if (m == 7) {
            break;
        }
        printf("m: %d\n", m);
    }
    
    return 0;
}
