
ymaps.ready(init);
function init(){

    var myMap = new ymaps.Map("map", {
        
        center: [51.50194270725439, -0.14214371366352593],
  
        zoom: 12
    },
      myPlacemark = new ymaps.Placemark([51.50194270725439, -0.14214371366352593], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Hungry People",
            balloonContentBody: "restaurant",
            balloonContentFooter: "+40 729 131 637",
            hintContent: "Хинт метки"
        })
      
    );
    myMap.geoObjects.add(myPlacemark);      
}

