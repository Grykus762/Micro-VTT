import {useState, useEffect} from 'react'
import { marks, blankCharacter } from "../helper_functions/mementoMoriHelpers.js"
import Organ_attribute from "./memento_mori_components/Organ_Attribute"
import filledSlot from "../assets/VTT/Filled_Slot.svg"
import unfilledSlot from "../assets/VTT/Unfilled_Slot.svg"
import corruptedSlot from "../assets/VTT/Corrupted_Slot.svg"
import progressBoxEmpty from "../assets/VTT/Progress_Box_Unfilled.svg"
import progressDiamond from "../assets/VTT/Progress_Diamond.svg"

export default function Memento_char_sheet(character)
{
    const [memMoriChar, setMemMoriChar] = useState(blankCharacter)
    //Setup to display marks on a form
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

    //Character Form Modal
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

    const name= memMoriChar.name
    const epithet=memMoriChar.epithet
    const giftName=memMoriChar.giftName
    const organs=memMoriChar.organs
    const blood = memMoriChar.blood
    const nerve = memMoriChar.organs.nerve
    const cerebrum = memMoriChar.organs.cerebrum
    const heart = memMoriChar.organs.heart
    const viscera = memMoriChar.organs.viscera
    const stigmata = memMoriChar.stigmata
    const equipment = memMoriChar.equipment
    const dream = memMoriChar.dream
    const mark = memMoriChar.mark
    const bonds = memMoriChar.bonds
    const giftBonds = memMoriChar.giftBonds
    const virtues = memMoriChar.virtues
    const giftVirtues = memMoriChar.giftVirtues

    /* States */
    const [charName, setCharName] = useState(name)
    const [bloodInfo, setbloodInfo] = useState(blood)
    const [nerveInfo, setNerveInfo] = useState(nerve)
    const [cerebrumInfo, setCerebrumInfo] = useState(cerebrum)
    const [heartInfo, setHeartInfo] = useState(heart)
    const [visceraInfo, setVisceraInfo] = useState(viscera)
    const [bondsInfo, setBondsInfo] = useState(bonds)
    const [virtuesInfo, setVirtuesInfo] = useState(virtues)

    const charOrgans=organs.map(organ=> <Organ_attribute
        organName={organ.organName}
        key={organ.organName}
        slots={displaySlots( organ.corruption,organ.slots)}
        description={organ.description}
        handleClick={()=>handleSlotClick(bloodInfo.corrupted)}
        diceRoll={()=>handleDiceRoll()}
         /> )
    const charBlood = <Organ_attribute 
        variant
        organName="Blood"
        slotInfo={bloodInfo}
        displaySlots={()=>displaySlots(bloodInfo.corrupted, bloodInfo.slots, bloodInfo.maxSlots)}
        slots={displaySlots(bloodInfo.corrupted, bloodInfo.slots, bloodInfo.maxSlots)}
        description="Your overall physical and mental condition"
        handleClick={()=>handleSlotClick(bloodInfo.corrupted)}
        diceRoll={()=>handleDiceRoll()}
    />

    /**
     * Functions
     */
    function displaySlots(corruptedSlots, filledSlots, maximumSlots = 3)
    {
        /**
         * 
         * I need to display a number of filled slots, or corrupted slots based on the imported values.
         * 
         * Organs can have a maximum of three filled slots. Unlike blood, organs can have unfilled slots that are determined by character creation. Blood slots must ALWAYS have a minimum of 1 corrupted slots, and will never have all three slots corrupted. When the third slot is corrupted, the corruption gets reset back to 1 corruption slot, and the player gets corruption in either their name, bonds, virtues, or organs
         * @param {integer} corruptedSlots - The number of slots that have been corrupted
         * @param {integer} filledSlots - The number of active and filled slots the character has
         * @const {number} maxSlots - The maximum number of slots allowed on an organ. This value is always 3
         * @returns {jsx}  JSX displaying HTML for the correct number of corrupted  and uncorrupted blood slots
         * 
         * Steps
         * - Given the number of corrupted slots, first generate the number of corrupt slots to be displayed
         * - calculate the remaining number of slots that are filled but uncorrupted and generate the images for those slots
         * For all other slots, show an image of an unfilled slot
         */
        
        const maxSlots = maximumSlots
        const emptySlots = maxSlots - corruptedSlots - filledSlots
        if(emptySlots < 0)
        {
            console.error("An error ocurred. The number of slots cannot be below zero")
        }

        let slots = []
        for (let i =1; i<=corruptedSlots;i++)
        {
            slots.push(<img className="img-slot-icon" src={corruptedSlot} />)
        }

        for (let i=1; i<=filledSlots;i++)
        {
            slots.push(<img className="img-slot-icon" src={filledSlot} />)
        }

        if(emptySlots)
        {
            for (let i=1; i<=emptySlots; i++)
            {
                slots.push(<img className="img-slot-icon" src={unfilledSlot} />)
            }
        }
        return slots
    }

    function handleSlotClick(prop)
    {
        /**
         * When clicked, console.log the corrupted slots and slots of something
         */

        console.log("Change Slot type!")
    }

    function handleDiceRoll()
    {
        console.log("Roll Dice!")
    }

return (
    <div id="char-sheet-container" className="flex">
        {/* First Column */}
        <div>
            <div id='name-attribute-container' className="flex align-baseline">
                <div>
                    <h2 id="name-header" className="header">Name</h2>
                    {displaySlots(charName.corrupted, charName.slots,charName.maxSlots)}
                </div>
                <div id="char-name" className="header">
                    <h3>{name.name}</h3>
                    <p className="attribute-description">Your Name and an epithet that represents you</p>
                </div>
            </div>
            <div className="flex align-baseline">
                <div id="gift-name-container">
                    <h3 className="header">Gift of the Name</h3>
                    <div className="progress-info-container">
                        <img className="img-progress-box" src={progressBoxEmpty} alt="An unfilled progress box" />
                        <img className="img-progress-diamond" src={progressDiamond} alt="A progress diamond" />
                        <img className="img-progress-box" src={progressBoxEmpty} alt="An unfilled progress box" />
                    </div>
                </div>
                <div>
                    <p>{giftName.description}</p>
                    <p className="attribute-description"> Which new identity will emerge after you sacrifice your Name?</p>
                </div>
            </div>
            <div id="blood-attribute">
                {charBlood}
            </div>
            <div id="organ-attribute-container">
                {charOrgans}
            </div>
            <div>
                <h2 id="stigmata-header">Stigmata</h2>
                <p>Stigmata Charges Here</p>
                <p>{stigmata.description}</p>
            </div>
            <div>
                <h2>Equipment</h2>
                <p>{equipment}</p>
            </div>
        </div>
        {/* Second Column */}
        <div>
            <div>
                <h2>Dream</h2>
                <p>{dream}</p>
                <p className="attribute-description">Your last ambition</p>
            </div>
            <div>
                <h2>Mark</h2>
                <p>{mark.name}</p>
                <p>Keywords: {mark.keywords}</p>
                <p className="attribute-description">The Sign placed on you by the curse</p>
            </div>
            <h2>Bonds</h2>
            <div id="bonds-container" className="flex">
                
                <div id="bond-1">
                    {displaySlots(bondsInfo[0].corrupted, bondsInfo[0].slots, bondsInfo[0].maxSlots)}
                    <p>{bonds[0].memory}</p>
                    <p>{bonds[0].phrase}</p>
                </div>
                <div id="bond-2">
                    {displaySlots(bondsInfo[1].corrupted, bondsInfo[1].slots, bondsInfo[1].maxSlots)}  
                    <p>{bonds[1].memory}</p>
                    <p>{bonds[1].phrase}</p>
                </div>
                <div id="bond-3">
                    {displaySlots(bondsInfo[2].corrupted, bondsInfo[2].slots, bondsInfo[2].maxSlots)}
                    <p>{bonds[2].memory}</p>
                    <p>{bonds[2].phrase}</p>
                </div>
            </div>
            <div id="gift-bonds-container">
                <h3 className="header">Gift of the Bonds</h3>
                <div className="progress-info-container">
                    <img className="img-progress-box" src={progressBoxEmpty} alt="An unfilled progress box" />  
                    <img className="img-progress-box" src={progressBoxEmpty} alt="An unfilled progress box" />
                    <img className="img-progress-box" src={progressBoxEmpty} alt="An unfilled progress box" />
                    <img className="img-progress-box" src={progressBoxEmpty} alt="An unfilled progress box" />
                    <img className="img-progress-diamond" src={progressDiamond} alt="A progress diamond" />
                    <img className="img-progress-box" src={progressBoxEmpty} alt="An unfilled progress box" />
                    <img className="img-progress-box" src={progressBoxEmpty} alt="An unfilled progress box" />
                </div>
            </div>
            <h2 className="header">Virtues</h2>
            <div id="virtues-container">
                <div id="virtue-1">
                    {displaySlots(virtuesInfo[0].corrupted, virtuesInfo[0].slots, virtuesInfo[0].maxSlots)}
                    <p>{virtuesInfo[0].description}</p>
                </div>
                <div id="virtue-2">
                    {displaySlots(virtuesInfo[1].corrupted, virtuesInfo[1].slots, virtuesInfo[1].maxSlots)}
                    <p>{virtuesInfo[0].description}</p>
                </div>
                <div id="virtue-3">
                    {displaySlots(virtuesInfo[2].corrupted, virtuesInfo[2].slots, virtuesInfo[2].maxSlots)}
                    <p>{virtuesInfo[0].description}</p>
                </div>
            </div>
            <div id="gift-virtues-container">
                <h3 className="header">Gift of the Virtues</h3>
                <div className="progress-info-container">
                    <img className="img-progress-box" src={progressBoxEmpty} alt="An unfilled progress box" />
                    <img className="img-progress-box" src={progressBoxEmpty} alt="An unfilled progress box" />
                    <img className="img-progress-diamond" src={progressDiamond} alt="A progress diamond" />
                    <img className="img-progress-box" src={progressBoxEmpty} alt="An unfilled progress box" />
                </div>
            </div>
        </div>
        
        
    </div>
)
}