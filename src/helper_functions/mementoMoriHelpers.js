export const marks =
[
    {
        name: "markDawn",
        value: "Mark of the Dawn",
        keywords: ['regenerating', 'radiant', 'archaic', 'pulsing', 'bright', 'warm']
    },
    {
        name: "markFerryman",
        value: "Mark of the Ferryman",
        keywords: ['initiatory', 'salvific', 'necromantic', 'sepulchral', 'solitary', 'transient']
    },
    {
        name: "markReaper",
        value: "Mark of the Reaper",
        keywords: ['cold', 'sacrificial', 'apathetic', 'impassive', 'relentless', 'dark']
    },
    {
        name: "markHunter",
        value: "Mark of the Hunter",
        keywords: ['fetid', 'vulnerable', 'inhospitable', 'rabid', 'vermilion', 'hunted']
    },
    {
        name: "markLimitless",
        value: "Mark of the Limitless",
        keywords: ['chaotic', 'elusive', 'quick', 'rebellious', 'stormy', 'unbridled']
    }
]

  export const blankCharacter =  {
        "name": {
            "name": "Name",
            "epithet": "Epithet has not been set",
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
        "organs":[
            {
                "organName": "Nerve",
                "slots": 1,
                "corruption": 0,
                "description":"Instinct above all"
            },
            {
                "organName": "Cerebrum",
                "slots": 1,
                "corruption": 0,
                "description": "Reason at any cost"
            },
            {
                "organName": "Heart",
                "slots": 1,
                "corruption": 0,
                "description": "A life devoted to others"
            },
            {
                "organName": "Viscera",
                "slots": 1,
                "corruption": 0,
                "description": "A life of self-interest"
            },           
        ],
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

// export function displaySlots(corruptedSlots, filledSlots, maximumSlots = 3)
//     {
//         /**
//          * 
//          * I need to display a number of filled slots, or corrupted slots based on the imported values.
//          * 
//          * Organs can have a maximum of three filled slots. Unlike blood, organs can have unfilled slots that are determined by character creation. Blood slots must ALWAYS have a minimum of 1 corrupted slots, and will never have all three slots corrupted. When the third slot is corrupted, the corruption gets reset back to 1 corruption slot, and the player gets corruption in either their name, bonds, virtues, or organs
//          * @param {integer} corruptedSlots - The number of slots that have been corrupted
//          * @param {integer} filledSlots - The number of active and filled slots the character has
//          * @const {number} maxSlots - The maximum number of slots allowed on an organ. This value is always 3
//          * @returns {jsx}  JSX displaying HTML for the correct number of corrupted  and uncorrupted blood slots
//          * 
//          * Steps
//          * - Given the number of corrupted slots, first generate the number of corrupt slots to be displayed
//          * - calculate the remaining number of slots that are filled but uncorrupted and generate the images for those slots
//          * For all other slots, show an image of an unfilled slot
//          */
        
//         const maxSlots = maximumSlots
//         const emptySlots = maxSlots - corruptedSlots - filledSlots
//         if(emptySlots < 0)
//         {
//             console.error("An error ocurred. The number of slots cannot be below zero")
//         }

//         let slots = []
//         for (let i =1; i<=corruptedSlots;i++)
//         {
//             slots.push(<img className="img-slot-icon" src={corruptedSlot} />)
//         }

//         for (let i=1; i<=filledSlots;i++)
//         {
//             slots.push(<img className="img-slot-icon" src={filledSlot} />)
//         }

//         if(emptySlots)
//         {
//             for (let i=1; i<=emptySlots; i++)
//             {
//                 slots.push(<img className="img-slot-icon" src={unfilledSlot} />)
//             }
//         }
//         return slots
//     }

export function handleName(name, epithet)
{
    /**
     * 
     * @param {string} name - The name entered by the user as the character's first name
     * @param {string} epithet - The epithet or 'title' used by the character. 
     * @return {string} - The name and epithet combined without any symbols
     * 
     * Sanitize the epithet by removing any and all characters other than letters
     * Append the epithet to the name with a space between the name and all words in the epithet
     * Return the string with the name and epithet combined
     */
}