function rima() {
    fetch(' https://gentle-castle-38614.herokuapp.com/data')
        .then(response => response.json())
        .then(json => {
            var ul = document.getElementById('demo')
            json.forEach(element => {
                var li = document.createElement('li')
                li.innerHTML = element.name;
                ul.appendChild(li);
            });
        })
}