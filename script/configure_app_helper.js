const _querySearchKey = "querySearch";

function changeFavIcon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}

function handleInitialSearch() {
    let search = document.location.search;

    if (search == '') return;

    localStorage.setItem(_querySearchKey, search);
}

function getLocalSearch() {
    let search = localStorage.getItem(_querySearchKey);

    return search;

}


function getQueryParam(search, name) {
    let params = new URLSearchParams(search);

    return params.get(name);
}