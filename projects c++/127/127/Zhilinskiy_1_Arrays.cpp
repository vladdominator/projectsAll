#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;
int func(int* a, int length) {
	bool isTrue = true;
	int n = 0;

	for (int* i = a; i < a + length; i++) {
		isTrue = true;
		int g = 0;
		for (int* j = a; j <= i; j++) {
			if (*i == *j) {
				g++;
			}
			if (g > 1) {
				isTrue = false;
				break;
			}
		}
		if (isTrue) {
			cout << *i << ' ';
			n++;
		}
	}

	return n;
}
int main() {
	int a[10] = { 2, 1, 2, 3, 2, 3, 2, 4, 5 , 2 };
	int k = 0;
	int length = sizeof(a) / sizeof(int);
	cout << endl << func(a, length);
}