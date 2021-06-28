                                                     /*1 Задание*/
#include <iostream>
#include <cmath>
using namespace std;
int func(int x) {
	if (x < 0) x *= -1;
	int max = x % 10, min = x % 10;
	while (x > 0) {
		if (max < x % 10) {
			max = x % 10;
		}
		else if (min > x % 10) {
			min = x % 10;
		}
		else x = x / 10;
	}
	return max - min;
}
int main() {
	int n;
	cin >> n;
	cout << func(n);
	return 0;
}
