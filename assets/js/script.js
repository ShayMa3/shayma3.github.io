new TypeIt("#simpleUsage", {
    // strings: "a personal webpage ",
    speed: 50,
    waitUntilVisible: true

  })

  .exec(async () => {
    //-- Return a promise that resolves after something happens.
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve();
      }, 1400);
    });
  })
  .type("a personal webpage ")
  .go();

let about_button = document.getElementById("aboutbtn");
about_button.onclick = function(){
  Jump(900);
};

let design_button = document.getElementById("designbtn");
design_button.onclick = function(){
  Jump(1340);
}

let contact_button = document.getElementById("contactbtn");
contact_button.onclick = function(){
  Jump(5000);
}
  
  

