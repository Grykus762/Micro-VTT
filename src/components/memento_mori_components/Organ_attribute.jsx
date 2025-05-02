import filledSlot from "../../assets/VTT/Filled_Slot.svg"
import unfilledSlot from "../../assets/VTT/Unfilled_Slot.svg"
import corruptedSlot from "../../assets/VTT/Corrupted_Slot.svg"

export default function Organ_attribute(props)
{
    const {organName, description, slots} = props
        return (   
            <div>
                <h2>{organName}</h2>
                {slots}                
                <p className="attribute-description">{description}</p>
            </div>
        )
}