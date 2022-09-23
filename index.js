a = Number(prompt("Unesite godinu"));
if (a % 4 !== 0) {
  console.log("Ovo nije prestupna godina")
}
else if (a % 100 !== 0) {
  console.log("Ovo je prestupna godina")
}
else if (a % 400 !== 0) {
  console.log("Ovo nije prestupna godina")
}
else {
  console.log("Ovo je prestupna godina")
}; 