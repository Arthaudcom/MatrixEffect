#include <iostream>
#include <windows.h>

int Modulus(int iN, int iMod) {
    int iQ = (iN / iMod);
    return iN - (iQ * iMod);
}

char GetChar(int iGenerator, char cBase, int iRange) {
    return (cBase + Modulus(iGenerator, iRange));
}

int main() {
    // Code couleur
    HANDLE hConsole;
    hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    SetConsoleTextAttribute(hConsole, 2);

    char caRow[80];
    int j = 7;
    int k = 2;
    int l = 5;
    int m = 1;
    while (true) {
        // Afficher une ligne aléatoire de caractères
        for (int i = 0; i < 80; ++i) {
            if (caRow[i] != ' ') {
                caRow[i] = GetChar(j + i * i, 96, 96);
                if (((i * i + k) % 71) == 0) {
                    SetConsoleTextAttribute(hConsole, 7); // Blanc
                } else {
                    SetConsoleTextAttribute(hConsole, 2); // Vert
                }
            }
            std::cout << caRow[i];

            int numSpaces = std::rand() % 2 + 1; // Générer un nombre aléatoire entre 1 et 10 pour le nombre d'espaces
            for (int s = 0; s < numSpaces; ++s) {
                std::cout << ' ';
            }

            SetConsoleTextAttribute(hConsole, 2); // Rétablir la couleur verte
        }
        j = (j + 31);
        k = (k + 17);
        l = (l + 47);
        m = (m + 67);
        caRow[Modulus(j, 80)] = '-';
        caRow[Modulus(k, 80)] = ' ';
        caRow[Modulus(l, 80)] = '-';
        caRow[Modulus(m, 80)] = ' ';
        // Délai
        Sleep(10);
    }
    return 0;
}