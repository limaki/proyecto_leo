

document.addEventListener('DOMContentLoaded', function(){
  getAlbums();
});

const getAlbums =  async () => {
    try{
    const response = await axios.get('http://localhost:3001/albums')
    response.data.map((album)=> {
      renderAlbums(album)})
    }
    catch(error){
      // Aviso de error al cargar los albums
    }
  }

  const renderAlbums = (album) => {
    console.log(album._id)
    const div = document.getElementsByClassName('containeral')[0]
    const newDiv = document.createElement('div')
    newDiv.classList.add('albumthriller')
    const img = document.createElement('img')
    img.classList.add('rounded','cursor-pointer')
    img.style.width = '200px'
    img.style.height = '200px'
    img.src= album.imagenUrl ? album.imagenUrl : 'https://imgur.com/0uSALUr.png'
    const tittle = document.createElement('h2')
    tittle.textContent = album.titulo
    tittle.style.background = 'none';
    const a = document.createElement('a');
    a.href = 'http://localhost:3001/albums/' + album._id
    a.text = album.titulo
    const buttonDelete = document.createElement('button')
    buttonDelete.textContent = 'eliminar'

    newDiv.appendChild(buttonDelete)

    buttonDelete.onclick = () => deleteAlbum(album._id)

    buttonDelete.addEventListener('click', ()=>{ 
      const redirect = (url) => {window.location.href = url}
  
      redirect(`./index.html`)}) 


 const redirect = (id) => { window.location.href = `./Albums.html?=${id}`}

 img.addEventListener('click', ()=>{
  redirect(album._id)
 })

    
    div.appendChild(newDiv)
    newDiv.appendChild(tittle)
    newDiv.appendChild(img)
    const p = document.createElement('p')
    p.classList.add('text-black','text-center', 'text-xl', 'font-bold', 'texto-renderizado')
    p.textContent = album.anoLanzamiento
    newDiv.appendChild(p)
  }













  async function deleteAlbum(id) {
    try {
        const response = await axios.delete(`http://localhost:3001/albums/${id}`);
        if (response.status === 200) {
            swal("¡Éxito!", "Álbum eliminado correctamente", "success").then(() => {
                fetchAlbums(); // Refrescar la lista de álbumes después de la eliminación
            });
        }
    } catch (error) {
        console.error('Error deleting album', error);
        swal("Error", "Hubo un problema al eliminar el álbum", "error");
    }
  }
   //const deleteAlbums = (album._id) => {
  //    try{
  //     const response = await axios.delete(`http://localhost:3001/albums/${_id}`)
  //     console.log(response)
  //     response.data.map((album)=> {
  //      renderAlbums(album)})
  //  }          
    
  //    catch(error){
  //      // Aviso de error al cargar los albums
  //    }
  // }