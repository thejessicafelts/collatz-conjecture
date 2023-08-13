#include <iostream>

void collatzConjecture(int n, int userInput) {
    int steps = 0;
    if (n != 1) {
        std::cout << "\nUser Input: " << userInput << ".\n\n" << n << " is not equal to 1.\nBegin calculation...\n";
    }
    while (n != 1) {
        if (n % 2 == 0) {
            int nextNumber = n / 2;
            if (nextNumber == 1) {
                std::cout << "\nStep " << (steps + 1) << "\n--------\n"
                          << n << " is even.\n(" << n << " / 2) = " << nextNumber
                          << ".\n" << nextNumber << " is equal to 1.\nCalculation complete.\n";
            } else {
                std::cout << "\nStep " << (steps + 1) << "\n--------\n"
                          << n << " is even.\n(" << n << " / 2) = " << nextNumber
                          << ".\n" << nextNumber << " is not equal to 1.\nContinue calculation...\n";
            }
            n = nextNumber;
        } else {
            int nextNumber = (n * 3) + 1;
            if (nextNumber == 1) {
                std::cout << "\nStep " << (steps + 1) << "\n--------\n"
                          << n << " is odd.\n((" << n << " * 3) + 1) = " << nextNumber
                          << ".\n" << nextNumber << " is equal to 1.\nCalculation complete.\n";
            } else {
                std::cout << "\nStep " << (steps + 1) << "\n--------\n"
                          << n << " is odd.\n((" << n << " * 3) + 1) = " << nextNumber
                          << ".\n" << nextNumber << " is not equal to 1.\nContinue calculation...\n";
            }
            n = nextNumber;
        }
        steps++;
    }

    std::cout << "\n" << userInput << " reached 1 in " << steps << " steps.\n";
}

int main() {
    int userInput;

    std::cout << "Enter a Positive Whole Number: ";
    std::cin >> userInput;

    if (std::cin.fail() || userInput <= 0) {
        std::cout << "Please enter a Positive Whole Number.\n";
    } else {
        collatzConjecture(userInput, userInput);
    }

    return 0;
}