const cardsPartners = document.querySelector('.cards-restaurants');

const renderItems = (data) => {
    data.forEach( item => {
        const a = document.createElement('a');
        const {image, kitchen, name, price, products, stars, time_of_delivery } = item;
        a.setAttribute('href', '/restaurant.html');
        a.classList.add('card');
        a.classList.add('card-restaurant');
        a.dataset.products = products;
        a.innerHTML = `
            <img src="${image}" alt="${name}" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${name}</h3>
                    <span class="card-tag tag">${time_of_delivery} мин</span>
                </div>
                <!-- /.card-heading -->
                <div class="card-info">
                    <div class="rating">
                        ${stars}
                    </div>
                    <div class="price">От ${price} ₽</div>
                    <div class="category">${kitchen}</div>
                </div>
                <!-- /.card-info -->
            </div>
            <!-- /.card-text -->
        `;

        a.addEventListener('click',(event) => {
            event.preventDefault();
            localStorage.setItem('restaurant', JSON.stringify(item));
            window.location.href = './restaurant.html';
        })

        cardsPartners.append(a);
    })
}

fetch('https://deliveryfood-4c454-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data)=> {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })