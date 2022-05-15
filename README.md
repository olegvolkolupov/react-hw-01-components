https://olegvolkolupov.github.io/react-hw-01-components/

Создать отдельный репозиторий react-hw-01-components. Отдельный под каждую задачу
Компоненты всех заданий рендерятся на одной странице, внутри общего контнейра - корневого компонента <App>.
При сдаче домашней работы есть ссылка на репозиторий с исходным кодом проекта.
В шапке репозитория есть ссылка на живую страницу на GitHub pages.
При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и предупреждений.
Для каждого компонента есть отдельная папка с файлом React-компонента и файлом стилей.
Для компонентов описаны propTypes, и, где необходимо, defaultProps.
Все что компонент ожидает в виде пропсов, передается ему при вызове.
Имена компонентов понятные, описательные.
JS-код чистый и понятный, используется Prettier.
Стилизация делается только SASS, CSS-модулями или Styled Components, поэтому классы в результирующем DOM могут отличаться от примеров.
Достаточно базовой стилизации приложения, в первую очередь оно должно работать, а уже потом быть красивое. Выделяй 20% времени на CSS и 80% на JS.

Профиль социальной сети

Необходимо создать компонент <Profile>, с помощью которого мы могли бы отображать информацию о пользователе социальной сети.
Данные о пользователе лежат в файле user.json.

user.json
{
  "name": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
}

------------------------------
Задание 1.
Описание компонента

Компонент должен принимать несколько пропсов с информацией о пользователе:
name — имя пользователя
tag — тег в социальной сети без @
location — город и страна
avatar — url на изображение
stats — объект с информацией об активности

Компонент должен создавать DOM элемент следующей структуры.

<div class="profile">
  <div class="description">
    <img
      src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>  
  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>

Пример использования

import user from 'путь/к/user.json;

<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

-------------------------------
Задание 2
Секция статистики

Создать компонет <Statistics>, который бы отображал статистику по переданным пропам. К примеру загрузки в облако по типу файлов, посещение веб-страницы пользователями разных стран, финансовые траты и т. п. 

Данные о статистике лежат в файле statistical-data.json.

statistical-data.json
[
  { "id": "id-1", "label": ".docx", "percentage": 22 },
  { "id": "id-2", "label": ".pdf", "percentage": 4 },
  { "id": "id-3", "label": ".mp3", "percentage": 17 },
  { "id": "id-4", "label": ".psd", "percentage": 47 },
  { "id": "id-5", "label": ".pdf", "percentage": 10 }
]

Описание компонента

Компонент должен принимать два пропа title и stats, в которых указывается заголовок и объект статистики.
title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.

Компонент должен создавать DOM элемент следующей структуры.

<section class="statistics">
  <h2 class="title">Upload stats</h2>  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>

Пример использования

import statisticalData from '/путь/к/statistical-data.json';

<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;

---------------------
Задание 3
Список друзей

Необходимо создать компонент <FriendList>, с помощью которого мы могли бы отображать информацию о друзьях пользователя. 

Информация о друзьях хранится в файле friends.json.

friends.json
[
  {
    "avatar": "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
    "name": "Vova",
    "isOnline": true,
    "id": 1812
  },
  {
    "avatar": "https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg",
    "name": "Sara",
    "isOnline": false,
    "id": 1137
  },
  {
    "avatar": "https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg",
    "name": "Mike",
    "isOnline": true,
    "id": 1213
  },
  {
    "avatar": "https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg",
    "name": "Bob",
    "isOnline": true,
    "id": 1714
  },
  {
    "avatar": "https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg",
    "name": "Sveta",
    "isOnline": false,
    "id": 1284
  }
]

===	Описание компонента FriendList ===

Компонент должен принимать один проп friends - массив объектов друзей.

Компонент должен создавать DOM следующей структуры.

<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве -->
</ul>

=== Описание компонента FriendListItem ===

Компонент должен принимать несколько пропов:
avatar - ссылка на аватар
name - имя друга
isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.

Компонент должен создавать DOM следующей структуры.

<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="" width="48" />
  <p class="name"></p>
</li>

=== Пример использования ===

import friends from 'путь/к/friends.json';

