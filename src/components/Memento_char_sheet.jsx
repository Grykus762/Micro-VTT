/**
 * React Imports
 */
import {useState, useEffect} from 'react'
/**
 * Foundry Imports
 */
import Foundry_sidebar from './Foundry_sidebar.jsx'
/**
 * Memento Mori Asset Imports
 */
import filledSlot from "../assets/VTT/Filled_Slot.svg"
import unfilledSlot from "../assets/VTT/Unfilled_Slot.svg"
import corruptedSlot from "../assets/VTT/Corrupted_Slot.svg"
import progressBoxEmpty from "../assets/VTT/Progress_Box_Unfilled.svg"
import progressDiamond from "../assets/VTT/Progress_Diamond.svg"
/**
 * Helper Imports
 */
import { marks, blankCharacter, displaySlots } from "../helper_functions/mementoMoriHelpers.js"
/**
 * Component Imports
 */
import Memento_Char_Header from './memento_mori_components/Memento_Char_Header.jsx'
import Organ_Attribute from "./memento_mori_components/Organ_Attribute.jsx"




export default function Memento_char_sheet(character)
{
    /**
     * States
     */
    const [memMoriChar, setMemMoriChar] = useState(blankCharacter)
    const [charName, setCharName] = useState(memMoriChar.name)
    const [bloodInfo, setbloodInfo] = useState(memMoriChar.blood)
    const [nerveInfo, setNerveInfo] = useState(memMoriChar.organs.nerve)
    const [cerebrumInfo, setCerebrumInfo] = useState(memMoriChar.organs.cerebrum)
    const [heartInfo, setHeartInfo] = useState(memMoriChar.organs.heartart)
    const [visceraInfo, setVisceraInfo] = useState(memMoriChar.organs.viscera)
    const [bondsInfo, setBondsInfo] = useState(memMoriChar.bonds)
    const [virtuesInfo, setVirtuesInfo] = useState(memMoriChar.virtues)

    const charOrgans=memMoriChar.organs.map(organ=> <Organ_Attribute
        organName={organ.organName}
        key={organ.organName}
        slots={displaySlots( organ.corruption,organ.slots)}
        description={organ.description}
        handleClick={()=>handleSlotClick(bloodInfo.corrupted)}
        diceRoll={()=>handleDiceRoll()}
         /> )
    const charBlood = <Organ_Attribute 
        variant
        organName="Blood"
        slotInfo={bloodInfo}
        displaySlots={()=>displaySlots(bloodInfo.corrupted, bloodInfo.slots, bloodInfo.maxSlots)}
        slots={displaySlots(bloodInfo.corrupted, bloodInfo.slots, bloodInfo.maxSlots)}
        description="Your overall physical and mental condition"
        handleClick={()=>handleSlotClick(bloodInfo.corrupted)}
        diceRoll={()=>handleDiceRoll()}
    />

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
    <>
        <Memento_Char_Header />
        <div id='main-container'>
            <div id="char-sheet-container" className="flex">
                {/* First Column */}
                <div>
                    <div id='name-attribute-container' className="flex align-baseline">
                        <div>
                            <h2 id="name-header" className="header">Name</h2>
                            {displaySlots(charName.corrupted, charName.slots,charName.maxSlots)}
                        </div>
                        <div id="char-name" className="header">
                            <h3>{charName.name}</h3>
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
                            <p>{memMoriChar.giftName.description}</p>
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
                        <p>{memMoriChar.stigmata.description}</p>
                    </div>
                    <div>
                        <h2>Equipment</h2>
                        <p>{memMoriChar.equipment}</p>
                    </div>
                </div>
                {/* Second Column */}
                <div>
                    <div>
                        <h2>Dream</h2>
                        <p>{memMoriChar.dream}</p>
                        <p className="attribute-description">Your last ambition</p>
                    </div>
                    <div>
                        <h2>Mark</h2>
                        <p>{memMoriChar.mark.name}</p>
                        <p>Keywords: {memMoriChar.mark.keywords}</p>
                        <p className="attribute-description">The Sign placed on you by the curse</p>
                    </div>
                    <h2>Bonds</h2>
                    <div id="bonds-container" className="flex">
                        
                        <div id="bond-1">
                            {displaySlots(bondsInfo[0].corrupted, bondsInfo[0].slots, bondsInfo[0].maxSlots)}
                            <p>{bondsInfo[0].memory}</p>
                            <p>{bondsInfo[0].phrase}</p>
                        </div>
                        <div id="bond-2">
                            {displaySlots(bondsInfo[1].corrupted, bondsInfo[1].slots, bondsInfo[1].maxSlots)}  
                            <p>{bondsInfo[1].memory}</p>
                            <p>{bondsInfo[1].phrase}</p>
                        </div>
                        <div id="bond-3">
                            {displaySlots(bondsInfo[2].corrupted, bondsInfo[2].slots, bondsInfo[2].maxSlots)}
                            <p>{bondsInfo[2].memory}</p>
                            <p>{bondsInfo[2].phrase}</p>
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
            <Foundry_sidebar />
        </div>
    </>
)
}