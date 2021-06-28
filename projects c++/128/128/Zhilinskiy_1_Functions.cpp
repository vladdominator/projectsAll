#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;
int main() {
	float a = 0, b = 1.5, h = 0.12;
	int n,sum;
	long double x, f, f1, e, form, k;
	cout << "e: ";
	cin >> e;
	sum = abs(log10(e));
	cout << "\xDA";
	for (int i = 0; i <= 4; i++) cout << '\xC4'; cout << "\xC2";
	for (int i = 0; i <= 10; i++) cout << '\xC4'; cout << "\xC2";
	for (int i = 0; i <= 10; i++) cout << '\xC4'; cout << "\xC2";
	for (int i = 0; i <= sum + 8; i++) cout << '\xC4'; cout << "\xC2";
	for (int i = 0; i <= 5; i++) cout << '\xC4'; cout << "\xBF";
	cout << endl;
	cout << '\xB3' << setw(3) << 'x' << setw(3) << '\xB3'
		<< setw(8) << "f(x)" << setw(4) << '\xB3'
		<< setw(8) << "f1(x)" << setw(4) << '\xB3'
		<< setw(sum + 5) << 'P' << setw(5) << '\xB3'
		<< setw(4) << 'N' << setw(3) << '\xB3';
	cout << endl;
	for (x = a; x <= b; x += h) {
		//draw table
		cout << "\xC3";
		for (int i = 0; i <= 4; i++) cout << '\xC4';
		cout << "\xC5";
		for (int i = 0; i <= 10; i++) cout << '\xC4';
		cout << "\xC5";
		for (int i = 0; i <= 10; i++) cout << '\xC4';
		cout << "\xC5";
		for (int i = 0; i <= sum + 8; i++) cout << '\xC4';
		cout << "\xC5";
		for (int i = 0; i <= 5; i++) cout << '\xC4';
		cout << "\xB4" << endl;
		//search f1
		f = sin(x);
		f1 = 0;
		n = 1;
		k = 3;
		form = x;
		while (abs(f - f1) > e){
			f1 += form;
			n++;
			form *= (((-1) * x * x) / (k * (k - 1)));
			k += 2;
		} 
		cout << fixed << '\xB3' << setw(4) << setprecision(2) << x << setw(2) << '\xB3'
			<< setw(9) << setprecision(6) << f << setw(3) << '\xB3'
			<< setw(9) << setprecision(6) << f1 << setw(3) << '\xB3'
			<< setw(sum + 7) << setprecision(sum + 2) << abs(f - f1) << setw(3) << '\xB3'
			<< setw(4) << n << setw(3) << '\xB3';
		cout << endl;
	}
	cout << "\xC0";
	for (int i = 0; i <= 4; i++) cout << '\xC4'; cout << "\xC1";
	for (int i = 0; i <= 10; i++) cout << '\xC4'; cout << "\xC1";
	for (int i = 0; i <= 10; i++) cout << '\xC4'; cout << "\xC1";
	for (int i = 0; i <= sum + 8; i++) cout << '\xC4'; cout << "\xC1";
	for (int i = 0; i <= 5; i++) cout << '\xC4'; cout << "\xD9";
}