<FriendList friends={friends} />,

----------------------------
	Задание 4.
История транзакций

Необходимо создать компонент истории транзакций в личном кабинете интернет банка.

Данные для списка доступны в формате JSON в файле transactions.json.
Это массив объектов, каждый объект описывает одну транзакцию со следующими свойствами:
id — уникальный идентификатор транзакции
type — тип транзакции
amount - сумма транзакции
currency - тип валюты

=== Описание компонента ===

Необходимо создать компонент <TransactionHistory> принимающий один проп items - массив объектов транзакций из transactions.json. 
Компонент создает разметку таблицы. Каждая транзакция это строка таблицы. 

В примере приведена разметка двух транзакций.

<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>  
  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

=== Пример использования ===

import transactions from 'путь/к/transactions.json';

<TransactionHistory items={transactions} />;

transactions.json
[
  {
    "id": "1e0700a2-5183-4291-85cc-2065a036a683",
    "type": "invoice",
    "amount": "964.82",
    "currency": "LRD"
  },
  {
    "id": "a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",
    "type": "payment",
    "amount": "686.50",
    "currency": "WST"
  },
  {
    "id": "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
    "type": "invoice",
    "amount": "828.62",
    "currency": "UGX"
  },
  {
    "id": "ea8ed3dc-2b68-4a53-905a-53ecb0adef33",
    "type": "withdrawal",
    "amount": "527.80",
    "currency": "ALL"
  },
  {
    "id": "ea76146a-0b00-4b80-bc02-a8c822176712",
    "type": "withdrawal",
    "amount": "371.43",
    "currency": "MUR"
  },
  {
    "id": "63ca02f9-d637-46b5-9237-f3b24425e029",
    "type": "payment",
    "amount": "862.44",
    "currency": "AUD"
  },
  {
    "id": "ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",
    "type": "withdrawal",
    "amount": "907.00",
    "currency": "GEL"
  },
  {
    "id": "6013bad0-750c-4691-8bc2-d8f2b43969c4",
    "type": "withdrawal",
    "amount": "352.52",
    "currency": "UGX"
  },
  {
    "id": "252c7be4-8b06-4fa7-8d42-61fb835b70d5",
    "type": "payment",
    "amount": "388.98",
    "currency": "TOP"
  },
  {
    "id": "4eaab41b-b967-40ac-82ed-85fc66f646f1",
    "type": "deposit",
    "amount": "103.10",
    "currency": "BWP"
  },
  {
    "id": "9648a350-8469-42d5-8bf3-18090de5fe67",
    "type": "withdrawal",
    "amount": "322.32",
    "currency": "MRO"
  },
  {
    "id": "9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",
    "type": "invoice",
    "amount": "14.79",
    "currency": "PYG"
  },
  {
    "id": "43ef232c-80e9-4d6f-b48a-b22405620de3",
    "type": "payment",
    "amount": "904.86",
    "currency": "CHF"
  },
  {
    "id": "5161682e-e620-4019-ab0a-24ceb10fbd20",
    "type": "withdrawal",
    "amount": "307.08",
    "currency": "NOK"
  },
  {
    "id": "7b119d71-42e6-4c42-a141-6818b07bb9ff",
    "type": "invoice",
    "amount": "275.07",
    "currency": "AWG"
  },
  {
    "id": "a4f65722-65c4-4c28-b1f4-b8ed988bb205",
    "type": "deposit",
    "amount": "213.10",
    "currency": "STD"
  },
  {
    "id": "c6e5784b-0ca3-48d6-86e5-b5128af5a523",
    "type": "invoice",
    "amount": "116.11",
    "currency": "CUP CUC"
  },
  {
    "id": "c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd",
    "type": "invoice",
    "amount": "878.67",
    "currency": "HKD"
  },
  {
    "id": "a4a98b0e-b22c-438b-9f83-de2df52110c8",
    "type": "invoice",
    "amount": "725.03",
    "currency": "UYU UYI"
  },
  {
    "id": "b39bfa7a-0166-4c47-94d6-87d20590f746",
    "type": "payment",
    "amount": "405.45",
    "currency": "MDL"
  }
]
