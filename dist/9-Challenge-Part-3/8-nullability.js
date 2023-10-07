let vague = undefined;
let vague1 = true ? undefined : true;
let vague2;
if (vague1 === undefined) {
    vague2 = false;
}
else {
    vague2 = true;
}
console.log(vague2);
function nullNarrow(arg) {
    if (arg === undefined || isNaN(parseInt(arg))) {
        return undefined;
    }
    else {
        return parseInt(arg);
    }
}
console.log(nullNarrow("500"));
