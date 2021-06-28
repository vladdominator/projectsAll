#include <iostream>
#include <cmath>
using namespace std;
int main() {
	int k;
	const int  N = 5;
	int a[N][N] = { {3,5,7,67,89},{2,9,11,34,55},{14,6,15,19,12},{1,10,32,25,58},{38,459,158,79,48} };
	int b[N][N];
	k = N/2;
	for (int i = 0; i < N; i++) {           
		for (int j = 0; j < N; j++) {
			if (N % 2 == 0) {
				if ((k > j) && (k > i)) {
					b[i + k][j + k] = a[i][j];
				}
				else if ((k <= j) && (k > i)) {
					b[i + k][j - k] = a[i][j];
				}
				else if ((k <= j) && (k <= i)) {
					b[i - k][j - k] = a[i][j];
				}
				else {
					b[i - k][j + k] = a[i][j];
				}
			}
			else {
				if ((k > j) && (k > i)) {
					b[i + k + 1][j+k+1] = a[i][j];
				}
				else if ((k < j) && (k > i)) {
					b[i + k + 1][j-k-1] = a[i][j];
				}
				else if ((k < j) && (k < i)) {
					b[i-k-1][j - k - 1] = a[i][j];
				}
				else if((k > j) && (k < i)) {
					b[i - k - 1][j+k+1] = a[i][j];
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