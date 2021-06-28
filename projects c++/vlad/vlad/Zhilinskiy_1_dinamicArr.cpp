#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;
int main() {
	int n, position = 0;
	cout << "Size of array: ";
	cin >> n;
	cout << "Array: ";
	int* p = new int[n];
	for (int i = 0; i < n; i++) {
		cin >> p[i];
	}
	int min = p[0];
	for (int i = 0; i < n; i++) {
		if (min > p[i]) {
			min = p[i];
			position = i;
		}
	}
	cout << "Position: " << position + 1;
	delete[]p;
}