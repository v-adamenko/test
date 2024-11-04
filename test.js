console.log("Script loaded");


setTimeout(function () {
    alert(1111);
    throw new Error("Error bla bla");
}, 3000)