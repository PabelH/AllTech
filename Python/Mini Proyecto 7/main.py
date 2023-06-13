import requests
from bs4 import BeautifulSoup


def get_img_link(url):
    answer = requests.get(url)
    if answer.status_code == 200:
        soup = BeautifulSoup(answer.content, 'html.parser')
        etiquetas_img = soup.find_all('img')
        enlaces_img = [img['src'] for img in etiquetas_img if 'src' in img.attrs]
        return enlaces_img
    else:
        print('Error al obtener el contenido de la página:', answer.status_code)


page_url = input("Introduce la URL de la página: ")

image_link = get_img_link(page_url)

for enlace in image_link:
    print(enlace)
