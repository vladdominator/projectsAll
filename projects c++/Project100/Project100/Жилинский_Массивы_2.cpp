#include <iostream>
#include <cmath>
using namespace std;
int main() {
	const int N = 3, P = 3;
	double a[N][P] = { {3.4,5.5,6.2},{2.7,9.8,11.6},{14.5,7.8,11.7} };
	double b[N][P] = { {2.7,9.8,11.6} ,{14.5,7.8,11.7} ,{3.4,5.5,6} };
	double c[N][P];
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < P; j++) {
			c[i][j] = a[i][j] + b[i][j];
		}
	}
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < P; j++) {
			cout << c[i][j] << " ";
		}
		cout << endl;
	}

}