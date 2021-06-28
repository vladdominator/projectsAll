/*3 Задание*/
#include <iostream>
#include <cmath>
using namespace std;
void func(int x, int y, float& arifm, float& geometr) {
	arifm = (x + static_cast<float>(y)) / 2;
	geometr = sqrt(x * y);
}
int main() {
	float geometr, arifm;
	int m, n;
	cin >> m >> n;
	func(m, n, arifm, geometr);
	cout << "Arithmetic: " << arifm << endl;
	cout << "Geomethritic: " << geometr;
	return 0;
}