import React from 'react'

const PersonForms=(pro)=>{

    return(
      <>
     <form onSubmit={pro.onSubmit}>
      <h2>add a new</h2>
        <div>
          name: &nbsp; &nbsp; &nbsp;<input value={pro.valueName} onChange={pro.onChangeName}/>
        </div><br/>
        <div>number:&nbsp;&nbsp;&nbsp;<input type='tel' pattern="[0-9\-]+" value={pro.valueNumber} onChange={pro.onChangeNumber}/></div>
        <div><br />
          <button type="submit">add</button>
        </div><br/>
      </form>

          </>
     

    )

}

export default PersonForms