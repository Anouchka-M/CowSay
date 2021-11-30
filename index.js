const mesInfos = require("./information.js");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${mesInfos.mesInfos.nom} from ${mesInfos.mesInfos.campus} campus !`,
}));