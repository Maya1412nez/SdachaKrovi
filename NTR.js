function get(url){
    const Http = new XMLHttpRequest();
    Http.open("GET", url, false);
    Http.send(null);
    console.log(Http.status)
    var data = JSON.parse(Http.responseText) // var = let
    console.log(data)
    return data
}

function getTitle() {
    return get('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/package.json').name  
}

function get1() {
    data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';
    var mydata = JSON.parse(data);
    return mydata
}

