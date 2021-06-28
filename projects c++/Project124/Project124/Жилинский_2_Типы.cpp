#include <iostream>
using namespace std;
int main() {
	unsigned int a;
	cin >> a;
	int dev=0, s;
	int b[1000] = {};
	for (int i = 0; a != 0; i++) {
		b[i] = a % 2;
		a = a / 2;
		s = i + 1;
		if (b[i] == 1) {
			dev++;
		}
	}
	cout << dev;

}

