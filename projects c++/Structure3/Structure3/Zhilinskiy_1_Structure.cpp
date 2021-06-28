#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <cstring>
#include <ctype.h>
using namespace std;

int main() {
	char str[1000] = " __Nothing-., .,is yours but a &few cubic centimeters,. in! your./ skull  ", strResult[1000];
	char strR[14] = " ,.!?;:-/_&\'\"";
	char* str1;
	strResult[0] = '\0';
	int n = 0, length, k, numberLength = 0;
	while (strlen(str) > n) {
		str1 = strpbrk(str + n, strR);
		if (str1) {
			n = str1 - str;
			length = strspn(str + n, strR);
			k = n - numberLength;
			if (k) {
				strncat(strResult, str + numberLength, k);
				cout << strResult << endl;
				strResult[0] = '\0';
			}
			n += length;
			numberLength += k + length;
		}
		else {
			n = strlen(str);
			cout << str << endl;
		}
	}

}