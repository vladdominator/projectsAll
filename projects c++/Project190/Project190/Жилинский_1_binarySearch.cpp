#include <iostream>
#include <cmath>
using namespace std;
int binarySort(int *list, int item, int length) {
	int low = 0;
	int high = length - 1;

	while (low <= high) {
		int mid = floor((low + high) / 2);
		int guess = list[mid];
		if (guess == item) {
			return mid;
		}
		if (guess > item) {
			high = mid - 1;
		}
		if (guess < item) {
			low = mid + 1;
		}
	}
	return -1;
}
void sortirovArr(int& a, int& b) {
	int d;
	d = a;
	a = b;
	b = d;
}
int main() {
	int arr[] = { 2,4,5,6,8,6,4,3,2,6 };
	int item = 8;
	int lengthArr = sizeof(arr) / sizeof(int);
	int min;
	for (int i = 1; i <= lengthArr- 1; i++) {
		min = lengthArr - 1;
		for (int j = i - 1; j <= lengthArr - 1; j++) {
			if (arr[j] <= arr[min]) {
				min = j;
			}
		}
		sortirovArr(arr[min], arr[i - 1]);
	}
	cout << "Sortirov array: ";
	for (int i = 0; i < lengthArr; i++) {
		cout << arr[i] << " ";
	}
	cout << endl <<"Postition item: " << binarySort(arr, item, lengthArr);
}