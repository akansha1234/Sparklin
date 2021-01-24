import React from 'react'
import "./Left.css"
import LeftOptions from './LeftOptions'
import AddIcon from '@material-ui/icons/Add';
function Left() {
    return (
        <div className="left">
         <LeftOptions Icon={AddIcon} title="BookStore Home"/>
         <LeftOptions Icon={AddIcon} title="Professional Books"/>
         <LeftOptions Icon={AddIcon} title="NISM/IIBF"/>
         <LeftOptions Icon={AddIcon} title="Journals"/>
         <LeftOptions Icon={AddIcon} title="Tax Compliance on DVD"/>
         <LeftOptions Icon={AddIcon} title="Taxxman Online on DVD"/>
         <LeftOptions Icon={AddIcon} title="Taxxman Online on Web"/>
         <LeftOptions Icon={AddIcon} title="E-Services"/>
         <LeftOptions Icon={AddIcon} title="E-Journals"/>
         <LeftOptions Icon={AddIcon} title="E-Books"/>
         <LeftOptions Icon={AddIcon} title="Advanced Diploma"/>
        </div>
    )
}

export default Left
