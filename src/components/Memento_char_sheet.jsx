import {useState, useEffect} from 'react'
import Organ_attribute from "./memento_mori_components/Organ_Attribute"
import filledSlot from "../assets/VTT/Filled_Slot.svg"
import unfilledSlot from "../assets/VTT/Unfilled_Slot.svg"
import corruptedSlot from "../assets/VTT/Corrupted_Slot.svg"
import progressBoxEmpty from "../assets/VTT/Progress_Box_Unfilled.svg"
import progressDiamond from "../assets/VTT/Progress_Diamond.svg"

export default function Memento_char_sheet(character)
{
    const {name, giftName, organs, blood, nerve, cerebrum, heart, viscera, stigmata, equipment, dream, mark, bonds, giftBonds, virtues, giftVirtues } = character

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