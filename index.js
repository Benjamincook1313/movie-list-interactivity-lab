// console.log('Hello world')
let form = document.querySelector('form')
let message  = document.getElementById('message')

const addMovie = (e) => {

    // prevents the form from submiting and rerendering page so that the page can update with new list items
    e.preventDefault()

    // save input value to a variable and create new list item
    let inputField = document.querySelector('input').value
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)
    
    // adding Movie to list
    movieTitle.textContent = inputField
    movie.appendChild(movieTitle)
    document.querySelector('ul').appendChild(movie)
    message.textContent = 'New Movie Added'
    
    // resets input field to empty
    inputField = ''
    document.querySelector('input').value = ''
    
    // delete Movie from list
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    // alerts user of action
    
};

const deleteMovie = (e) => {
    e.target.parentNode.remove()
    message.textContent = 'Movie Deleted'
};

const crossOffMovie = (e) => {
    e.target.classList.toggle('checked')
    if(e.target.classList.contains('checked')){
        message.textContent = 'Movie Watched!'
    }else{
        message.textContent = 'Watching the movie again? It must be a good one!'
    }
};

form.addEventListener('submit', addMovie);

