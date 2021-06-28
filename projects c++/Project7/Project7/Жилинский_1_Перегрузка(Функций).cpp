#include <iostream>
#include <cmath>
using namespace std;
int a = 8;
int squareCall(int a, int b) {
	return a*b;
}
double squareCall(double PI, int R) {
	return PI*R*R;
}
double squareCall(int x, int y,int z) {
	double p;
	p = (x + y + static_cast<float>(z)) / 2;
	return sqrt(p * (p - x) * (p - y) * (p - z));
}
int main(){
	int a,b,R,x,y,z;
	double const PI = 3.14;
	cout << "Enter the sides of rectangle:"<<endl;
	cin >> a >> b;
	cout << "Enter the radius of the circle:" << endl;
	cin >> R;
	cout << "Enter the sides of triangle:" << endl;
	cin >> x>>y>>z;
	cout <<"Area of rectangle: "<< squareCall(a,b)<<endl;
	cout << "Area of circle: " << squareCall(PI, R) << endl;
	cout << "Area of triangle: " << squareCall(x, y, z);
}