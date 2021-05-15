
class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {}
    }

    createMarkerFromAddress(address) {
        const position = new google.maps.LatLng(address.lat, address.lng)
        const marker = new google.maps.Marker({
            position,
            propertyId: address.propertyId,
            map: this.map
        })
    }

}

export default MarkerManager;