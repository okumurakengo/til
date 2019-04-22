//
//  main.c
//  c_practice
//
//  Created by kengo okumura on 2019/04/16.
//  Copyright © 2019 kengo okumura. All rights reserved.
//

#include <stdio.h>

int main(void) {
    int score = 55;
    if (score >= 60) {
        printf("OK\n");
    } else if (score >= 50) {
        printf("so so ...\n");
    } else {
        printf("NG\n");
    }
    return 0;
}
