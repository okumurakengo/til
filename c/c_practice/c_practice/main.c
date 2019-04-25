//
//  main.c
//  c_practice
//
//  Created by kengo okumura on 2019/04/16.
//  Copyright © 2019 kengo okumura. All rights reserved.
//

#include <stdio.h>

float getMax(float a, float b) {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}

int main(void) {
    float result;
    result = getMax(2.3, 5.2);
    printf("%f\n", result);
    return 0;
}
