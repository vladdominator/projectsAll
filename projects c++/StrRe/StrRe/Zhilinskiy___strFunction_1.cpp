//============================================================================
// Name        : Samal_streams_1.cpp
// Author      : Vadim Samal
//============================================================================

#include <iostream>
#include <fstream>
#include <ios>
using namespace std;

int main() {
	ifstream file1("c:\\vlad.txt");
	ofstream file2("c:\\vlad.txt");
	char str[1000];
	int x;
	if (!file1) {
		cerr << "Not found the file.";
		exit(1);
	}
	if (!file2) {
		cerr << "Not found the file.";
		exit(1);
	}
	file2 << 606 << endl;
	file1 >> x;
	cout << x << endl;

	file2 << "vladislav zhi" << endl;
	file2 << 45.3 << endl;

	
    file1 >> str;
    cout << str << endl;

	file1.close();
	file2.close();
}
