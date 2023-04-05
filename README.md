# Заключительная проектная работа учебного курса Яндекс.Практикум: "react-mesto-api-full" (спринт 15).
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположите в директории `backend/`, а фронтенд - в `frontend/`. 

### Обзор

* Интро
* Функциональность
* Ссылка на сайт
* Сервер
* Стэк
* Ссылка на репозиторий
* Применяемые технологии
* Статус выполнения проекта
* Screenshot


**Интро**
* <p align="left"> Проект спроектирован на «Реакт» <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="20" height="20"/> </a>, представлет собой адаптивный одностраничный сайт о различных локациях с возможностью актуализации контента, созданный по макету графического редактора Figma.<a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="20" height="20"/> </a></p>
* Сервис позволяет добалять и редактировать данные профиля, загружать карточки с фотогрфиями любимых мест в неограниченном количестве, отмечать понравившиеся лайком, а также удалять уже поднадоевшие.

**Функциональность**
  - Реализованы регистрация и авторизация пользователя
     - Вся функциональность приложения доступна только авторизованным пользователям по роуту «/»
     - Реализованы модальные окна,которые информируют пользователя об успешной (или не очень) регистрации.
  - Реализовано 4 диалоговых окна (PopUp)
      - Редактирование имени и информации о себе, вызывается нажатием на кнопку (необходимо заполнить поле «Имя» и «О себе»)
      - Форма добавления карточки, вызывается нажатием на кнопку «+»(необходимо заполнить поле «Название» и добавить ссылку на картинку в поле «Ссылка на картинку»)
      - Открытие попапа с картинкой, вызывается нажатием на картинку
      - Обновление аватара пользователя, вызывается нажатием на иконку редактирования при наведении курсора на сам аватар ( необходимо добавить ссылку на аватар в поле «Ссылка на картинку»)
  - Плавное открытие и закрытие попапов
  - Закрытие попапов происходит нажатием на клавишу Esc.
  - При переполнении блоков текстовым содержимым,проставляется многоточие и текст обрезается
  - Реализована возможность установки лайков карточкам (можно лайкнуть любую карточку)
  - Отображение количества лайков карточки (на каждой карточке написано, сколько у неё лайков)
  - Реализована возможность удаления карточек(если карточка создана не вами, на ней нет иконки удаления)
  - Реализовано подключение проекта к серверу
      - Информация о пользователе подгружаться с сервера
      - Начальные карточки подгружаться с сервера
      - Отредактированные данные профиля сохраняются на сервере
      - Добавление новой карточки, удаление происходит с обновленнием данных на сервере

**Сервер можно найти ↓**

* `публичный IP-адрес сервера ` — 158.160.53.20
* `Frontend` — [https://mesto.romanb10.nomoredomains.club](https://mesto.romanb10.nomoredomains.club)
* `Backend` — [https://api.mesto.romanb10.nomoredomains.rocks](https://api.mesto.romanb10.nomoredomains.rocks)

**Стэк**

  - *Frontend:* 
    ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

  - *Backend:* 
    ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) <a href="https://www.mongoosejs.com/"><img src="https://github.com/jaumereg/img-logos/blob/master/logos/mongoose.png" width= "128px"></a>

  - *Database:* 
    ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)


**Ссылка на репозиторий**
* [https://github.com/RomanB10/react-mesto-api-full](https://github.com/RomanB10/react-mesto-api-full)
* [Сайт](https://mesto.romanb10.nomoredomains.club)

**Применяемые технологии**
* Grid Layout
* Flex-box верстка
* Позиционирование
* Медиазапросы
* Организация файловой структуры по Nested БЭМ
* React
* Роуты
* HOC
* Использование компонентного и декларативного подходов
* Используются управляемые компоненты
* Функциональные компоненты
* «React»-хуки

**Статус выполнения проекта**
* Закончен

**Screenshot**
- `signup`- регистрация
  ![image](https://user-images.githubusercontent.com/105459169/230093365-629b2389-9e13-469f-8e10-6779cae16fc7.png)
- `signin`- авторизация
  ![image](https://user-images.githubusercontent.com/105459169/230093571-d78faa18-8a0e-494c-9b85-4fd176b67f78.png)
- `/`- главная страница
  ![image](https://user-images.githubusercontent.com/105459169/230091296-5699dd29-5eb8-4961-84ae-a5269b683871.png)
- Попап обновления аватара,
  *для смены аватара необходимо кликнуть по нему*
  ![image](https://user-images.githubusercontent.com/105459169/230091942-6e77a8aa-2b65-4078-8e9d-ea3df379d790.png)
- Попап редактирования профиля,
  *для редактирования профиля необходимо кликнуть* ![image](https://user-images.githubusercontent.com/105459169/230097338-e9fc9b1e-6999-4abb-bd2b-ae2781c4dfa9.png)
  ![image](https://user-images.githubusercontent.com/105459169/230092296-0afb8b94-7d6f-43c1-8043-f7deee377ebe.png)
- Попап добавления новой карточки
  *для добавления новой карточки необходимо кликнуть*, ![image](https://user-images.githubusercontent.com/105459169/230097610-a71c7f56-b271-4956-86e8-e4ca4b1af74f.png)
  ![image](https://user-images.githubusercontent.com/105459169/230092538-4f43e7e4-048e-4559-8e25-97c9ecc0010c.png)
- Попап открытия картинки большого размера,
  *для открытия большой картинки необходимо кликнуть по карточке с картинкой*
  ![image](https://user-images.githubusercontent.com/105459169/230092897-a4dcff22-ea0a-413d-b581-f5e9ea083102.png)
- Ошибка авторизации
  ![image](https://user-images.githubusercontent.com/105459169/230098256-390e3205-ad4f-4e9d-b3fc-92b8b8df04b4.png)
- Успешная регистрация
  ![image](https://user-images.githubusercontent.com/105459169/230093985-162f499f-7b43-44d4-a18f-ba1be1142319.png)

