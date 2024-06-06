
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('');
    if (albumId) {
        // Cargar los detalles del álbum para editar
        cargarAlbum(albumId);
    }

    const form = document.getElementById('formulario');
    form.onsubmit = async (event) => {
        event.preventDefault();
        await actualizarAlbum(albumId);
    };
});

async function cargarAlbum(albumId) {
    try {
        const response = await axios.get(`/albums/${albumId}`);
        const album = response.data;

        document.querySelector('.titulo-edit').value = album.titulo
        document.querySelector('.descripcion-edit').value = album.descripcion
        document.querySelector('.imagen-edit').value = album.imagenUrl ? album.imagenUrl : 'https://i.imgur.com/0uSALUr.jpeg'; // Si no hay URL de imagen, se asigna la imagen por defecto 
        document.querySelector('.anio-edit').value = album.anoLanzamiento

       
    } catch (error) {
        console.error('Error loading album details', error);
        swal("Error", "Hubo un problema al cargar los detalles del álbum", "error");
    }
}

 async function actualizarAlbum(albumId) {
     const titulo = document.querySelector('.titulo-edit').value;
     const descripcion = document.querySelector('.descripcion-edit').value;
     let portada = document.querySelector('.imagen-edit').value; // Obtener la URL de la imagen
     let anio = document.querySelector('.anio-edit').value;
   

    try {
         const response = await axios.put(`/albums/${albumId}`, { titulo, descripcion, portada, anio });
         if (response.status === 200) {
             swal("¡Éxito!", "Álbum actualizado correctamente", "success").then(() => {
                 window.location.href = 'index.html';
            });
         }
     } catch (error) {
         console.error('Error updating album', error);
         swal("Error", "Hubo un problema al actualizar el álbum", "error");
     }
 }




function cancelEdit() {
    window.location.href = 'index.html';
}