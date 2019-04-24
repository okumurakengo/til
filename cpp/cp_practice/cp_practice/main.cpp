//
//  main.cpp
//  cp_practice
//
//  Created by kengo okumura on 2019/04/17.
//  Copyright © 2019 kengo okumura. All rights reserved.
//

#include <iostream>
#include <string>
using namespace std;

class Neko
{
    private:
        string name;
    public:
        Neko(string s){
            name = s;
        }
        void naku(){
            cout<<"にゃあ。俺様は"<<name<<"だ。"<<endl;
        }
};

int main() {    
    cout << "tmp" <<endl;
    return 0;
}
