

$.checkData = function() {
    console.log(' data checked')
}

// создать механизм открытия модального окна.

$.renderModal = function(item) {
    content = list.find(obj => obj.id === item)
   $modal = document.createElement('div');
   $modal.className = 'modal__wrapper'
   $modal.innerHTML =
   `<div class = "modal">
        <h1>${content.title}</h1>
        <button>click</button>
        <p>${content.text}</p>
   </div>`
  

    document.body.append($modal)
}

$.openModal = function(event) {
    if(event.target.className === 'content__item') {
        item = +event.target.dataset.id
        $.renderModal(item)

    }
}

$.destroyModal = function(event) {
    if(event.target.className === 'modal__wrapper' ) {
       $modal.remove()
    }
}





// Отрисовать модальное окно
// получить данные в модальное окно