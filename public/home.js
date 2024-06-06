

const favoriteRecords = ["disco1", "disco2"];
function addFavorites(favorites) {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    if (favorites.includes(img.getAttribute ("name"))) {
      const icon = document.createElement("i");
      icon.classList.add("fa-regular");
      icon.classList.add("fa-star");
      img.parentNode.appendChild(icon);
      img.parentElement.classList.add("favorite");
    }
  });
}

addFavorites(favoriteRecords)

let icon = document.querySelectorAll('i')
icon.forEach((i)=>{
    i.addEventListener("click", function(e) {
        e.preventDefault();
          i.classList.toggle("fa-solid");
      });
})
