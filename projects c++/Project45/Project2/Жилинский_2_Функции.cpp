#include <iostream>
#include <cmath>
using namespace std;
int fanc(int x)
{
    int a = 1;
    int b = 0;
    int c;
    if (x < 1) { return(0); }
    for (int n = 1; n < x; n++)
    {
        c = b;
        b += a;
        a = c;
    }

    return b;

}
int main() {
    int n;
    cin >> n;
    for (int i = 1; i < n + 1; ++i) {
        cout << fanc(i) << " ";
    }
    return 0;
}
/*
#include <iostream>
#include <cmath>
using namespace std;
void func1(int x, int y, int z,float &x1,float &x2,bool &kv) {
    float D;
    D = y * y - 4 * x * z;
    if (D >= 0) {
        kv = true;
        x1 = (-y + sqrt(D)) / 2 * x;
        x2 = (-y - sqrt(D)) / 2 * x;
    }
    else {
        kv = false;
    }
}
int main() {
    int a, b, c;
    float x1, x2;
    bool kv;
    cin >> a >> b >> c;
    func1(a, b, c,x1,x2,kv);
    if (kv) {
        cout << "Have:"<<endl;
        cout <<"x1 = "<< x1 << endl <<"x2 = " <<x2;
    }
    else {
        cout << "Haven't";
    }
    return 0;
}*/