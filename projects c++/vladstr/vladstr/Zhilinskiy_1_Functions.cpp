#include <iostream>
#include <iomanip>
using namespace std;

struct Student { 
    char fio[1000];
    int studak;
    int course;
    int group;
};
struct Session {
    int studak;
    int score[4];
};

int main() {
    Student student[5] = { {"Hadson B.D.\0", 2022378, 2, 10},
                           { "Petrov F.L.\0", 2022384, 2, 3},
                           { "Zhilinskiy V.D.\0", 2022152, 2, 2},
                           { "Vermont B.D.\0", 2022567, 5, 5 },
                           { "Ivanov S.D.\0", 2022123, 2, 9} };

    Session session[3] = { {2022152, {2, 10, 10, 10}},
                           {2022123, {4, 6, 7, 8}},
                           {2022378, {2, 3, 9, 7} } };

    int count = 0;
    int countN = 0;
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 3; j++) {
            if (student[i].studak == session[j].studak) {
                countN++;
            }
        }
        if (countN == 0) {
            cout << "Course: " << student[i].course << ", group: " << student[i].group << ", " << student[i].fio << "; Didn't pass";
            cout << endl;
        }
        countN = 0;
    }
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 3; j++){
            if (student[i].studak == session[j].studak) {
                for (int g = 0; g < 4; g++) {
                    if (session[j].score[g] < 4) {
                        count++;
                    }
                }
            }
        }
        if (count > 0) {
            cout << "Course: " << student[i].course << ", group: " << student[i].group << ", " << student[i].fio << "; Numbers of Arrears: " << count;
            cout << endl;
        }
        count = 0;
    }
    return 0;
}