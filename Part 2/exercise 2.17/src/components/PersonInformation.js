import React from 'react'

const PersonInformation=({sort,removeName})=>{

    return(
           <div>
            <table>
                <tbody>
                   <tr>
                      <td>{sort.content} </td>
                      <td>{sort.number}</td>
                      <td><button onClick={() => removeName(sort.id, sort.content)}>Delete</button></td>

                   </tr>
               </tbody>
           </table>
           </div>

    )

}

export default PersonInformation