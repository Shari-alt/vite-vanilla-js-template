export function createCharacterComponent() {

    let url

   const filter =document.querySelector(".header__filter");
   const status = filter.value;

   const input=document.querySelector(".header__search-form");
   const searchName = input.value;


   if (status=="Alive") {
       url = `https://rickandmortyapi.com/api/character?name=${searchName}&status=alive`;
   }
   else if (status=="Dead") {
    url = `https://rickandmortyapi.com/api/character?name=${searchName}&status=dead`;
    }
    else if (status=="Unknown") {
    url = `https://rickandmortyapi.com/api/character?name=${searchName}&status=unknown`;
    }
    if (status=="All") {
    url = `https://rickandmortyapi.com/api/character?name=${searchName}`;
    }

fetch(url)
.then(response => {

    if (response.ok) {
        return response.json();
    } else {
        console.log(response.status);
    }
}).then(dataObject => {
    console.log(dataObject);
    dataObject.results.forEach((character) => {
        const main =document.querySelector('main');
        const section = document.createElement('section');
        section.classList.add('profil');

        const img = document.createElement('img');
        img.classList.add('profil_image');
        img.src = character.image;
        img.alt = `${character.name}`;

        const h2 = document.createElement('h2');
        h2.classList.add('profil_name');
        h2.textContent =`${character.name}`;

        const h3= document.createElement('h3');
        h3.classList.add('profil_status');
        h3.textContent = `${character.status}`;
        
        if (character.status === "Alive") {
            section.style.backgroundColor = "red"; 
        }
        if (character.status === "Dead") {
            section.style.backgroundColor = "grey"; 
        }
        if (character.status === "unknown") {
            section.style.backgroundColor = "white"; 
        }
        main.append(section);
        section.append(img);
        section.append(h2);
        section.append(h3);
        
    })
})


}

export function clearCharacter() {
    const characterElements = document.querySelectorAll("section");
    characterElements.forEach((section) => section.remove());
    }
