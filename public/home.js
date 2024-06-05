

const favoriteRecords = ["disco1", "disco2", "disco3", "disco4"];
function addFavorites(favorites) {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    if (favorites.includes(img.getAttribute ('name'))) {
      const icon = document.createElement("i");
      icon.classList.add("fa-regular");
      icon.classList.add("fa-star");
      img.parentNode.appendChild(icon);
      img.parentElement.classList.add("favorite");
      
      
    }
  });
}

addFavorites (favoriteRecords)

let icons = document.querySelectorAll('i')
icons.forEach((i)=>{
    i.addEventListener("click", function(e) {
        e.preventDefault();
        //let icon = document.querySelector(".fa-star");
       
          //this.i.classList.add("fa-solid");
          i.classList.toggle("fa-solid");
        
       
      });
})

  //icon()


   

