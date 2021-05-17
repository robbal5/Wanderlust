 export const CHANGE_LOCATION = 'CHANGE_LOCATION'
 export const RESET_LOCATION = 'RESET_LOCATION'

 export const changeLocation = (center, zoom) => {
     return {
         type: CHANGE_LOCATION,
         center,
         zoom
     }
 }

 export const resetLocation = () => {
     return {
         type: RESET_LOCATION
     }
 }

 