export const requestProperties = (filters) => {
    debugger;
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