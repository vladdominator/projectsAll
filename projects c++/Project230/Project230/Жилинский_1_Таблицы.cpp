#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

void tableDraw(int, int, int, int, int);

int main() {
	const float a = 0, b = 1.6, h = 0.1;
	long double x, f1, f2, e, ch, k, m;
	unsigned short n = 0;
	int acc;

	cout << "Enter an accuracy number: ";
	cin >> e;
	acc = abs(log10(e));

	cout << "\xDA";
	for (int i = 1; i <= 6; i++) cout << '\xC4';
	cout << "\xC2";
	for (int i = 1; i <= 12; i++) cout << '\xC4';
	cout << "\xC2";
	for (int i = 1; i <= 12; i++) cout << '\xC4';
	cout << "\xC2";
	for (int i = 1; i <= acc + 8; i++) cout << '\xC4';
	cout << "\xC2";
	for (int i = 1; i <= 5; i++) cout << '\xC4';
	cout << "\xBF" << endl;

	cout << '\xB3' << setw(4) << 'x' << setw(3) << '\xB3'
		<< setw(8) << "f1" << setw(5) << '\xB3'
		<< setw(8) << "f2" << setw(5) << '\xB3'
		<< setw(acc + 3) << 'P' << setw(6) << '\xB3'
		<< setw(4) << 'n' << setw(2) << '\xB3' << endl;

	for (x = a; x <= b; x += h) {
		tableDraw(6, 12, 12, acc + 8, 5);

		f1 = x * cos(x) - sin(x);

		n = 0; f2 = 0; m = 2; k = 3;
		ch = ((-1) * m * x * x * x) / (k * (k - 1));

		do {
			f2 += ch;
			n++;
			m += 2; k += 2;
			ch *= (((-1) * m * x * x) / (k * (k - 1) * (m - 2)));
		} while ((abs(f1 - f2)) > e);

		cout << fixed << '\xB3' << setw(5) << setprecision(2) << x << setw(2) << '\xB3'
			<< setw(11) << setprecision(7) << f1 << setw(2) << '\xB3'
			<< setw(11) << setprecision(7) << f2 << setw(2) << '\xB3'
			<< setw(acc + 7) << setprecision(acc + 3) << abs(f1 - f2) << setw(2) << '\xB3'
			<< setw(4) << n << setw(2) << '\xB3' << endl;
	}

	cout << "\xC0";
	for (int i = 1; i <= 6; i++) cout << '\xC4';
	cout << "\xC1";
	for (int i = 1; i <= 12; i++) cout << '\xC4';
	cout << "\xC1";
	for (int i = 1; i <= 12; i++) cout << '\xC4';
	cout << "\xC1";
	for (int i = 1; i <= acc + 8; i++) cout << '\xC4';
	cout << "\xC1";
	for (int i = 1; i <= 5; i++) cout << '\xC4';
	cout << "\xD9" << endl;
}

void tableDraw(int g, int j, int l, int n, int p) {
	cout << "\xC3";
	for (int i = 1; i <= g; i++) cout << '\xC4';
	cout << "\xC5";
	for (int i = 1; i <= j; i++) cout << '\xC4';
	cout << "\xC5";
	for (int i = 1; i <= l; i++) cout << '\xC4';
	cout << "\xC5";
	for (int i = 1; i <= n; i++) cout << '\xC4';
	cout << "\xC5";
	for (int i = 1; i <= p; i++) cout << '\xC4';
	cout << "\xB4" << endl;
}