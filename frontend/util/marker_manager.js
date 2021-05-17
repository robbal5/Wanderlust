
class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick
        this.markers = {}
    }

    createMarkerFromAddress(newProp) {
        debugger
        const position = new google.maps.LatLng(newProp.address.lat, newProp.address.lng)
        const content = '<div class="marker-info">' + `<h1 class='marker-header'>${newProp.property.name}</h1>` + '</div>'
        const infoWindow = new google.maps.InfoWindow({
            content: content
        })
        const marker = new google.maps.Marker({
            position,
            propertyId: newProp.id,
            map: this.map
        })
        marker.addListener('mouseover', () => {
            infoWindow.open(this.map, marker)
        })
        marker.addListener('mouseout', () => {
            infoWindow.close(this.map, marker)
        })
        debugger

        // marker.addListener('click', () => this.handleClick(property))
        this.markers[marker.propertyId] = marker
        debugger
    }

    updateMarkers(properties, addresses) {
        debugger;
        const propertiesArray = Object.values(properties)
        const addressesArray = Object.values(addresses)
        propertiesArray.forEach(property => {
            const currentAddress = addressesArray.find(add => add.id == property.addressId)
            debugger;
            const newProp = {id: property.id, property: property, address: currentAddress}
            if (!this.markers[newProp.id]) {
                this.createMarkerFromAddress(newProp)
            }
        })

        Object.keys(this.markers).filter(propId => !properties[propId])
            .forEach(propId => this.removeMarker(this.markers[propId]))

    }

    removeMarker(marker) {
        debugger;
        this.markers[marker.propertyId].setMap(null);
        delete this.markers[marker.propertyId]
    }

}

export default MarkerManager;