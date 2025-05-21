
const debug = true

console.log("Récupération des différents éléments:");
const grilleDeJeu = document.getElementById("grille_de_jeu");
console.log("\tgrille de jeu:",grilleDeJeu);
const sideBar = document.getElementById("sidebar");
console.log("\tsidebar:",sideBar);
const coups = document.getElementById("stat_nombre_de_coups");
console.log("\tnombre de coups:",coups);
const record = document.getElementById("stat_nombre_de_coups_record");
console.log("\trecord:",record);

function fisherYatesShuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));  // random index
    [arr[i], arr[j]] = [arr[j], arr[i]];          // swap
  }
}

console.log("Récupération des données JSON:");
const pokemon = await fetch("data/pokemon.json")
    .then(response => response.json())
    .then(data => {
        console.log("\tpokemons:", data);
        return data;
    })
    .catch(error => {
        console.error("Erreur lors de la récupération des données JSON:", error);
    });

let pokemonsCaches = [];
for (let i=0; i<grilleDeJeu.children.length/2; i++) {
    pokemonsCaches.push(i);
    pokemonsCaches.push(i);
}
fisherYatesShuffle(pokemonsCaches);

for (let p of [...sideBar.children].filter(c => c.className === "liste_pokemons_captures")[0].children) {
    p.remove()
}

console.log("Ajout de l'event listener sur chacune des cases de la grille de jeu:");
for (let i=0; i<grilleDeJeu.children.length; i++) {
    let c = grilleDeJeu.children[i]
    let img = c.children[0];
    if (img.className === "pokemon") {
        img.src = "assets/bush.webp";
        img.className = "bush";
    }
    if (c.children.length > 1) {
        c.children[1].remove();
    }
    c.addEventListener("click", function () {
        if (img.className === "bush") {
            img.className = "pokemon";
            img.src = pokemon[pokemonsCaches[i]].sprite;
            coups.innerText = parseInt(coups.innerText) + 1;
        }
    });
}

console.log("Ajout de l'event listener sur la grille de jeu:");
grilleDeJeu.addEventListener("click", async function () {
    
    if (parseInt(coups.innerText)%2 === 0) {
        const pokemons = 
            [...grilleDeJeu.children]
            .filter(c => c.children.length == 1)
            .map(c => c.children[0])
            .filter(c => c.className === "pokemon");
        if (pokemons.length > 0) {
            const pokemon1 = pokemons[0].src.split("/").pop().split(".")[0];
            const pokemon2 = pokemons[1].src.split("/").pop().split(".")[0];
            if (pokemon1 == pokemon2) {
                [...sideBar.children]
                .filter(c => c.className === "liste_pokemons_captures")[0]
                .appendChild(pokemons[0].cloneNode(true));
                for (const p of pokemons) {
                    const pokeball = new Image();
                    pokeball.src = "assets/pokeball.png";
                    pokeball.className = "pokeball";
                    p.parentElement.appendChild(pokeball)
                }
                if ([...grilleDeJeu.children].filter(c => c.children[0].className === "bush").length === 0) {
                    if (parseInt(record.innerText) > parseInt(coups.innerText) || record.innerText == "0"){
                        record.innerText = coups.innerText;
                    }
                    await new Promise(r => setTimeout(r, 1000));
                    for (let p of [...sideBar.children].filter(c => c.className === "liste_pokemons_captures")[0].children) {
                        console.log(p,[...sideBar.children].filter(c => c.className === "liste_pokemons_captures")[0].children);
                        p.remove()
                    }
                    for (let img of [...[...grilleDeJeu.children].map(c => c.children[0])]) {
                        img.src = "assets/bush.webp"
                        img.className = "bush"
                        img.parentElement.children[1].remove();
                    }
                    coups.innerText = 0;
                }
            } else {
                for (const p of pokemons) {
                    p.className = "bush";
                }
                await new Promise(r => setTimeout(r, 1000));
                for (const p of pokemons) {
                    p.src = "assets/bush.webp";
                }
            }
        }
    }
})
