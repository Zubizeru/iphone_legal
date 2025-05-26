const buttons = document.querySelectorAll("#image-picker li");

const image = document.querySelector("#product-image");

// Cria o elemento para exibir o nome da cor selecionada
const colorNameDisplay = document.createElement('p');
colorNameDisplay.id = 'color-name-display';
colorNameDisplay.style.fontSize = '1.2rem';
colorNameDisplay.style.fontWeight = 'bold';
colorNameDisplay.style.marginTop = '1rem';

// Adiciona o elemento após a imagem do produto
image.parentNode.insertBefore(colorNameDisplay, image.nextSibling);

// 

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) =>
            btn.querySelector(".color").classList.remove("selected")
        );

        const button = e.target;
        const id = button.getAttribute("id");
        button.querySelector(".color").classList.add("selected");
        image.classList.toggle("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);

        // Atualiza o texto do nome da cor selecionada
        colorNameDisplay.textContent = `Cor selecionada: ${colorNames[id]}`;
    })
});
