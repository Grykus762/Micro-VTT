import { useState, useEffect } from 'react'
import Foundry_sidebar from "./Foundry_sidebar";
import Memento_char_sheet from "./Memento_char_sheet";

export default function SheetLoader()
{
    const blankCharacter =  {
        "name": {
            "name": "Name",
            "slots": 2,
            "maxSlots": 2,
            "corrupted": 0
        },
        "giftName": {
            "description": "This Gift has not been unlocked yet",
            "progress": 0
        },
        "blood": {
            "slots": 2,
            "maxSlots": 3,
            "corrupted": 1
        },
        "organs":[
            {
                "organName": "Nerve",
                "slots": 1,
                "corruption": 0,
                "description":"Instinct above all"
            },
            {
                "organName": "Cerebrum",
                "slots": 1,
                "corruption": 0,
                "description": "Reason at any cost"
            },
            {
                "organName": "Heart",
                "slots": 1,
                "corruption": 0,
                "description": "A life devoted to others"
            },
            {
                "organName": "Viscera",
                "slots": 1,
                "corruption": 0,
                "description": "A life of self-interest"
            },           
        ],
        "stigmata":
        {
            "charges": 0,
            "description": "You have not unlocked a Stigmata yet",
        },
        "equipment": "Your equipment has not been set",
        "dream": "Your ambition has not been set",
        "mark": {
            "name": "You do not show any signs of the curse",
            "keywords": "The Keywords of your mark have not been set yet"
        },
        "bonds":[
            {"memory": "This memory has not been set",
            "phrase": "First you need a memory",
            "slots": 2,
            "maxSlots": 2,
            "corrupted": 0
            },
            {"memory": "This memory has not been set",
            "phrase": "First you need a memory",
            "slots": 2,
            "maxSlots": 2,
            "corrupted": 0
            },
            {"memory": "This memory has not been set",
            "phrase": "First you need a memory",
            "slots": 2,
            "maxSlots": 2,
            "corrupted": 0
            }
        ],
        "giftBonds":
        {
            "description": "This Gift has not been unlocked yet",
            "progress": 0
        },
        "virtues":[{
            "description": "This virtue has not been assigned yet",
            "slots": 2,
            "maxSlots": 2,
            "corrupted": 0
        },
        {
            "description": "This virtue has not been assigned yet",
            "slots": 2,
            "maxSlots": 2,
            "corrupted": 0
        },
        {
            "description": "This virtue has not been assigned yet",
            "slots": 2,
            "maxSlots": 2,
            "corrupted": 0
        }],
        "giftVirtues":
        {
            "description": "This Gift has not been unlocked yet",
            "slots": 2,
            "maxSlots": 2,
            "corrupted": 0
        },
      }
      const [memMoriChar, setMemMoriChar] = useState(blankCharacter)
      const [navigateToSheet, setNavigateToSheet] = useState(false)

      const sheet= <div id="main-container">
        <Memento_char_sheet
        name={memMoriChar.name}
        giftName={memMoriChar.giftName}
        organs={memMoriChar.organs}
        blood = {memMoriChar.blood}
        nerve = {memMoriChar.organs.nerve}
        cerebrum = {memMoriChar.organs.cerebrum}
        heart = {memMoriChar.organs.heart}
        viscera = {memMoriChar.organs.viscera}
        stigmata = {memMoriChar.stigmata}
        equipment = {memMoriChar.equipment}
        dream = {memMoriChar.dream}
        mark = {memMoriChar.mark}
        bonds = {memMoriChar.bonds}
        giftBonds = {memMoriChar.giftBonds}
        virtues = {memMoriChar.virtues}
        giftVirtues = {memMoriChar.giftVirtues}
        />
        <Foundry_sidebar />
      </div>

      const characterCreatorForm = <>
       <h2>Do you want to create a character or use a blank character sheet?</h2>
       <button>Create Character</button>
       <button onClick={()=>handleClick()}>Take me to a blank character sheet</button>
       <form>
            <label for="characterName">Character Name</label>
            <input type='text' id="characterName" name='characterName' />
            <input type="submit" onClick={handleSubmit} value="Save Character Data"/>
            <p>Set Dream</p>
            <p>Set Mark</p>
            <p>Set character Organ Values</p>
            <p>Organ Points Spent: 0</p>
            <p>Organ Points Remaining: 3</p>
            <p>Set Bond 1 Memory</p>
            <p>Set Bond 1 Key-Phrase</p>
            <p>Set Virtue 1 Memory</p>
            <p>Set Virtue 1 Key-Phrase</p>
            <p>Set Equipment</p>
       </form>
      </>

      function handleClick()
      {
        setNavigateToSheet(true)
      }

      function handleSubmit(event)
      {
        console.log("submitted")
        console.log(event)
        event.preventDefault()
      }

      const display = navigateToSheet? sheet: characterCreatorForm
    return (
        <>
           {display}
        </>
    )
}