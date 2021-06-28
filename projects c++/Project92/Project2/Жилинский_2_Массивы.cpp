/*#include <iostream>
#include <cmath>
using namespace std;
int main() {
	const int N = 8;
	int a[N], dev;
	for (int i = 0; i < N; i++) {
		cin >> a[i];
	}
	for (int j = 0; j < N; j++) {
		if (j < N - 1) {
			dev = a[j];
			a[j] = a[j + 1];
			a[j + 1] = dev;
		}
		}
	for (int j = 0; j < N; j++) {
		cout << endl << a[j] << " ";
	}
}*/
#define _USE_MATH_DEFINES
#include <cmath>
#include <iostream>
#include <ctime>
#include <cstdlib>
using namespace std;
int main() {
	setlocale(LC_ALL, "");
	srand(time(NULL));
	int arr[5][5] = {};
	int num;
	for (int y = 0; y < 5; y++) {
		for (int x = 0; x < 5; x++) {
			cout<< "Введите элемент массива: "; cin>> num;
			for (int py = 0; py <= y; py++) {
				for (int px = 0; px <= x; px++) {
					if (num == arr[py][px]) {
						while (num == arr[py][px]) {
							cout<< "Введите другой: "; cin >> num;
						}
						num = arr[py][px];
					}
					else {
						arr[py][px] = num;
					}
				}
			}
		}
	}
	for (int y = 0; y < 5; y++) {
		for (int x = 0; x < 5; x++) {
			if (x == 4) {
				cout<< arr[y][x]<< "\n";
			}
			else {
				cout<< arr[y][x]<<
					" ";
			}
		}
	}


}