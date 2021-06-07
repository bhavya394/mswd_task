import React from 'react'

const PersonInformation=({sort})=>{

    return(
           <div>
            <table>
                <tbody>
                   <tr>
                      <td>{sort.content} </td>
                      <td>{sort.number}</td>
                   </tr>
               </tbody>
           </table>
           </div>

    )

}

export default PersonInformation