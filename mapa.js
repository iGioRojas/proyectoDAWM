$(document).ready(function () {
    //Click al boton para pedir permisos
                $("#pedirvan").click(function () {
    //Si el navegador soporta geolocalizacion
    if (!!navigator.geolocation) {
    //Pedimos los datos de geolocalizacion al navegador
                        navigator.geolocation.getCurrentPosition(
    //Si el navegador entrega los datos de geolocalizacion los imprimimos
    function (position) {
    
                                    const tilesProvider = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png';

                                    var mymap = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
                                    let marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);

                                    L.tileLayer(tilesProvider, {
                                        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                                        maxZoom: 18,
                                        id: 'mapbox/streets-v11',
                                        tileSize: 512,
                                        zoomOffset: -1,
                                        accessToken: 'your.mapbox.access.token'
                                    }).addTo(mymap);
                                },
    //Si no los entrega manda un alerta de error
    function () {
    window.alert("Necesitamos su ubicación para enviar la grúa.");
                                }
                        );
                    }
                });
    
});

