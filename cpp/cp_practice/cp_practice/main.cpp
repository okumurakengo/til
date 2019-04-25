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
    Neko dora("ボス");  //「ボス」というの名前を持ったdoraが生成される
    cout<<"あなたの名づけた猫がメモリ上に生成されました。"<<endl;
    cout<<"猫が鳴きます。"<<endl;
    
    dora.naku();
    return 0;
}
