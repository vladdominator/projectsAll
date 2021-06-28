#include <iostream>
#include <cmath>
using namespace std;
int main() {
	int N;
	cin >> N;
	for (int i = 0; i <= 10; i++) {
		if (i % 2 != 0) {
			for (int j = 0; j < N; j++) {
				cout << (i+1) * N - j << " ";
			}
		}
		else {
			for (int j = 1; j <= N; j++) {
				cout << i * N + j << " ";
			}
		}
		cout <<endl;
	}
}