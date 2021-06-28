#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <cstring>
#include <ctype.h>
using namespace std;

int main() {
	int n = 0;
	char str[1000], substr[1000];
	cout << "Substring: ";
	cin >> substr;
	int length = strlen(substr);
	cout << "Text: ";
	cin >> str;
	for (int i = 0; i < strlen(str); i += length) {
		if (n % 2 != 0) {
			if (strlen(str) - i < length) {
				strncpy(str + i, substr, strlen(str) - i);
				break;
			}
			strncpy(str + i, substr, length);
		}
		n++;
	}

	cout << str << endl;
}