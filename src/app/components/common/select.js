import React from 'react';

const Select = (props) => {
    if(!props.data.Value){
        if(props.data.FieldValues[0].Code != "please select" )
        props.data.FieldValues.unshift({"Code":"please select","Desc":"Please select"})
    }
    return (
        <div className="answer">
            <select className={"form-control" + (props.data.isValid==false?' errorMsg':'')} style={{width:'auto'}}  value={props.data.Value}
            onChange={(event)=>props.events(props.clientProductId,props.clientProductId+"-"+props.qId,props.categoryName,event,props.caption)} >
                {

                    props.data.FieldValues.map((c, i) => {
                        return <option key={i} value={c.Code}>{c.Desc}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select
