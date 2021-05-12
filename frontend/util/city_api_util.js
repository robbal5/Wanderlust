export const requestCities = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/cities'
    })
}