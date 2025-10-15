const fs = require("fs");

fs.readFile("example.txt", "utf8", function(err, data) {
    if (err) {
        console.log("Error reading file:", err);
    } else {
        console.log("File Contents:\n", data);
    }
});
