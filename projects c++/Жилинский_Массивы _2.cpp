#include <iostream>
#include <cmath>
using namespace std;
int main() {
	const int  P = 3,S=2;
	int dev;
	int a[P][S] = { {3,5},{2,9},{14,7} };
	int b[S][P] = { {14,7,11} ,{3,5,6} };
	int c[S][P];
	int d[P][S];
	for (int i = 0; i < P; i++) {           
		for (int j = 0; j < S; j++) {
			c[j][i] = a[i][j];
		}
	}
	for (int i = 0; i < S; i++) {
		for (int j = 0; j < P; j++) {
			d[j][i] = b[i][j];
		}
	}
	for (int i = 0; i < S; i++) {
		for (int j = 0; j < P; j++) {
			cout << c[i][j] << " ";
		}
		cout << endl;
	}
	for (int i = 0; i < P; i++) {
		for (int j = 0; j < S; j++) {
			cout << d[i][j] << " ";
		}
		cout << endl;
	}
}