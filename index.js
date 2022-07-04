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
    message.textContent = `${inputField} Added`
    
    // resets input field to empty
    inputField = ''
    document.querySelector('input').value = ''
    
    // delete Movie from list
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
   revealMessage()
    
};

const deleteMovie = (e) => {
    message.textContent = `${e.target.previousElementSibling.textContent} Deleted`
    e.target.parentNode.remove()
    revealMessage()
};

const crossOffMovie = (e) => {
    e.target.classList.toggle('checked')
    // console.log(e.target.textContent)
    if(e.target.classList.contains('checked')){
        message.textContent = `${e.target.textContent} Watched!`
    }else{
        message.textContent = `Watching ${e.target.textContent} again? It must be a good one!`
    }
    revealMessage()
};

const revealMessage = () => {
    document.getElementById('message').className = ''
    setTimeout(() => {
        document.getElementById('message').className = 'hide'
    }, 2000)
}

form.addEventListener('submit', addMovie);

