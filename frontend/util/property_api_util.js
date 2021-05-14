export const requestProperties = (filters) => {
    
    return $.ajax({
        method: 'GET',
        url: '/api/properties',
        data: {filters},
    })
}

export const requestProperty = (propertyId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/properties/${propertyId}`
    })
}