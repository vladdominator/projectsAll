#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;
int main() {
	const int n = 5;
	int a[n] = { 10, 12, 15, 0, 13 };
	int *c = a;
	int vlad;
	int min = *c;
	for (int* b = a; b < a + n; b++) {
		if (*b <= min) {
			min = *b;
			vlad = (b - a);
		}
	}

	cout << vlad;
}