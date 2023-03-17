// Initialize and add the map

function initMap() {
    // The location of Uluru
    const beijing_pos = { lat: 39.916668, lng: 	116.383331 };
    const prague_pos = { lat: 50.073658, lng: 	14.418540 };
    const washington_pos = { lat: 47.751076, lng: -120.740135}
    const mexico_pos = {lat: 19.432608, lng: -99.133209}
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: {lat: 51.169392, lng: 71.449074},
    });



 

    const beijing = new google.maps.Marker({
      position: beijing_pos,
      map: map,
    });

    const czech = new google.maps.Marker({
      position: prague_pos,
      map: map,
    });

    const washington = new google.maps.Marker({
      position: washington_pos,
      map: map,
    });

    const mexico = new google.maps.Marker({
      position: mexico_pos,
      map: map,
    });




    const beijing_in = new google.maps.InfoWindow({

      content: "<h1>Beijing<h1> <h2>Beijing duck<h2> <a href='https://www.google.com/search?q=best+beijing+restaurants&rlz=1C1GCEU_enCZ1002CZ1002&oq=best+beiji&aqs=chrome.1.69i57j0i512j0i22i30l8.5282j0j7&sourceid=chrome&ie=UTF-8'><img src='images.jfif'><a/>"
      
    
      
    })

    const czech_in = new google.maps.InfoWindow({

      content: "<h1>Prague<h1> <h2>svickova<h2> <a href=''><img src='download.jfif'><a/>"
      
    
      
    })
    
    const washington_in = new google.maps.InfoWindow({

      content: "<h1>Washington<h1> <h2>burger<h2> <a href=''><img src='hamburger.jpg'><a/>"
      
    
      
    })

    const mexico_in = new google.maps.InfoWindow({

      content: "<h1>Mexico city<h1> <h2>Burrito<h2> <a href=''><img src='burrito.jpg'><a/>"
      
    
      
    })



      beijing.addListener("click", () =>{
      beijing_in.open(map,beijing)

    })

    czech.addListener("click", () =>{
      czech_in.open(map,czech)

    })
    washington.addListener("click", () =>{
      washington_in.open(map,washington)

    })
    mexico.addListener("click", () =>{
      mexico_in.open(map,mexico)

    })
  }
 
  
  window.initMap = initMap;
  