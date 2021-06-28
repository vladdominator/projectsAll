#include <iostream>
#include <iomanip>

using namespace std;

int main() {
	const double t = 7, x0 = -2, xm = 11, h = 0.52;
	double f;

	cout << "\xDA\xC4\xC4\xC4\xC4\xC4\xC4\xC2\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xBF" << endl
		<< "\xB3" << setw(6) << left << "  x" << "\xB3"
		<< setw(12) << right << "f(X)    " << "\xB3" << endl;

	for (double x = x0; x <= xm; x += h) {
		if (x < 0) f = t + x;
		if (x >= 0 && x < 10) f = t * x - 3;
		if (x >= 10) f = 2 * t * x - 1;

		cout << fixed;
		cout << "\xC3\xC4\xC4\xC4\xC4\xC4\xC4\xC5\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xB4" << endl
			<< "\xB3" << setw(6) << left << setprecision(3) << x << "\xB3"
			<< setw(12) << right << setprecision(3) << f << "\xB3" << endl;
	}

	cout << "\xC0\xC4\xC4\xC4\xC4\xC4\xC4\xC1\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xC4\xD9" << endl;

	return 0;
}