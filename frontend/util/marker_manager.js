
class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick
        this.markers = {}
    }

    createMarkerFromAddress(newProp) {
        const position = new google.maps.LatLng(newProp.address.lat, newProp.address.lng)
        const content = '<div class="marker-info">' + `<img src=${newProp.property.photoUrls[0]} class='marker-photo' />` +
        `<h1 class='marker-header'>${newProp.property.name}</h1>` +
            `<div class='marker-baseline'> <p>$${newProp.property.price} / night</p> <p> ${newProp.property.typeOfPlace}</p></div>`
        
        
        + '</div>'
        const infoWindow = new google.maps.InfoWindow({
            content: content
        })
        const marker = new google.maps.Marker({
            position,
            propertyId: newProp.id,
            map: this.map,
            
        })
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')
        marker.addListener('mouseover', () => {
            infoWindow.open(this.map, marker)
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
        })
        marker.addListener('mouseout', () => {
            infoWindow.close(this.map, marker)
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')
        })
        marker.addListener('click', (e) => {
            this.handleClick(marker.propertyId)
        })
        

        // marker.addListener('click', () => this.handleClick(property))
        this.markers[marker.propertyId] = marker
        
    }

    updateMarkers(properties, addresses) {
        
        const propertiesArray = Object.values(properties)
        const addressesArray = Object.values(addresses)
        propertiesArray.forEach(property => {
            const currentAddress = addressesArray.find(add => add.id == property.addressId)
            
            const newProp = {id: property.id, property: property, address: currentAddress}
            if (!this.markers[newProp.id]) {
                this.createMarkerFromAddress(newProp)
            }
        })

        Object.keys(this.markers).filter(propId => !properties[propId])
            .forEach(propId => this.removeMarker(this.markers[propId]))

    }

    removeMarker(marker) {
        
        this.markers[marker.propertyId].setMap(null);
        delete this.markers[marker.propertyId]
    }

}

export default MarkerManager;