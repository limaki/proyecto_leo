function validarEditAlbum() {
    const formulario = document.forms["EditAlbum"];
    const albumTitle = formulario.elements["albumTitle"].value.trim();
    const albumDescription = formulario.elements["albumDescription"].value.trim();
    const albumAnio = formulario.elements["albumAnio"].value.trim()
    const albumUrl = formulario.elements["albumUrl"].value.trim()
    

    if (albumTitle === "") {
        mostrarMensajeError(formulario.elements["albumTitle"], "Por favor, ingresa el título del álbum.");
        return false; 

    } else {
        ocultarMensajeError(formulario.elements["albumTitle"]);
        
    }
    if (albumDescription === "") {
        mostrarMensajeError(formulario.elements["albumDescription"], "Por favor, ingresa una descripción del álbum.");
        return false; 

    }else{ 
        ocultarMensajeError(formulario.elements["albumDescription"]);
    }
    if (albumAnio === "") {
        mostrarMensajeError(formulario.elements["albumAnio"], "Por favor, ingresa el año del album");
        return false; 

    } else {
        ocultarMensajeError(formulario.elements["albumAnio"]);
        
    }

    if (albumUrl === "") {
        mostrarMensajeError(formulario.elements["albumUrl"], "Por favor, ingresa el URL del album");
        return false; 

    } else {
        ocultarMensajeError(formulario.elements["albumUrl"]);
        
    }

     return true
    
}


function validarAddSong() {
    const formulario = document.forms["formulario"];
    const songTitle = formulario.elements["songTitle"].value.trim();
    const songDuracion= formulario.elements["songDuracion"].value.trim();
    const songUrl = formulario.elements["songUrl"].value.trim()
    
    

    if (songTitle === "") {
        mostrarMensajeError(formulario.elements["songTitle"], "Por favor, ingresa el título de la cancion.");
        return false; 

    } else {
        ocultarMensajeError(formulario.elements["songTitle"]);
        
    }
    if (songDuracion === "") {
        mostrarMensajeError(formulario.elements["songDuracion"], "Por favor, ingresa la duracion de la cancion.");
        return false; 

    }else{ 
        ocultarMensajeError(formulario.elements["songDuracion"]);
    }
    if (songUrl === "") {
        mostrarMensajeError(formulario.elements["songUrl"], "Por favor, ingresa el url de la cancion");
        return false; 

    } else {
        ocultarMensajeError(formulario.elements["songUrl"]);
        
    }

     return true
    
}




function loginUsuario() {
    const formulario = document.forms["formulario"];
    const emailLogin = formulario.elements["emailLogin"].value.trim();
    const pass_usuario = formulario.elements["pass_usuario"].value.trim();
   
    

    if (emailLogin === "") {
        mostrarMensajeError(formulario.elements["emailLogin"], "Por favor, ingresa el email del usuario");
        return false; 

    } else {
        ocultarMensajeError(formulario.elements["emailLogin"]);
        
    }
    if (pass_usuario === "") {
        mostrarMensajeError(formulario.elements["pass_usuario"], "Por favor, ingresa la contraseña del usuario");
        return false; 

    }else{ 
        ocultarMensajeError(formulario.elements["pass_usuario"]);
    }
    

     return true
    
}




function mostrarMensajeError(inputElement, mensaje) {
    ocultarMensajeError(inputElement)
    let mensajeParrafo = inputElement.nextElementSibling;
    if (!mensajeParrafo || !mensajeParrafo.classList.contains("mensaje-error")) {
        mensajeParrafo = document.createElement("p");
        mensajeParrafo.classList.add("mensaje-error"); 
        inputElement.parentNode.insertBefore(mensajeParrafo, inputElement.nextSibling);
        mensajeParrafo.style.color="red"
    }
    mensajeParrafo.textContent = mensaje;
    
}

function ocultarMensajeError(inputElement) {
    const mensajeParrafo = inputElement.nextElementSibling;
    if (mensajeParrafo && mensajeParrafo.classList.contains("mensaje-error")) {
        mensajeParrafo.parentNode.removeChild(mensajeParrafo);
    }
}