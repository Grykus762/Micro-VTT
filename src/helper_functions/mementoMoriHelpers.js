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