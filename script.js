const showCard = document.querySelector(".row");
console.log(showCard);

async function cardDate() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6');
    return response.data;
};



async function main() {
    console.log(await cardDate())
    const cards = await cardDate();
    cards.forEach(card => {
        showCard.innerHTML += `<div class="col-4">
                    <div class="card">
                        <img src="${card.url}" class="card-img-top card-img" alt="...">
                        <div class="card-body">

                            <p class="card-text">${card.title}</p>

                        </div>
                    </div>
                </div>`
    });

}

main();

