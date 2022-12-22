const { jsonDB } = require("./js/db");

// required stuff (functions, varibles)


const osIntSites = [
    ["instagram", "images/instagram.png", true],
    ["tiktok", "images/tiktok.png", true],
    ["facebook", "images/facebook.png", true],
    ["youtube", "images/youtube.png", false],
    ["medium", "images/medium.png", true],
    ["reddit", "images/reddit.png", false],
    ["github", "images/github.png", false],
    ["quora", "images/github.png", true],
    ["codepen", "images/codepen.png", false],
    ["devcommunity", "images/devcommunity.png", false],
    ["twitch", "images/twitch.png", false],
    ["vsco", "images/vsco.png", false],
]

// sites are the different sites we have login access to
// for example: if we have the users instagram account we will get much better results...
function getSites() {
    let loggedinsites = new jsonDB("loggedinsites");
    let sites = {};
    osIntSites.forEach((i) => {
        // the sites name, the logo, and if login is suggested?
        let [site, logo, loginSuggested] = i;
        let login;
        if (loginSuggested) {
            login = {
                "username": null,
                "password": null,
                "session": null,
                ...loggedinsites.json[site]
            }
        }
        sites[site] = {
            ...login,
            logo: logo,
            login_suggested: loginSuggested
        }
    });
    return sites;
}

let sites = getSites();