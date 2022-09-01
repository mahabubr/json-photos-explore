const loadData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const res = await fetch(url);
    const data = await res.json();
    displayData(data)
}

const displayData = (photos) => {
    // photos = photos.slice(0, 20)

    const displayContainer = document.getElementById('display-container');

    photos.forEach(photo => {
        const { thumbnailUrl, title } = photo
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                     <div class="card">
                        <img src="${thumbnailUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                        </div>
                     </div>
        `
        displayContainer.appendChild(div);
    })
}

loadData()