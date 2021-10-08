const init = () => {

    let form = document.querySelector('form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let id= document.getElementById('searchByID').value;
        fetch(`http://localhost:3000/movies/${id}`)
        .then(res=>res.json())
        .then(data=>{
            const title = document.querySelector('#movieDetails h4');
            const summary = document.querySelector('#movieDetails p');
            title.textContent = data.title;
            summary.textContent = data.summary
        })
        form.reset()
     
    })
  
}

document.addEventListener('DOMContentLoaded', init);