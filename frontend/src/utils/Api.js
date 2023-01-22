class Api {
  constructor(config) {
    this._url = config.url;
  }

  //Загрузка карточек с сервера
  // сработает при GET-запросе на URL '/cards' - возвращает все карточки
  getAllCards() {
    const token = localStorage.getItem('jwt')
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }

  //Добавление новой карточки
  // сработает при POST-запросе на URL '/cards' - добавляет карточку
  addNewCard(data) {
    const token = localStorage.getItem('jwt')
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }
  //Удаление карточки
  removeCard(idCard) {
    const token = localStorage.getItem('jwt')
    return fetch(`${this._url}/cards/${idCard}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }

  //Установка и снятие лайка (PUT,DELETE) https://localhost:3000/cards/cardId/likes
  changeLikeCardStatus(idCard, isLiked) {
    const token = localStorage.getItem('jwt')
    const addLike = { 
      method: "PUT", 
      headers: {authorization: `Bearer ${token}`}
    };
    const deleteLike = { 
      method: "DELETE", 
      headers: {authorization: `Bearer ${token}`}
    };

    return fetch(
      `${this._url}/cards/${idCard}/likes`,
      isLiked ? deleteLike : addLike
    ).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }

  //Загрузка информации о пользователе с сервера
  // сработает при GET-запросе на URL '/users/me' - получить информацию о текущем пользователе
  getUserInfo() {
    const token = localStorage.getItem('jwt')
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }

  //Обновление данных пользователя (name, about)
  // сработает при PATCH-запросе на URL '/users/me' - обновляет профиль
  setUserInfo(data) {
    const token = localStorage.getItem('jwt')
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }

  //Обновление аватара пользователя (avatar)
  // сработает при PATCH-запросе на URL '/users/me/avatar' - обновляет аватар
  setUserAvatar(data) {
    const token = localStorage.getItem('jwt')
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }
}

//Прямо внутри api.js создайте экземпляр класса Api 
//и экспортируйте этот экземпляр вместо самого класса.
const api = new Api({
 /* url: "http://localhost:3000",*/
 url: "https://api.mesto.romanb10.nomoredomains.rocks",
});

export default api;
