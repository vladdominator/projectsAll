#include <iostream>
#include <cmath>
using namespace std;
int main() {
	const int N = 3, P = 3,S=2;
	int a[P][S] = { {3,5},{2,9},{14,7} };
	int b[S][P] = { {14,7,11} ,{3,5,6} };
	int c[N][P];
	for (int i = 0; i < P; i++) {           
		for (int j = 0; j < P; j++) {
			c[i][j] = 0;
			for (int k = 0; k < S; k++) {
				c[i][j] = a[i][k] * b[k][j] + c[i][j];
			}
		}
	}
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < P; j++) {
			cout << c[i][j] << " ";
		}
		cout << endl;
	}

}