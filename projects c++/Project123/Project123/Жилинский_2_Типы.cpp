#include <iostream>
using namespace std;
int main() {
	unsigned int a;
	cin >> a;
	int dev, s;
	int b[1000] = {};
	for (int i = 0; a != 0; i++) {
		b[i] = a % 2;
		a = a / 2;
		s = i + 1;
	}
	for (int j = 0; j < s / 2; j++) {
		dev = b[j];
		b[j] = b[s - j - 1];
		b[s - j - 1] = dev;
	}
	for (int k = 0; k < s; k++)
	{
		cout << b[k];
	}

}

