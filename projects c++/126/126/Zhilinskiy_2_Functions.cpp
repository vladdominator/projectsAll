#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;
int main() {
	int a[5] = { 1,2,3,4,0 };
	int* c = a;
	int vlad;
	int min = *c;
	for (int i = 0; i < 5; i++) {
		if (*(c + i) <= min) {
			min = *(c + i);
			vlad = i;
		}
	}
	cout << vlad;
}