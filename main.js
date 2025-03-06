//conexion con HTML 
const songForm = document.getElementById('song_form');
const playList = document.getElementById('play_list');

//funcion para agregar una cancion a la lista 
function addSong(songName, artistName, songUrl){
    const listSong = document.createElement('li');
    listSong.innerHTML = `
    <strong>${songName}</strong>
    -${artistName}
    <a href=${songUrl}"target_blank">Reproducir</a>
    <button class="delete.btn text-yellow-950">Eliminar</button>  `;

        //agregar el evento para eliminar la canción al boton
        const deleteButton = listSong.lastElementChild; //hace que seleccione el ultimo elemento de la lista, el boton de eliminar 
        deleteButton.addEventListener('click',() => {
            listSong.remove();//elimina el li cuando se hace click en el btn
        });

    //agregar la cancion a la lista de reproduccion 
    playList.appendChild(listSong);
}

//Manejo de envio de formulario(eventos)
songForm.addEventListener('submit', (event)=>{
    event.preventDefault();

        // Obtener datos del formulario
        const songName = document.getElementById("song_name").value;
        const artistName = document.getElementById("artist_name").value;
        const songUrl = document.getElementById("url_song").value;
    
        // Llamar a la función para agregar la canción a la lista
        addSong(songName, artistName, songUrl);
    
        // Restablecer el formulario
        songForm.reset();

})