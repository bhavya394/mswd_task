import React from 'react'

const PersonInformation=({shadow,removeName})=>{

    return(
           <div>
            <table>
                <tbody>
                   <tr>
                      <td>{shadow.content} </td>
                      <td>{shadow.number}</td>
                      <td><button onClick={() => removeName(shadow.id, shadow.content)}>Delete</button></td>

                   </tr>
               </tbody>
           </table>
           </div>

    )

}

export default PersonInformation