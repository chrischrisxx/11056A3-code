// Introduction to Works
let items = [
  {
    img: 'images/1.png',
    title: "'7 Designers'",
    desc: `'7 Designers' was an important early Australian design exhibition held in the David Jones
    gallery, Sydney from 30 September - 15 October, 1948. It included displays of 'pottery,
    advertising and industrial design, furniture, costume, ornaments, paintings, fabrics and
    silverware' by James Linton, Frances Burke, Gordon Andrews, Steven Kalmar, Richards and
    Buchanan, Allan Lowe and Professor George Korody.`
  },
  {
    img: 'images/2.png',
    title: "'Gazelle' chair",
    desc: `This graceful three legged 'Gazelle' chair, made of plywood, cast aluminium, steel and wool,
    is a slightly modified version of a chair Andrews designed during his time as design
    consultant to the Italian firm Olivetti. It featured in the company's showroom in London
    (1954) and in Sydney (1956). By 1957, the original four wooden legs were replaced by three
    in cast aluminium. Few examples survive.`
  },
  {
    img: 'images/3.png',
    title: "'Composition' painting",
    desc: `This was the first time Andrews' furniture had been displayed as part of his professional
    practice. One piece, the high-backed rocker was later published in The Architectural Review
    journal (UK) in 1951.`
  },
  {
    img: 'images/4.png',
    title: "'Spider chair'",
    desc: `Chair frame, 'Spider chair', steel, Gordon Andrews, Sydney, Australia, 1961`
  },
  {
    img: 'images/5.png',
    title: "Photograph",
    desc: `Photograph, black and white, 'Entrance vestibule at old church in France Graffiti', photograph
    by Gordon Andrews, France, 1950s`
  },
  {
    img: 'images/6.png',
    title: "'Rondo chair'",
    desc: `Chair, 'Rondo', aluminium / wood / fibreglass / fabric, Gordon Andrews, Australia, 1956`
  }
]

let list = document.querySelector('.list')
let html = []
for (let i = 0; i < items.length; i++) {
  html.push(`
    <div class="item">
      <div class="img" style="background-image: url(${items[i].img})"></div>
      <div class="mask">
        <p class="title">${items[i].title}</p>
        <p class="desc">${items[i].desc}</p>
      </div>
    </div>
  `)
}
list.innerHTML = html.join('')