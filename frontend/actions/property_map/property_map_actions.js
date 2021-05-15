 export const CHANGE_LOCATION = 'CHANGE_LOCATION'

 export const changeLocation = (pos, zoom) => {
     return {
         type: CHANGE_LOCATION,
         pos,
         zoom
     }
 }

 