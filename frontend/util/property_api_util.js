export const requestProperties = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/properties'
    })
}

export const requestProperty = (propertyId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/properties/${propertyId}`
    })
}