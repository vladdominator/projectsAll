#include <iostream>

using namespace std;

int main() {
	const int N = 5, M = 6, P = 4;
	int a[N][M] = { {3,5,8,9,67,58},{2,9,32,1,48,43},{14,7,56,79,34,95},{49,2,69,43,48,69},{2,39,58,73,84,20}};
	int b[P][M] = { {14,7,11,48,4,7}, {14,7,11,48,4,7}, {14,7,11,48,4,7}, {14,7,11,48,4,7} };
	int c[N][M] = {};
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			for (int k = 0; k < P; k++) {
				c[i][j] = (a[i][k] * b[k][j]) + c[i][j];
			}
		}
	}
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			cout << a[i][j] << ' ';
		}
		cout << endl;
	}
	for (int i = 0; i < P; i++) {
		for (int j = 0; j < M; j++) {
			cout << b[i][j] << ' ';
		}
		cout << endl;
	}
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			cout << c[i][j] << ' ';
		}
		cout << endl;
	}

	return 0;
}