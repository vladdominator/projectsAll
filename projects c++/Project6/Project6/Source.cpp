#include <iostream>
#include <cmath>
using namespace std;
int main() {
	int n,min,max,dif;
	cin >> n;
	int a[1000];
	for (int i = 0; i <= n; i++) {
		cin >> a[i];
		min = a[0];
		max = a[0];
	}
	for (int i = 0; i <= n; i++) {
		if (a[i] > max) {
			max = a[i];
		}
		if (a[i] < min) {
			min = a[i];
		}
	}
	dif = max - min;
	cout << dif;
	}