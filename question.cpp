#include <iostream>
#include <vector>
#include <string>
using namespace std;

struct Student {
    int id;
    string name;
    int age;
    string course;
};

void addStudent(vector<Student>& students) {
    Student s;

    cout << "Enter ID: ";
    cin >> s.id;

    cout << "Enter Name: ";
    cin.ignore();
    getline(cin, s.name);

    cout << "Enter Age: ";
    cin >> s.age;

    cout << "Enter Course: ";
    cin.ignore();
    getline(cin, s.course);

    students.push_back(s);
    cout << "Student added successfully!\n";
}

void displayStudents(const vector<Student>& students) {
    if (students.empty()) {
        cout << "No students in the list.\n";
        return;
    }

    cout << "\nStudent List:\n";
    cout << "-----------------------------------\n";

    for (int i = 0; i < students.size(); i++) {
        cout << "ID: " << students[i].id << endl;
        cout << "Name: " << students[i].name << endl;
        cout << "Age: " << students[i].age << endl;
        cout << "Course: " << students[i].course << endl;
        cout << "-----------------------------------\n";
    }
}

void removeStudent(vector<Student>& students) {
    int id;
    cout << "Enter ID to remove: ";
    cin >> id;

    for (int i = 0; i < students.size(); i++) {
        if (students[i].id == id) {
            students.erase(students.begin() + i);
            cout << "Student removed successfully!\n";
            return;
        }
    }

    cout << "Student not found.\n";
}

void searchStudent(const vector<Student>& students) {
    int id;
    cout << "Enter ID to search: ";
    cin >> id;

    for (int i = 0; i < students.size(); i++) {
        if (students[i].id == id) {
            cout << "\nStudent Found:\n";
            cout << "ID: " << students[i].id << endl;
            cout << "Name: " << students[i].name << endl;
            cout << "Age: " << students[i].age << endl;
            cout << "Course: " << students[i].course << endl;
            return;
        }
    }

    cout << "Student not found.\n";
}

int main() {
    vector<Student> students;
    int choice;

    do {
        cout << "\n--- Student Management System ---\n";
        cout << "1. Add Student\n";
        cout << "2. Display Students\n";
        cout << "3. Remove Student by ID\n";
        cout << "4. Search Student by ID\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                addStudent(students);
                break;
            case 2:
                displayStudents(students);
                break;
            case 3:
                removeStudent(students);
                break;
            case 4:
                searchStudent(students);
                break;
            case 5:
                cout << "Exiting program...\n";
                break;
            default:
                cout << "Invalid choice! Try again.\n";
        }
    } while (choice != 5);

    return 0;
}