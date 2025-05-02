import { useState, useEffect } from 'react'
import Foundry_sidebar from "./Foundry_sidebar";
import Memento_char_sheet from "./Memento_char_sheet";

export default function SheetLoader()
{
    const defaultChar =  {
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
        "organs":{
            "nerve":{
                "slots": 1,
                "corrupted": 0
            },
            "cerebrum": {
                "slots": 1,
                "corrupted": 0
            },
            "heart": {
                "slots": 1,
                "corrupted": 0
            },
            
            "viscera": {
                "slots": 1,
                "corrupted": 0
                }
        },
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
      const [memMoriChar, setMemMoriChar] = useState(defaultChar)
    return (
        <div id="main-container">
            <Memento_char_sheet
            name={memMoriChar.name}
            giftName={memMoriChar.giftName}
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
    )
}