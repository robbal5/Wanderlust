
class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick
        this.markers = {}
    }

    createMarkerFromAddress(newProp) {
        
        const position = new google.maps.LatLng(newProp.address.lat, newProp.address.lng)
        const content = `<div class="marker-info ${'num'+newProp.id}">` + `<img src=${newProp.property.photoUrls[0]} class='marker-photo' />` +
        `<h1 class='marker-header'>${newProp.property.name}</h1>` +
            `<div class='marker-baseline'> <p>$${newProp.property.price} / night</p> <p> ${newProp.property.typeOfPlace}</p></div>`
        
        
        + '</div>'
        google.maps.InfoWindow.prototype.isOpen = false;
        const infoWindow = new google.maps.InfoWindow({
            content: content
        })
        const marker = new google.maps.Marker({
            position,
            propertyId: newProp.id,
            map: this.map,
            
        })
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')

        marker.addListener('click', () => {
            let listener, infoWindowDOM;
            if (infoWindow.isOpen) {
                infoWindow.isOpen = false;
                infoWindow.close(this.map, marker)
                google.maps.events.remove(listener)
            } else {
                infoWindow.isOpen = true;
                infoWindow.open(this.map, marker)
                setTimeout( () => {
                    infoWindowDOM = document.querySelector(`.${'num'+newProp.id}`)
                    listener = google.maps.event.addDomListener(infoWindowDOM, "click", () => {
                    this.handleClick(marker.propertyId)
                    })
                }, 400);
            }
        });

        marker.addListener('mouseover', () => {
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
        });

        marker.addListener('mouseout', () => {
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')
        });

        // marker.addListener('click', (e) => {
        //     this.handleClick(marker.propertyId)
        // })
        

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