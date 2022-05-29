const list = [
    {
        id: 1,
        title: 'some title1',
        img: 'https://coldsteels.ru/image/cache/catalog/Produkts/cold-steel-cs-49lrt-recon-tanto-nozh-s-fiksirovannyim-klinkom-sk-5-09-1500x1500.webp',
        text: 'lorem10'
    },
    {
        id: 2,
        title: 'some title2',
        img: 'https://coldsteels.ru/image/cache/catalog/Produkts/nozh-cold-steel-luzon-large-cs-20nqx-01-1500x1500.webp',
        text: 'большой нож'
    },
    {
        id: 3,
        title: 'some title3',
        img: 'https://coldsteels.ru/image/cache/catalog/Produkts/pocket-bushman-nozh-skladnoj-4116-01-1500x1500.webp',
        text: 'большой нож'
    },
    {
        id: 4,
        title: 'some title4',
        img: 'https://coldsteels.ru/image/cache/catalog/Produkts/nozh-cold-steel-spartan-cs-21st-01-1500x1500.webp',
        text: 'большой нож'
    },
    {
        id: 5,
        title: 'some title5',
        img: 'https://coldsteels.ru/image/cache/catalog/Produkts/nozh-cold-steel-mini-leatherneck-clip-point-cs-39lsab.html-0-1500x1500.webp',
        text: 'большой нож'
    },
    {
        id: 6,
        title: 'some title6',
        img: 'https://coldsteels.ru/image/cache/catalog/Produkts/nozh-cold-steel-mini-leatherneck-tanto-cs-39lsaa.html-0-1500x1500.webp',
        text: 'большой нож'
    },
]
const wrap = document.querySelector('.content__wrapper')

list.forEach(function (item, i, list) {
    contentItem = document.createElement('div')
        contentItem.className = "content__item"
        contentItem.dataset.id = item.id
            contentItem.innerHTML =
                `<h3>${item.title}</h3>
                <img src=${item.img} alt="" class="pic">
                <span>
                    ${item.text}
                 </span>
                <button>
                    klick me
                </button>`
    wrap.append(contentItem)


})

document.addEventListener('click', event=> {
    $.openModal(event)
    $.destroyModal(event)
    
})





