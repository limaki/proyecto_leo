async function obtenerUsuarios() {
    try {
      const response = await axios.get('http://localhost:3001/usuarios');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  obtenerUsuarios();

  async function obtener() {
    try {
      const response = await axios.get('http://localhost:3001?usuarios=nombre');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  
  obtener();


  const renderAlbums = (album) => {
    const div = document.getElementsByClassName('grid grid-cols-3 gap-4 mt-12 py-30')[0]
    const newDiv = document.createElement('div')
    newDiv.classList.add('mb-20')
    const img = document.createElement('img')
    img.classList.add('rounded','cursor-pointer')
    img.src= album.img ? album.img : 'https://imgur.com/0uSALUr.png'
    
    div.appendChild(newDiv)
    newDiv.appendChild(img)
    const p = document.createElement('p')
    p.classList.add('text-white','text-center', 'text-xl', 'font-bold')
    p.textContent = album.yearOfRelease
    newDiv.appendChild(p)
  }