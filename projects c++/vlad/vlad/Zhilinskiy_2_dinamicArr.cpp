#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;
int main() {
    int m, n;
    cout << "Enter a number of rows and columns: ";
    cin >> m >> n;
    char** a = new char*[m];
    for (int i = 0; i < m; i++) {
        a[i] = new char[n];
    }
    cout << "Strings: ";
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> a[i][j];
        }
    }
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << a[i][j] << " ";
        }
        if (i != m - 1) {
            cout << endl;
        }
    }
    for (int i = 0; i < m; i++) {
        delete[]a[i];
    }
    delete[]a;
}