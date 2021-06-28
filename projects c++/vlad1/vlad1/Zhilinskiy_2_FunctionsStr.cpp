#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <cstring>
#include <ctype.h>
using namespace std;

int main() {
	char str1[100], str2[1000], str3[1000], strResult[1000];
	int  a, b, c;

	cout << "Length 3 strings: ";
	cin >> a >> b >> c;
	cout << "3 Strings:";
	cin >> str1 >> str2 >> str3;

	strResult[0] = '\0';

	strncat(strResult, str1, a);
	strncat(strResult, str2, b);
	strncat(strResult, str3, c);
	cout << endl << strResult << endl;
}