
function name() {
    fetch('https://rickandmortyapi.com/api')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json)
        });

    return true;
}
