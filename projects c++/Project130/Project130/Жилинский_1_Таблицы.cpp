#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;
int main() {
	double f, h, toch;
	const double c = 5, x0 = 2, xm = 15;
	cin >> h >> toch;
	cout << "\xDA";
	for (int i = 0; i < toch + 4; i++) {
		cout << "\xC4";
	}
	cout << "\xC2";
	for (int i = 0; i < toch + 4; i++) {
		cout << "\xC4";
	}
	cout << "\xBF";
	cout << endl << "\xB3" << setw((toch + 4) - ((toch + 4) / 2 - 1));
	cout << "x"; 
	for (int i = 0; i < (toch + 4) / 2 - 1; i++) {
		cout << " ";
	}
	cout << "\xB3";
	for (int i = 0; i < (toch + 4) / 2 - 2; i++) {
		cout << " ";
	}
	cout << "f(X)";
	cout << setw((toch + 4) - ((toch + 4) / 2 + 1));
	cout << "\xB3" << endl;
	for (double x = x0; x <= xm; x += h) {
		if (x < 5) {
			f = x * c - 1;
		}
		if (x >= 5 && x < 9) {
			f = 2 * x * c;
		}
		if (x >= 9) {
			f = 3 * x - 2;
		}
		cout << fixed;
		cout << "\xC3";
		for (int i = 0; i < toch + 4; i++) {
			cout << "\xC4";
		}
		cout << "\xC5";
		for (int i = 0; i < toch + 4; i++) {
			cout << "\xC4";
		}
		cout << "\xB4";
		cout << endl << "\xB3" << setw(toch + 4) << right << setprecision(toch) << x << "\xB3"
			<< setw(toch + 4) << right << setprecision(toch)  <<  f  << "\xB3" << endl;
	}
	cout << "\xC0";
	for (int i = 0; i < toch + 4; i++) {
		cout << "\xC4";
	}
	cout << "\xC1";
	for (int i = 0; i < toch + 4; i++) {
		cout << "\xC4";
	}
	cout << "\xD9" << endl;
}