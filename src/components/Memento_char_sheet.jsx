import Organ_attribute from "./memento_mori_components/Organ_Attribute"
import filledSlot from "../assets/VTT/Filled_Slot.svg"
import unfilledSlot from "../assets/VTT/Unfilled_Slot.svg"
import corruptedSlot from "../assets/VTT/Corrupted_Slot.svg"
export default function Memento_char_sheet()
{
return (
    <div id="char-sheet-container">
        <div id='name-attribute-container' className="two-col align-baseline">
            <div>
                <h2 id="name-header">Name</h2>
                <img className="img-slot-icon" src={filledSlot} alt="A filled slot without corruption for the character's name" />
                <img className="img-slot-icon" src={filledSlot} alt="A filled slot without corruption for the character's name" />
            </div>
             <div id="char-name">
                <h3>Character Name Here: Needs an input or form to submit and replace</h3>
                <p className="attribute-description">Your Name and an epithet that represents you</p>
             </div>
        </div>
        <div className="two-col align-baseline">
                <h2>Gift of the Name</h2>
            <div>
                <p>Textbox here that allows PCs to enter their gift of the name</p>
                <p className="attribute-description"> Which new identity will emerge after you sacrifice your Name?</p>
            </div>
        </div>
        <div id="blood-attribute">
            <Organ_attribute 
                variant
                organName="Blood"
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
        
    </div>
)

}