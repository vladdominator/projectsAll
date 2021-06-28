#include <iostream>
int main() {
    int i,s=32;
    for (i = 1; i < 224; i++) {
        if (i % 11 == 0) {
            std::cout << s << ":" << (char)s << "\n";
        }
        else if (i % 11 != 0 && i > 0 && i < 69) {
            std::cout << s << ":" << (char)s << "  ";
        }
        else if(i % 11 != 0 && i > 220 && i < 224){
            std::cout << s << ":" << (char)s << "                         ";
        }
        else {
            std::cout << s << ":" << (char)s << " ";
        }
        s++;
    }
}