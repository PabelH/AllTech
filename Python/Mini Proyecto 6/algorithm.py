def num_to_words(num):
    unidades = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
    especiales = {10: "diez", 11: "once", 12: "doce", 13: "trece", 14: "catorce", 15: "quince",
                  20: "veinte", 30: "treinta", 40: "cuarenta", 50: "cincuenta", 60: "sesenta",
                  70: "setenta", 80: "ochenta", 90: "noventa", 100: "cien", 200: "doscientos",
                  300: "trescientos", 400: "cuatrocientos", 500: "quinientos", 600: "seiscientos",
                  700: "setecientos", 800: "ochocientos", 900: "novecientos"}

    if 0 <= num <= 9:
        return unidades[num]
    elif num in especiales:
        return especiales[num]
    elif 16 <= num <= 19:
        return "dieci" + num_to_words(num - 10)
    elif 21 <= num <= 29:
        return "veinti" + num_to_words(num - 20)
    elif 30 <= num <= 99:
        decena = int(num / 10) * 10
        unidad = num % 10
        if unidad == 0:
            return especiales[decena]
        else:
            return especiales[decena] + " y " + num_to_words(unidad)
    elif 100 <= num <= 999:
        centena = int(num / 100) * 100
        resto = num % 100
        if resto == 0:
            return especiales[centena]
        else:
            if centena == 100:
                return "ciento " + num_to_words(resto)
            else:
                return especiales[centena] + " " + num_to_words(resto)
    elif 1000 <= num <= 9999:
        millar = int(num / 1000)
        resto = num % 1000
        if resto == 0:
            return num_to_words(millar) + " mil"
        else:
            return num_to_words(millar) + " mil " + num_to_words(resto)
    else:
        return "Número fuera de rango permitido"


numero = int(input("Ingrese un número entre 0 y 9999: "))
palabras = num_to_words(numero)
print(palabras)
