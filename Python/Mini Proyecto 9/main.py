import requests


def get_movie_rating(movie_title):
    api_key = 'your_api_key'  # Reemplaza con tu propia API key
    url = f'http://www.omdbapi.com/?apikey={api_key}&t={movie_title}&v=1'

    response = requests.get(url)
    data = response.json()

    if data['Response'] == 'True':
        rating = data['imdbRating']
        return rating
    else:
        return None


def main():
    movie_title = input('Ingrese el título de la película: ')
    rating = get_movie_rating(movie_title)

    if rating is not None:
        print(f'El rating de {movie_title} es: {rating}')
    else:
        print('No se encontró el rating de la película.')


if __name__ == '__main__':
    main()
