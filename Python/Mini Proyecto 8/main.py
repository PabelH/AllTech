menu_options = {
    "1": "Ver saldo",
    "2": "Recargar",
    "3": "Transferir",
    "4": "Salir"
}

saldo = 100


def show_menu() -> str:
    print("Menú:")
    for key, value in menu_options.items():
        print(f"{key}. {value}")
    option = input("Seleccione una opción: ")
    return option


def ver_saldo():
    print(f"\nSu saldo es de ${saldo}\n")


def recargar():
    global saldo
    print("Ingrese el monto a recargar:")
    monto = int(input())
    saldo += monto
    print(f"Recargando ${monto}...")
    print(f"\nNuevo saldo: ${saldo}\n")


def transferir():
    global saldo
    print("Ingrese el número de teléfono:")
    numero = input()
    print("Ingrese el monto a transferir:")
    monto = int(input())
    if monto <= saldo:
        saldo -= monto
        print(f"Transferencia de ${monto} al número {numero} realizada")
        print(f"\nNuevo saldo: ${saldo}\n")
    else:
        print("Saldo insuficiente. No se pudo realizar la transferencia.")


def main():
    option = show_menu()
    while option != "4":
        if option == "1":
            ver_saldo()
        elif option == "2":
            recargar()
        elif option == "3":
            transferir()
        else:
            print("Opción inválida. Por favor, seleccione nuevamente.")
        option = show_menu()


if __name__ == "__main__":
    main()
