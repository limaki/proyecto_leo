// let album;
// let newSong = {}
// const albumId = window.location.search.split('album=')[1]
// const getAlbum = async () =>{
//   try{
//    const {data} = await axios.get(`/band/${albumId}`)
//    album = data.data;
//   }
//   catch(error){
//   console.log(error)
//   }
// }
// getAlbum()











// document.addEventListener('DOMContentLoaded', () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const albumId = urlParams.get('albumId'); // Asegúrate de que estás obteniendo 'albumId' en lugar de 'id'
//   if (!albumId) {
//       console.error('Album ID is missing in URL');
//       return;
//   }

//   const form = document.getElementById('addSongForm');
//   form.onsubmit = async (event) => {
//       event.preventDefault();

//       const titulo = form.elements['titulo'].value;
//       const duracion = form.elements['duracion'].value;
//       const url = form.elements['url'].value;

//       try {
//           const response = await axios.post(`/albums/${albumId}/canciones`, { titulo, duracion, url });
//           if (response.status === 200) {
//               swal("¡Éxito!", "Canción agregada correctamente", "success").then(() => {
//                   window.location.href = `Albums.html?id=${albumId}`;
//               });
//           }
//       } catch (error) {
//           console.error('Error adding song to album', error);
//           swal("Error", "Hubo un problema al añadir la canción", "error");
//       }
//   };
//   document.getElementById('cancelar').addEventListener('click', function (e) {
//       e.preventDefault();
//       window.location.href = 'index.html';
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const albumId = urlParams.get(); // Asegúrate de que estás obteniendo 'albumId' en lugar de 'id'
  if (!albumId) {
      console.error('Album ID is missing in URL');
      return;
  }

let botonAdd = document.querySelector('.edibot');
let tituloAdd = document.querySelector('.titulo-add');
let duracionAdd = document.querySelector('.duracion-add');
let urlAdd = document.querySelector('.url-add');


 botonAdd.addEventListener('click', async function(e)  {

    e.preventDefault();
    try{
      
      const response = axios.post(`/albums/${albumId}/canciones`,
     {
         titulo: tituloAdd.value,
         duracion: duracionAdd.value,
         cancionLink: urlAdd.value
        
        
        
     });
     console.log(response.data)
    //  .then(function(response){
    //   console.log(response, 'se agrego un album con exito!')
    //  })
     }
     catch(err){
       console.log('error al cargar coso' + err)
     }
 })})