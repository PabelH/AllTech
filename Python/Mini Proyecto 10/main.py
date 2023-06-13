import random


def show_board(intentos, letras_adivinadas, pista):
    tablero = [
        '''
        +---+
            |
            |
            |
           ===''',
        '''
        +---+
        O   |
            |
            |
           ===''',
        '''
        +---+
        O   |
        |   |
            |
           ===''',
        '''
        +---+
        O   |
       /|   |
            |
           ===''',
        '''
        +---+
        O   |
       /|\  |
            |
           ===''',
        '''
        +---+
        O   |
       /|\  |
       /    |
           ===''',
        '''
        +---+
        O   |
       /|\  |
       / \  |
           ==='''
    ]
    print(tablero[intentos])
    print("Letras usadas:", ', '.join(letras_adivinadas))
    print("Intentos restantes:", 6 - intentos)
    print("Pista:", pista)


def play():
    palabras = ['python', 'ornito', 'computadora', 'juego', 'digitalnao']
    palabra = random.choice(palabras)
    letras_adivinadas = []
    intentos = 0
    pista = palabra[-1]

    while intentos < 6:
        show_board(intentos, letras_adivinadas, pista)
        print()

        for letra in palabra:
            if letra in letras_adivinadas:
                print(letra, end=' ')
            else:
                print('_', end=' ')

        print()
        print()

        if set(palabra).issubset(set(letras_adivinadas)):
            print('¡Felicidades! Has adivinado la palabra.')
            break

        letra_ingresada = input('Ingresa una letra: ').lower()

        if len(letra_ingresada) != 1:
            print('Por favor, ingresa solo una letra.')
            continue

        if letra_ingresada in letras_adivinadas:
            print('Ya has ingresado esa letra.')
            continue

        letras_adivinadas.append(letra_ingresada)

        if letra_ingresada not in palabra:
            intentos += 1

    else:
        show_board(intentos, letras_adivinadas, pista)
        print()
        print('¡Oh no! Has perdido. La palabra correcta era:', palabra)


play()
