#include <iostream>
#include <cmath>
#include <iomanip>
#include <cstdlib>
using namespace std;
int artemPidor(int* a, int* b, int n, int p) {
    const int L = p + n;
    int c[L];
    for (int i = 0; i < p; i++){
        c[i] = a[i];
    }
}
void change_array(int* p, int n) {
    bool letsChanged;
    for (int i = 0; i < n - 1; i++) {
        letsChanged = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (p[j] > p[j + 1]) {
                int neitral;
                neitral = p[j + 1];
                p[j + 1] = p[j];
                p[j] = neitral;
                letsChanged = true;
            }
        }
        if (letsChanged == false) {
            break;
        }
    }
}
int main() {
	const int N = 10, P = 20;
    int a[N], b[P];
    int high = 50, low = -50;
    srand(time(0));
    for (int i = 0; i < N; i++) {
        a[i] = rand() % (high - low + 1) + low;
    }
    for (int i = 0; i < P; i++) {
        b[i] = rand() % (high - low + 1) + low;
    }
    change_array(a, N);
    change_array(b, P);
    artemPidor(a, b, N, P);
	for (int i = 0; i < N; i++) {
		cout << a[i] << " ";
	}
    cout << endl;
    for (int i = 0; i < P; i++) {
        cout << b[i] << " ";
    }
    return 0;
}