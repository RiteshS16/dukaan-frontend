import React from "react";
import serachtopdiv from '../icons/SearchTopDiv.svg'
import sorttableicon from '../icons/SortTableIcon.svg'
import downloadtableicon from "../icons/DownloadTableIcon.png"


export default function GlobalFilter({filter,setFilter}){
    return(
        <div style={{display:'flex', justifyContent:'space-between',alignItems:'center',paddingBottom:'10px'}}>
        <span style={{border:'solid LightGrey',borderRadius:'3px', display:'flex'}}>
            <div style={{padding:'5px',textAlign:'center'}}>
                <img style={{paddingTop:'2px'}} src={serachtopdiv} />
            </div>
            <input style={{flex: '1 1 0', outline:'none' ,border:'transparent', color: '#999999', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}
            placeholder="Search by order ID" value={filter||''}
            onChange={(e)=>{setFilter(e.target.value)}} />
        </span>
        <div style={{display:'flex',gap:'0px 10px'}}>
            <div className="buttonIcon" style={{display:'flex' ,color: '#4D4D4D',borderRadius:'3px', border:'solid LightGrey', fontSize: 16,fontFamily: 'Inter',fontWeight: '400',wordWrap: 'break-word',textAlign:'center',padding:'5px 10px'}}>
                <div style={{display:'flex',alignItems:'center'}}>Sort</div>
                <div style={{padding:'4px',display:'flex',alignItems:'center'}}>
                    <img src={sorttableicon}/>
                </div>
            </div>
            <div className="buttonIcon" style={{display:'flex',borderRadius:'3px' ,color: '#4D4D4D', border:'solid LightGrey', fontSize: 16,fontFamily: 'Inter',fontWeight: '400',wordWrap: 'break-word',textAlign:'center',padding:'5px 10px'}}>
                <img src={downloadtableicon} />
            </div>
        </div>
        </div>
    );
}