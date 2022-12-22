const fs = require("fs");
const path = require("path");

class jsonDB {
    constructor (jsonfile) {
        if (jsonfile.substr(-5) != "json") jsonfile += ".json";
        this.filename = path.join(__dirname, "../", "db", jsonfile);
        this.read();
    };

    read () {
        try {
            this.json = JSON.parse(fs.readFileSync(this.filename, "utf8"));
        } catch {
            this.json = {}
        };
    };

    write() {
        fs.writeFileSync(this.filename, this.json);
    };
}

module.exports = { jsonDB };