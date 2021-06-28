#include <iostream>
#include <cmath>
using namespace std;
int main() {
    int a;
    int b = 0;

    cin >> a;
    int sqrt_a = (int)sqrt(a);
    if (a == 1) {
        cout << "no prime number";
        return 0;
    }
    if (a < 1) {
        cout << "error";
        return 0;
    }
    for (int i = 2; i <= sqrt_a; i++)
    {
        if (a % i == 0)
        {
            b += 1;
            break;
        }
    }
    if (b == 1)
    {
        cout << "no prime number" << endl;
    }
    else
    {
        cout << "prime number" << endl;
    }

    return 0;
}