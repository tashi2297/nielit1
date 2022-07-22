if ( "serviceWorker" in navigator) {
   navigator.serviceWorker.register("sw.js").then(regitration => {
      console.log("SW Registered!");
      console.log(regitration);
   }).catch(error => {
      console.log("SW Registration Failed!");
      console.log(error);

   });

   }