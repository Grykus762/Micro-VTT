import Organ_attribute from "./memento_mori_components/Organ_Attribute"
import filledSlot from "../assets/VTT/Filled_Slot.svg"
import unfilledSlot from "../assets/VTT/Unfilled_Slot.svg"
import corruptedSlot from "../assets/VTT/Corrupted_Slot.svg"
import progressBoxEmpty from "../assets/VTT/Progress_Box_Unfilled.svg"
import progressDiamond from "../assets/VTT/Progress_Diamond.svg"
export default function Memento_char_sheet()
{

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
                    <h3>Character Name Here: Needs an input or form to submit and replace</h3>
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
            <div>
                <h2 id="stigmata-header">Stigmata</h2>
                <p>Stigmata Charges Here</p>
            </div>
            <div>
                <h2>Equipment</h2>
                <p>Equipment here</p>
            </div>
        </div>
        {/* Second Column */}
        <div>
            <div>
                <h2>Dream</h2>
                <p>YOUR DREAM TEXT HERE</p>
                <p className="attribute-description">Your last ambition</p>
            </div>
            <div>
                <h2>Mark</h2>
                <p>YOUR MARK TEXT HERE</p>
                <p className="attribute-description">The Sign placed on you by the curse</p>
            </div>
            <h2>Bonds</h2>
            <div id="bonds-container" className="flex">
                
                <div id="bond-1">
                    <img className="img-slot-icon" src={filledSlot} />
                    <img className="img-slot-icon" src={filledSlot} />
                    <p>Bond 1 Memory</p>
                    <p>Bond 1 Key-Phrase</p>
                </div>
                <div id="bond-2">
                    <img className="img-slot-icon" src={filledSlot} />
                    <img className="img-slot-icon" src={filledSlot} />
                    <p>Bond 2 Memory</p>
                    <p>Bond 2 Key-Phrase</p>
                </div>
                <div id="bond-3">
                    <img className="img-slot-icon" src={filledSlot} />
                    <img className="img-slot-icon" src={filledSlot} />
                    <p>Bond 3 Memory</p>
                    <p>Bond 3 Key-Phrase</p>
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
                    <p>Virtue 1 Memory</p>
                    <p>Virtue 1 Key-Phrase</p>
                </div>
                <div id="virtue-2">
                    <img className="img-slot-icon" src={filledSlot} />
                    <img className="img-slot-icon" src={filledSlot} />
                    <p>Virtue 2 Memory</p>
                    <p>Virtue 2 Key-Phrase</p>
                </div>
                <div id="virtue-3">
                    <img className="img-slot-icon" src={filledSlot} />
                    <img className="img-slot-icon" src={filledSlot} />
                    <p>Virtue 3 Memory</p>
                    <p>Virtue 3 Key-Phrase</p>
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