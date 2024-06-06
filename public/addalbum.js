let botonAdd = document.querySelector('.edibot');
let tituloAdd = document.querySelector('.titulo-add');
let descripcionAdd = document.querySelector('.descripcion-add');
let añoAdd = document.querySelector('.año-add');
let imagenAdd = document.querySelector('.imagen-add');
let botonCancel = document.querySelector('.rojobot')

 botonAdd.addEventListener('click', async function(e)  {

    e.preventDefault();
    try{
      
      const response = axios.post('http://localhost:3001/albums',
     {
         titulo: tituloAdd.value,
         descripcion: descripcionAdd.value,
         anoLanzamiento: añoAdd.value,
         imagenUrl: imagenAdd.value
        
        
     });
     console.log(response.data)
    //  .then(function(response){
    //   console.log(response, 'se agrego un album con exito!')
    //  })
     }
     catch(err){
       console.log('error al cargar coso' + err)
     }
 });

//  const buttonAddSong = document.querySelector('.buttonAddSong')
  


  botonAdd.addEventListener('click', ()=>{ 
      const redirect = (url) => {window.location.href = url}
  
      redirect(`./index.html`)}) 

      botonCancel.addEventListener('click', ()=>{ 
        const redirect = (url) => {window.location.href = url}
    
        redirect(`./index.html`)}) 



 const buttonSongAdd = document.querySelector('.buttonSongAdd')

  buttonSongAdd.style.cursor = 'pointer'
  buttonSongAdd.addEventListener('click', ()=>{
  
  const redirect = (url) => {window.location.href = url}
  
  redirect(`./addsong.html`)}) 








//  const buttonAlbum = document.querySelector('.buttonAlbum')

//  buttonAlbum.style.cursor = 'pointer'
//  buttonAlbum.addEventListener('click', ()=>{
  
//   const redirect = (url) => {window.location.href = url}
  
//   redirect(`./albums.html`)}) 







//   const buttonAlbumEdit = document.querySelector('.buttonAlbumEdit')

//   buttonAlbumEdit.style.cursor = 'pointer'
//   buttonAlbumEdit.addEventListener('click', ()=>{
   
//    const redirect = (url) => {window.location.href = url}
   
//    redirect(`./editform.html`)}) 





//    const buttonAlbumAdd = document.querySelector('.buttonAlbumAdd')

//    buttonAlbumAdd.style.cursor = 'pointer'
//    buttonAlbumAdd.addEventListener('click', ()=>{
  
//   const redirect = (url) => {window.location.href = url}
  
//   redirect(`./addAlbum.html`)}) 





 





//   const buttonAlbum = document.querySelector('.buttonTours')

//   buttonTours.style.cursor = 'pointer'
//   buttonTours.addEventListener('click', ()=>{
  
//   const redirect = (url) => {window.location.href = url}
  
//   redirect(`./tours.html`)}) 





//   const buttonLog = document.querySelector('.buttonLog')

//   buttonLog.style.cursor = 'pointer'
//   buttonLog.addEventListener('click', ()=>{
//     const redirect = (url) => {window.location.href = url}
  
//   redirect(`./login.html`)}) 




//   const buttonUsers = document.querySelector('.buttonUsers')

//   buttonUsers.style.cursor = 'pointer'
//   buttonUsers.addEventListener('click', ()=>{
  
//   const redirect = (url) => {window.location.href = url}
  
//   redirect(`./usuarios.html`)}) 

 










// const objectToSend = { title: "", description: "", yearOfRelease:"", img: ""}

// document.querySelectorAll('input')


// const addAlbum = async (e) => {
//   try {
//     getInputValues();
//     await axios.post("/band", objectToSend);
//     swal({
//       title: "Success!",
//       text: "Album added to the collection!",
//       icon: "success",
//       confirmButtonText: "Ok",
//     });
//     // redireccionar a home
//   } catch (error) {
//     // alerta en caso de error
//   }
// }

// button.addEventListener("click", (e) => addAlbum(e));
// function addAlbum(e) {
//   e.preventDefault();
//   //...
// }