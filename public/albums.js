// document.addEventListener('DOMContentLoaded', function(){
//   getAlbum();
// });
// const getFromId = ()=>{

//   const params = new URLSearchParams(window.location.search);
//   return params.get('album')
// }

function renderAlbum(album){
  const div = document.querySelector(".renderOneAlbum")
  // const backgrounddd = document.querySelector('.bodyMusic')
  // backgrounddd.style.backgroundImage = album.imagenUrl
  const h1 = document.createElement('h1')
  h1.classList.add('text-white', 'text-5xl', 'mt-20', 'mb-4', 'ml-4','font-bold')
  h1.textContent= album.titulo
  h1.style.background = 'none'
  div.appendChild(h1)

  const img = document.createElement('img')
  img.classList.add('rounded','cursor-pointer')
  img.style.width = '400px'
  img.style.height = '400px'
  img.src= album.imagenUrl ? album.imagenUrl : 'https://imgur.com/0uSALUr.png'
  div.appendChild(img)

  const p = document.createElement('p')
  p.classList.add('text-white', 'mb-4', 'ml-4', 'w-1/2')
  p.textContent= album.descripcion
  p.style.background = 'none'
  div.appendChild(p)
  
 
const buttonAddSong = document.querySelector('.buttonAddSong')
  const redirect = (id) =>{ window.location.href = `./addsong.html?=${id}` }


  buttonAddSong.addEventListener('click', ()=>{ redirect(album._id)}) 

  const buttoneditAlbum = document.querySelector('.buttoneditAlbum')
  const redirecta = (id) =>{ window.location.href = `./editform.html?=${id}` }


  buttoneditAlbum.addEventListener('click', ()=>{ redirecta(album._id)}) 


  //renderizar canciones

 
    

   
 


 
  
}

// window.location.search 

const getAlbum = async () =>{
  try{
    const urlParams = new URLSearchParams(window.location.search)
    const albumId = urlParams.get('')
     console.log(albumId)

     const response = await axios.get(`/albums/` + albumId)
     console.log(response)
     albumToUse = response.data;
     renderAlbum(albumToUse);
     console.log(albumToUse.canciones)
     renderSongs(albumToUse.canciones)
    
  }
   catch(error){
    
    //  swal({
    //      title: 'Error!',
    //      text: `${error.response.data.message}`,
    //      icon: 'error',
    //      confirmButtonText: 'Ok'
    //   })
    //    redirect('./index.html')
     }
}



//  function renderSongs(cancion){
//    const div = document.querySelector(".renderOneAlbum")
//    const listaSongs = document.createElement('ol')
//    listaSongs.classList.add('list-decimal', 'ml-6')


//    cancion.forEach((cancio, index) => {
//      const itemSongs = document.createElement('li')
//      itemSongs.classList.add('flex')

//      const detallesSong = document.createElement('span')
//      detallesSong.textContent `${index + 1} ${titulo} ${duracion}`
//      itemSongs.appendChild(detallesSong)

//      const acciones = document.createElement('div')
//      const youtube = document.createElement('a')
//      youtube.href = cancionLink;
//      youtube.target = '_blank';
//      acciones.appendChild(youtube)



//      const deleteIcon = document.createElement('span')
//      deleteIcon.classList.add('cursor-pointer')
//      deleteIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
//      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
//    </svg>`
//      deleteIcon.addEventListener('click', () => deleteSong(album._id,index))

//      itemSongs.appendChild(acciones)
//      listaSongs.appendChild(itemSongs)


//    });

// }


// window.onload = getAlbum;

// musicIcon.addEventListener('click', () => window.open(song.url,'_blank'))


// 



function renderSongs(cancion){

  const div = document.querySelector(".renderSongs");

  while (div.firstChild){
    div.removeChild(div.firstChild)
  }


  cancion.forEach((cancio, index) => {
 
    const li = document.createElement('li')

    li.classList.add('canciones-estilos')

    const titulo = document.createElement('h2')
    titulo.classList.add('canciones-titulo')
    titulo.textContent = cancio.titulo

   const duracion = document.createElement('p')
   duracion.classList.add('canciones-duracion')
    duracion.textContent = `duracion : ${cancio.duracion} `

    const acciones = document.createElement('div')

    const link = document.createElement('a')
    link.textContent = 'ver en youtube'
    link.target = '_blank'
    link.href = cancio.cancionLink

    acciones.appendChild(link)
    

    li.appendChild(titulo)
    li.appendChild(duracion)
    li.appendChild(acciones)

    div.appendChild(li)
  });

}




document.addEventListener('DOMContentLoaded', function(){

getAlbum()
  
})