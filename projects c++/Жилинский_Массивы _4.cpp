#include <iostream>
#include <cmath>
using namespace std;
int main() {
	int k;
	const int  N=4;
	int a[N][N] = { {3,5,7,67},{2,9,11,34},{14,6,15,19},{1,10,32,25} };
	int b[N][N];
	k = N/2;
	for (int i = 0; i < N; i++) {           
		for (int j = 0; j < N; j++) {
			if (N % 2 == 0) {
				if ((k > j) && (k > i)) {
					b[i + k][j] = a[i][j];
				}
				else if ((k <= j) && (k > i)) {
					b[i][j - k] = a[i][j];
				}
				else if ((k <= j) && (k <= i)) {
					b[i - k][j] = a[i][j];
				}
				else {
					b[i][j + k] = a[i][j];
				}
			}
			else {
				if ((k > j) && (k > i)) {
					b[i+k+1][j] = a[i][j];
				}
				else if ((k < j) && (k > i)) {
					b[i][j-k-1] = a[i][j];
				}
				else if ((k < j) && (k < i)) {
					b[i-k-1][j] = a[i][j];
				}
				else if((k > j) && (k < i)) {
					b[i][j+k+1] = a[i][j];
				}
				else {
					b[i][j] = a[i][j];
				}
			}
			
		}
	}
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			cout << b[i][j] << " ";
		}
		cout << endl;
	}
}