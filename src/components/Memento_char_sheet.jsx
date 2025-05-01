import {useState, useEffect} from 'react'
import Organ_attribute from "./memento_mori_components/Organ_Attribute"
import filledSlot from "../assets/VTT/Filled_Slot.svg"
import unfilledSlot from "../assets/VTT/Unfilled_Slot.svg"
import corruptedSlot from "../assets/VTT/Corrupted_Slot.svg"
import progressBoxEmpty from "../assets/VTT/Progress_Box_Unfilled.svg"
import progressDiamond from "../assets/VTT/Progress_Diamond.svg"
export default function Memento_char_sheet(character)
{
    const {name, giftName, bloodCorruption, stigmata, equipment, dream, mark, bonds, giftBonds, virtues, giftVirtues } = character

    const [bloodCorruptionState, setBloodCorruptionState]=useState(1)

    function displayBloodCorruption(corruptedSlots)
    {
        /**
         * I need to display a number of filled slots, or corrupted slots based on the imported values.
         * 
         * Important: Blood always has 3 slots and one is ALWAYs corrupted. I may not need a "slots" attribute at all. When Blood is fully corrupted (corruption => 3), set corrupted slots to 1, gain 1 Drifter Corruption, then continue adding corruption until the receiving trauma is set to zero. ALWAYS depict blood corruption from left to right
         
         * @param {integer} corruptedSlotValue - Corrupted Slot value can never be more than 2 or less than 1.
         * @returns {jsx}  JSX displaying HTML for the correct number of corrupted  and uncorrupted blood slots
         * 
         * Steps
         * - Given the number corrupted slots, display a number of images for corrupted slots.
         * - calculate the remaining number of slots that are uncorrupted
         * - show an uncorrupted image for each number of remaining slots
         */

        const corrupted = corruptedSlots
        const corruptedImage =  <img className="img-slot-icon" src={corruptedSlot} />
        const uncorruptedImage = <img className="img-slot-icon" src={filledSlot} />
        let bloodSlots = []
        let filledToShow = 3 - corrupted
        if(filledToShow <= 0)
        {
            console.error("Blood cannot have less than 2 corruption")
        }
        
        for(let i=1; i<=corrupted; i++ )
        {
            bloodSlots.push(corruptedImage) 
        }

        for(let i=1; i<=filledToShow; i++)
        {
            bloodSlots.push(uncorruptedImage)
        }
        return bloodSlots
    }

return (
    <div id="char-sheet-container" className="flex">
        {/* First Column */}
        <div>
            <div id='name-attribute-container' className="flex align-baseline">
                <div>
                    <h2 id="name-header" className="header">Name</h2>
                    <img className="img-slot-icon" src={filledSlot} alt="A filled slot without corruption for the character's name" />
                    <img className="img-slot-icon" src={filledSlot} alt="A filled slot without corruption for the character's name" />
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
                <Organ_attribute 
                    variant
                    organName="Blood"
                    corruption={displayBloodCorruption(bloodCorruption)}
                    description="Your overall physical and mental condition"
                />
            </div>
            <div id="organ-attribute-container">
                <div className="organs">
                    <Organ_attribute
                        organName="Nerves"
                        description="Instinct above all"
                    />
                    <Organ_attribute
                        organName="Cerebrum"
                        description="Reason at any cost"
                    />
                </div>
                <div className="organs">
                    <Organ_attribute
                        organName="Heart"
                        description="A life devoted to others"
                    />
                    <Organ_attribute
                        organName="Viscera"
                        description="A life of self-interest"
                    />
                </div>
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
                    <img className="img-slot-icon" src={filledSlot} />
                    <img className="img-slot-icon" src={filledSlot} />
                    <p>{bonds[0].memory}</p>
                    <p>{bonds[0].phrase}</p>
                </div>
                <div id="bond-2">
                    <img className="img-slot-icon" src={filledSlot} />
                    <img className="img-slot-icon" src={filledSlot} />
                    <p>{bonds[1].memory}</p>
                    <p>{bonds[1].phrase}</p>
                </div>
                <div id="bond-3">
                    <img className="img-slot-icon" src={filledSlot} />
                    <img className="img-slot-icon" src={filledSlot} />
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
                    <img className="img-slot-icon" src={filledSlot} />
                    <img className="img-slot-icon" src={filledSlot} />
                    <p>{virtues[0].description}</p>
                </div>
                <div id="virtue-2">
                    <img className="img-slot-icon" src={filledSlot} />
                    <img className="img-slot-icon" src={filledSlot} />
                    <p>{virtues[1].description}</p>
                </div>
                <div id="virtue-3">
                    <img className="img-slot-icon" src={filledSlot} />
                    <img className="img-slot-icon" src={filledSlot} />
                    <p>{virtues[2].description}</p>
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