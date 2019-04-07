// deklaruję tablicę z filmami
var movies = [
    {
        // unikalne ID jest konieczne do prawidłowej identyfikacji przez React (bez tego też zadziałą, ale przy duzej bazie będzie spadek wydajności)
        id: 1,
        title: 'Pluję na Twój grób',
        orginal: 'I Spit on Your Grave',
        desc: 'film o zemście',
        img: './images/IsplitOnYourGrave.jpg'
    },
    {
        id: 2,
        title: 'Bambi',
        orginal: 'Bambi',
        desc: 'Film o naćpanym jelonku',
        img: './images/bambi.jpg'

    },
    {
        id: 3,
        title: 'Plan dziewięć z kosmosu',
        orginal: 'Plan 9 from Outer Space',
        desc: 'Filozoficzna rozprawa o przyszłości gatunku',
        img: './images/plan9.jpg'

    }
  ];

// metoda 'map' przechodzi przez każdy element listy
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title + ' (' + movie.orginal + ')'),
        React.createElement('img', {src: movie.img, height: 200}),
        React.createElement('p', {}, movie.desc)
      );
});

// elementy z popprzedniego kroku wrzucam do środka listy
var element =
    React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

// generuję DOM z w.w elementów  
ReactDOM.render(element, document.getElementById('app'));