import React from 'react'
import './Reminder.css'
import Button from './button'
import { useState } from 'react'
const Reminder = () => {
    const [reminder, setReminder] = useState([]);
    const [newReminder, setNewReminder] = useState("");
    function handleAddContent(e){
        console.log(e.target.value);
        setNewReminder(e.target.value);
    }

    function handleAddReminder(){
        if(newReminder.trim()){
        setReminder([...reminder,newReminder]);
        }
        setNewReminder("")

    }
    function handleDeleteReminder(index){
        
        setReminder(reminder.filter((item,itemIndex)=>itemIndex!=index ))

    }

    

  return (
    <div className='container'>
        <h1 className='reminder-tag'>Reminder App</h1>
        <div className='add-remainder'>
            <input type="text" placeholder='Enter a reminder' value={newReminder}   onChange={handleAddContent}/>
            <Button color="rgb(180, 65, 69)" content="Add"  onclick={handleAddReminder} onClick={()=> handleAddReminder} />
        </div>
        { reminder.length >0 ? (
        <ul className='list-rm'>{
            reminder.map((reminder,index) => {
                return(
                <li key={index}>
                    {reminder}
                    {console.log(reminder)}
                    <Button color="rgb(74, 57, 169)" content="Delete" onClick={()=> handleDeleteReminder(index)} />
                </li>
                )
            })

        }
        </ul>) : <p className='no-reminder'>No reminders yet!</p>

    }

    </div>
  )
}

export default Reminder