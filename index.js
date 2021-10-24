function rima() {
    alert('rima w bas');
    fetch(' https://gentle-castle-38614.herokuapp.com/data')
        .then(response => response.json())
        .then(json => console.log(json))
}