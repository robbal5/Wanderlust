export const requestStates = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/states'
    })
}