                                                     /*1 Задание*/
/*#include <iostream>
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
}*/
                                                       /*2 Задание*/
/*#include <iostream>
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
}*/
                                                      /*3 Задание*/
#include <iostream>
#include <cmath>
using namespace std;
void func(int x,int y,float &arifm,float &geometr) {
       arifm = (x+static_cast<float>(y))/2;
	   geometr = sqrt(x * y);
}
int main() {
	float geometr,arifm;
	int m, n;
	cin >> m>>n;
	func(m,n,arifm,geometr);
	cout << "Arithmetic: "<<arifm<<endl;
	cout << "Geomethritic: " << geometr;
	return 0;
}