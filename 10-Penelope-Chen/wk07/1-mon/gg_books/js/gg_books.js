const fetchCover = function () {
    const xhr = new XMLHttpRequest(); 
        xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:Jaws');
        xhr.send(); 

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
            return;
        }
            const data = JSON.parse( xhr.responseText ); // turn the string into a JS object

            console.log(data);

            const img = document.createElement('img');
            img.innerText = data.text;
            document.body.appendChild(img)
        }
}

document.getElementById('fetch').addEventListener('click', fetchCover);
fetchCover(); // First book cover for free