import React from 'react'

const PhoneBooks=({person})=>{

    return(
           <div>
            <table>
                <tbody>
                   <tr>
                      <td>{person.content} </td>
                      <td>{person.number}</td>
                   </tr>
               </tbody>
           </table>
           </div>

    )

}

export default PhoneBooks