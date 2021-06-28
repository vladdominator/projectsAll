#include <iostream>
#include <cmath>
using namespace std;
int main() {
	int a[11] = {0,-1,4,5,6,7,8,9,10,2,1};
	int max = a[0],j=1;
	for (int i = 0; i < sizeof(a)/ sizeof(*a); i++) {
		if (max <= a[i]) {
			max = a[i];
			j = i+1;
		}
	}
	cout << "Max: " << max << " Nomer: " << j;
}