import filledSlot from "../../assets/VTT/Filled_Slot.svg"
import unfilledSlot from "../../assets/VTT/Unfilled_Slot.svg"
import corruptedSlot from "../../assets/VTT/Corrupted_Slot.svg"

export default function Organ_attribute(props)
{
    const {organName, description, slotInfo, displaySlots, slots, handleClick, diceRoll } = props

        return (   
            <div>
                <div onClick={diceRoll} className="organ-header-container">
                    <h2 className="organ-header">{organName}</h2>
                </div>
                <div onClick={handleClick}>
                    {slots}
                </div>
                <p className="attribute-description">{description}</p>
            </div>
        )
}