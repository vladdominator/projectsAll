#include <iostream>
#include <cmath>
using namespace std;
bool fanc(int a, int b, int c, double& x1, double& x2, bool& ry) {
	double D;
	D = (b * b) - (4 * a * c);
	x1 = ((((-b) + (sqrt(D))) / 2) / (a));
	x2 = ((((-b) - (sqrt(D))) / 2) / (a));
	if (D >= 0) return true;
	else return false;
}

int main() {
	int a, b, c;
	bool ry;
	double x2;
	double x1;
	cin >> a >> b >> c;
	fanc(a, b, c, x1, x2, ry);
	if (ry) {
		cout << "Have: " << x1 << ",  " << x2 << endl;
	}
	else {
		cout << "Not have." << endl;
	}
}