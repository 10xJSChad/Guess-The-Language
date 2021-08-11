var fs = require('fs');
var lines;
var files = fs.readdirSync('Question Generator');

var language;
var newLines = "var questionsList = ["

for(i = 0; i<files.length; i++){
    if(files[i].split(".")[1] == "txt"){
        lines = fs.readFileSync('Question Generator/' + files[i], 'utf8').toString();
        lines = lines.split(".")
        language = lines[0];
        for(j = 0; j<lines.length;j++){
            lines[j] = lines[j].replace('"', '\\"')
            if(lines[j].length > 50 && lines[j].length < 151) newLines += "[\"" + language + "\", \"" + lines[j].replace(/[\n\r]+/g, ' ').trim() + "\"],";
        }
    }
}

newLines += "]"
fs.writeFile('array.js', newLines, (err) => {
    if (err) throw err;
});