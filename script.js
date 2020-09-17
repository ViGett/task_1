/*
1) Создайте класс комментариев с полями: имя, дата и время, текст. Примечание: разумеется, предварительно стоит создать массивы (либо объекты Set) для случайных данных по имени и тексту. Дату же можно генерировать просто с помощью Math.random().
2) Сгенерируйте 10 случайных комментариев и запишите их все в массив.
3) Выведите на HTML-страницу все сгенерированные комментарии в формате: <div><span class="date">Дата и время</span> <span class="name"> >Имя</span> пишет: <span class="text">Текст</span></div>.
Примечание: разумеется, предварительно стоит создать массивы (либо объекты Set) для случайных данных по имени и тексту. Дату же можно генерировать просто с помощью Math.random().
*/

"use strict";

class Comment {
    constructor(name, date, text) {
        this.name = name;
        this.date = date;
        this.text = text;
    }
    static names = ['Дмитрий', 'Константин', 'Владилсав', 'Надежеда', 'Анастасия', 'Андрей', 'Николай', 'Любовь', 'Владимир', 'Виктория'];
    static texts = ['Отличная работа!!', 'Жду продолжения!', 'Хорошо', 'Плохо', 'Мало интересного материала', 'Люблю ваши статьи'];

    static getRandomName() {
        return Comment.names[Math.floor(Math.random() * Comment.names.length)];
    }

    static getRandomText() {
        return Comment.texts[Math.floor(Math.random() * Comment.texts.length)];
    }
}


let comments = [];
let count = 18;

for (let i = 0; i < count; i++) {
    comments.push(new Comment(Comment.getRandomName(), new Date(Math.random() * 2000000000000), Comment.getRandomText()));
}

for (let com of comments) {
    let template = document.querySelector('#comment-template').cloneNode(true);
    template.removeAttribute('id');
    template.querySelector('.name').innerHTML = com.name;
    template.querySelector('.date').innerHTML = com.date;
    template.querySelector('.text').innerHTML = com.text;
    document.body.append(template);
}
