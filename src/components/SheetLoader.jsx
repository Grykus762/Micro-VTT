import { useState, useEffect } from 'react'
import Foundry_sidebar from "./Foundry_sidebar";
import Memento_char_sheet from "./Memento_char_sheet";
import { marks, blankCharacter } from "../helper_functions/mementoMoriHelpers.js"
import '../Sheetloader.css'

export default function SheetLoader()
{
    const displayMarkInfo = marks.map(mark=> 
        {
            const keywords = mark.keywords.join(", ")
            console.log(keywords)
            return (
            <div className='marks-container'>
                <input type='radio' id={mark.name} name="characterMark" value={mark.value} />
                <div className='marks-info'>
                    <label htmlFor={mark.name}>{mark.value}
                        <p><strong>Keywords:</strong> {keywords}</p>
                    </label>
                </div>
                
            </div>
            )
        })
    
      const [memMoriChar, setMemMoriChar] = useState(blankCharacter)
      const [navigateToSheet, setNavigateToSheet] = useState(false)

      const characterDataExists = JSON.parse(localStorage.getItem("characterExists"))
      console.log("Character Data Exists Boolean: ", characterDataExists)
      const foundCharacter = JSON.parse(localStorage.getItem("character"))
      console.log(foundCharacter)

      const sheet= <div id="main-container">
        <Memento_char_sheet
        name={memMoriChar.name}
        epithet={memMoriChar.epithet}
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
        display = {returnToForm}
        />
        <Foundry_sidebar />
      </div>
      const organPointsMax = 3;
      const startingOrganSlots = 1
      let organPointsSpent = 0
      const characterCreatorForm = <div id='character-creation-form'>
       <form action={createCharacter}>
            <input type="submit" value="Save Character Data"/>
            <h2>Character Name Information</h2>
            <div className='attribute-container'>
                <div className='form-flex'>
                    <label htmlFor="characterName">Character's First Name</label>
                    <input type='text' id="characterName" name='characterName' placeholder="Annie" defaultValue='Annie' />
                </div>
                <div className='form-flex'>
                    <label htmlFor="characterEpithet">Character's Epithet</label>
                    <input type="text" id="characterEpithet" name='characterEpithet' placeholder="the Fleeting Shadow" defaultValue='the Fleeting Shadow' />
                </div>
            </div>
            <h2>Character's Dream</h2>
            <div className='attribute-container'>
                <div className='form-flex'>
                    <label htmlFor="characterDream">Character's Dream</label>
                    <textarea id="characterDream" name='characterDream' placeholder="Becoming a knight, curing my sick daughter, composing the greatest ballad of my era " defaultValue="Become a knight"></textarea>
                </div>
            </div>
            <h2>Character's Mark</h2>
            <div className='attribute-container'>
                <div className='form-flex'>
                    {displayMarkInfo}
                </div>
            </div>
            
            <h2>Set Organ Values</h2>
            <div className='attribute-container'>
                <div className='flex column'>
                    <h3>Organ Points Spent: {organPointsSpent}</h3>
                    <h3>Organ Points Remaining: {organPointsMax-organPointsSpent}</h3>
                </div>
                <div>
                    <div className='flex'>
                        <div className='organ-container'>
                            <h3>Nerves</h3>
                            <label htmlFor='characterNerves'>Nerves Attribute Value</label>
                            <input type="number" id="characterNerves" name="characterNerves" min="0" max="3" defaultValue={1} />
                        </div>
                        <div className='organ-container'>
                            <h3>Cerebrum</h3>
                            <label htmlFor='characterCerebrum'>Cerebrum Attribute Value</label>
                            <input type="number" id="characterCerebrum" name="characterCerebrum" min="0" max="3" defaultValue={1}/>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='organ-container'>
                            <h3>Heart</h3>
                            <label htmlFor='characterHeart'>Heart Attribute Value</label>
                            <input type="number" id="characterHeart" name="characterHeart" min="0" max="3" defaultValue={1}/>
                        </div>
                        <div className='organ-container'>
                            <h3>Viscera</h3>
                            <label htmlFor='characterViscera'>Viscera Attribute Value</label>
                            <input type="number" id="characterViscera" name="characterViscera" min="0" max="3" defaultValue={0} />
                        </div>
                    </div>
                </div>
                

            </div>
            
            <h3>Bonds</h3>
            <div>
                <p>Bond example:</p>
                <p>Bond Memory: "My trusty needle"</p>
                <p>Bond Key-phrase: "there's nothing I can't mend</p>

                <label htmlFor='charBondMemory1'>Bond Slot 1 - Memory</label>
                <input type="textbox" id="charBondMemory1" name="charBondMemory1" defaultValue='My trusty needle' />

                <label htmlFor='charKeyPhrase1'>Bond Slot 1 - Key-Phrase</label>
                <input type="textbox" id="charKeyPhrase1" name="charKeyPhrase1" defaultValue="Nothing I can't mend" />

                <label htmlFor='charBondMemory2'>Bond Slot 2 - Memory</label>
                <input type="textbox" id="charBondMemory2" name="charBondMemory2" />

                <label htmlFor='charKeyPhrase2'>Bond Slot 2 - Key-Phrase</label>
                <input type="textbox" id="charKeyPhrase2" name="charKeyPhrase2" />

                <label htmlFor='charBondMemory3'>Bond Slot 3 - Memory</label>
                <input type="textbox" id="charBondMemory3" name="charBondMemory3" />

                <label htmlFor='charKeyPhrase3'>Bond Slot 3 - Key-Phrase</label>
                <input type="textbox" id="charKeyPhrase3" name="charKeyPhrase3" />
            </div>

            <h3>Virtues</h3>
            <label htmlFor='charVirtue1'>Virtue 1</label>
            <input type="textbox" id="charVirtue1" name="charVirtue1" />

            <label htmlFor='charVirtue2'>Virtue 2</label>
            <input type="textbox" id="charVirtue2" name="charVirtue2" />

            <label htmlFor='charVirtue3'>Virtue 3</label>
            <input type="textbox" id="charVirtue3" name="charVirtue3" />

            <p>Set Equipment</p>
       </form>
      </div>

      function handleClick()
      {
        setNavigateToSheet(true)
      }

      function createCharacter(formData)
      {
        console.log(formData)  
        const charNameForm = formData.get("characterName")
        const charEpithetForm = formData.get("characterEpithet")
        
        const charDreamForm = formData.get("characterDream")
        const charMarkForm = formData.get("characterMark")

        const charNervesForm = formData.get("characterNerves")
        const charCerebrumForm = formData.get("characterCerebrum")
        const charHeartForm = formData.get("characterHeart")
        const charVisceraForm = formData.get("characterViscera")

        const characterData = blankCharacter
        characterData.name.name = charNameForm
        characterData.name.epithet = charEpithetForm
        characterData.dream = charDreamForm
        characterData.mark.name = charMarkForm
        //loop through organs
        characterData.organs.forEach(data=>
            {
                if (data.organName === "Nerve")
                {
                    console.log(typeof charNervesForm)
                    const charNervesValue = parseInt(charNervesForm)
                    data.slots = (charNervesValue + startingOrganSlots)
                }

                else if (data.organName === "Cerebrum")
                {
                    const charCerebrumValue = parseInt(charCerebrumForm)
                    data.slots = (charCerebrumValue + startingOrganSlots)
                }
                else if (data.organName === "Heart")
                {
                    const charHeartValue = parseInt(charHeartForm)
                    data.slots = (charHeartValue + startingOrganSlots)
                }
                else
                {
                    const charVisceraValue = parseInt(charVisceraForm)
                    data.slots = (charVisceraValue + startingOrganSlots)
                }
            })

        setMemMoriChar(characterData)

        localStorage.setItem("characterExists", JSON.stringify(true))
        const charName = charNameForm + " " + charEpithetForm
        console.log(charName)
        localStorage.setItem("character", JSON.stringify(characterData))

        characterData.name.name =charName
      }
    const display = navigateToSheet? sheet: characterCreatorForm
    
    function returnToForm()
    {
        setNavigateToSheet(false)
    }
    return (
        <>
           {display}
        </>
    )
}