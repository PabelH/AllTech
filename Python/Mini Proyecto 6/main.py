from num2words import num2words

num = int(input('Ingrese un número: '))
resultado = num2words(num, lang='es')
print(resultado)
