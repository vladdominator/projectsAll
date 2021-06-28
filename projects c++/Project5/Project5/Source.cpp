/*#include <iostream>
#include <cmath>
using namespace std;
int main() {
	int S;
	cin >> S;
	for (int x=0; x <= sqrt(S); x++) {
		for (int y=0; y <= S; y++) {
			if (x * y == S) {
				cout << "Width: " << x<<"  " <<  "Height: " << y<<endl;
			}
		}
	}
}*/
/*#include <iostream>
#include <cmath>
using namespace std;
int main(){
	int a, b,c,i;
	cin >> a >> b;
	if (a < b) {
		c = a;
		a = b;
		b = c;
	}
	for (i = 0; a>b; i++) {
		a -= b;
		cout << b << endl;
		if (a < b) {
			c = a;
			a = b;
			b = c;
		}
		if (a == b) {
			cout << a << endl;
		}
	}
	cout << "value: " << i+1;
}*/
#include <iostream>
#include <cmath>
using namespace std;
bool perimetr(int a, int b, int &P, int& S) {
	if (a > 0 && b>0) {
		S = a * b;
		P = (a + b) * 2;
		return true;
	}
	else return false;
}
void print() {
	cout << "-----";
}
int main() {
	int S,P;
	int a, b;
	cin >> a >> b;
	if (!perimetr(a, b, S, P)) {
		return 0;
	}
	else {
		cout << S;
		print();
		cout << P;
	}
}