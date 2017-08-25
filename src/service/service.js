//Function to get data from ajax call for home page
export function getStateData() {
    return new Promise(function (resolve, reject) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(xhttp.responseText);
            }
        };
        xhttp.open("GET", "http://localhost:3001/homepage", true);
        xhttp.send();
    });
}


export function getSeasonDetail(seasonId) {

    return new Promise(function (resolve, reject) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(xhttp.responseText);
            }
        };
        xhttp.open("GET", "http://localhost:3001/" + seasonId, true);
        xhttp.send();
    });



}

export function updateEpisode(episode, seasonId) {
    return new Promise(
        (resolve, reject) => {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(xhttp.responseText);
                }
            };
            xhttp.open("POST", "http://localhost:3001/update", true);
            xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            let data = Object.keys(episode).map(key => {
                return key + '=' + episode[key] + '&';
            });
            data.push("seasonId=" + seasonId);

            let dataInString = data.reduce((acc, ele) => acc + ele, "");
            xhttp.send(dataInString);
        }
    );
}
