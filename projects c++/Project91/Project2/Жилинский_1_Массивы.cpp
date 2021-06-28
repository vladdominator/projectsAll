#include <iostream>
#include <cmath>
using namespace std;
int main() {
	const int N = 10;
	int dev;
	int a[N] = { 1,-2,3,5,7,8,9,2,8,-10 };
	for (int i = 0; i<N/2; i++) {
		dev = a[i];
	    a[i]=a[N - i - 1];
		a[N - i - 1] = dev;
	}
	for (int g = 0; g <N; g++) {
		cout << a[g] << " ";
	}
}