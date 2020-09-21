/*
1) Добавьте пустой блок поле на страницу (<div tabindex="0"></div>).
2) При клике по стрелкам на клавиатуре он должен перемещаться на 10px вверх, вниз, вправо или влево в зависимости от нажатой клавиши.
*/

"use strict"

alert('Чтобы управлять блоком с промощью стрелочек необходимо нажать на него');

const D = 10;

let keydown = event => {
    let div = document.querySelector('div');
    let top = (parseFloat(div.style.top))? parseFloat(div.style.top) : 0;
    let left = (parseFloat(div.style.left))? parseFloat(div.style.left) : 0;

    if (event.code == 'ArrowUp') div.style.top = top - D + 'px';
    else if (event.code == 'ArrowDown') div.style.top = top + D + 'px';
    else if (event.code == 'ArrowLeft') div.style.left = left - D + 'px';
    else if (event.code == 'ArrowRight') div.style.left = left + D + 'px';
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('div').addEventListener('keydown', keydown);
});
