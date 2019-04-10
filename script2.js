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

var MovieTitle = React.createClass ({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        orginal: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('h2', {},this.props.title + ' (' + this.props.orginal + ')')   
        )
    }
});

var MovieDescription = React.createClass ({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)   
        )
    }
});

var MovieImg = React.createClass ({
    propTypes: {
        img: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('img', {src: this.props.img, height: 200})
        )
    }
});


var Movie = React.createClass({
    propTypes: {
      movie: React.PropTypes.object.isRequired
    },
    render: function () {
      return (
        React.createElement('li', {src: this.props.movie.id},
          React.createElement(MovieTitle, {title: this.props.movie.title, orginal: this.props.movie.orginal}),
          React.createElement(MovieDescription, {desc: this.props.movie.desc}),
          React.createElement(MovieImg, {img: this.props.movie.img})
        )
      )
    }
  });
  
  var moviesList = movies.map(function (movie) {
    return React.createElement(Movie, {key: movie.id, movie: movie})
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesList)
);

ReactDOM.render(element, document.getElementById('app'));






