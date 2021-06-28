                                                       /*2 Задание*/
#include <iostream>
#include <cmath>
using namespace std;
bool func(int x,int y) {
	for (int i = 1; i < sqrt(x); i++) {
		if (pow(y, i) == x) {
			return true;
		}
	}
	if (x == 1 && y == 1) {
		return true;
	}
	return false;
}
int main() {
	int m,n;
	cin >> m>>n;
	if (func(m, n)) {
		cout << "true";
	}
	else {
		cout << "false";
	}
	return 0;
}