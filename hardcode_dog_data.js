/**
 * ALL Lists is guaranteed to have an outcome for
 * the specific dog requirements for participants to search:
 * Case 1: adopt male, hdb-approved, < 4 years old
 * Case 2: adopt male, hdb-approved, that is 4-8 years old
 * Case 3: adopt male, hdb-approved, that is >8 years old
 *
 * at least 1 data
 * (except for small)
 * 1. Dog_Small_List  //size ~5
 * - Dog_Male_Small_List
 * - Dog_Female_Small_List
 * - Dog_LT_4_Small_List
 * - Dog_4_8_Small_List
 * - Dog_MT_8_Small_List
 * - Dog_LT_4_Male_Small_List
 * - Dog_LT_4_Female_Small_List
 * - Dog_4_8_Male_Small_List
 * - Dog_4_8_Female_Small_List
 * - Dog_MT_8_Male_Small_List
 * - Dog_MT_8_Female_Small_List
 * - Dog_HDB_approved_LT_4_Male_Small_List
 * - Dog_HDB_approved_LT_4_Female_Small_List
 * - Dog_HDB_approved_4_8_Male_Small_List
 * - Dog_HDB_approved_4_8_Female_Small_List
 * - Dog_HDB_approved_MT_8_Male_Small_List
 * - Dog_HDB_approved_MT_8_Female_Small_List
 * - Dog_not_HDB_approved_LT_4_Male_Small_List
 * - Dog_not_HDB_approved_LT_4_Female_Small_List
 * - Dog_not_HDB_approved_4_8_Male_Small_List
 * - Dog_not_HDB_approved_4_8_Female_Small_List
 * - Dog_not_HDB_approved_MT_8_Male_Small_List
 * - Dog_not_HDB_approved_MT_8_Female_Small_List
 *
 * 2. Dog_Medium_List //size ~17
 * - Dog_Male_Medium_List
 * - Dog_Female_Medium_List
 * - Dog_LT_4_Male_Medium_List
 * - Dog_LT_4_Female_Medium_List
 * - Dog_4_8_Male_Medium_List
 * - Dog_4_8_Female_Medium_List
 * - Dog_MT_8_Male_Medium_List
 * - Dog_MT_8_Female_Medium_List
 * - Dog_HDB_approved_LT_4_Male_Medium_List
 * - Dog_HDB_approved_LT_4_Female_Medium_List
 * - Dog_HDB_approved_4_8_Male_Medium_List
 * - Dog_HDB_approved_4_8_Female_Medium_List
 * - Dog_HDB_approved_MT_8_Male_Medium_List
 * - Dog_HDB_approved_MT_8_Female_Medium_List
 * - Dog_not_HDB_approved_LT_4_Male_Medium_List
 * - Dog_not_HDB_approved_LT_4_Female_Medium_List
 * - Dog_not_HDB_approved_4_8_Male_Medium_List
 * - Dog_not_HDB_approved_4_8_Female_Medium_List
 * - Dog_not_HDB_approved_MT_8_Male_Medium_List
 * - Dog_not_HDB_approved_MT_8_Female_Medium_List
 *
 * 3. Dog_Long_List  //size ~30
 * - Dog_Male_Long_List
 * - Dog_Female_Long_List
 * - Dog_LT_4_Male_Long_List
 * - Dog_LT_4_Female_Long_List
 * - Dog_4_8_Male_Long_List
 * - Dog_4_8_Female_Long_List
 * - Dog_MT_8_Male_Long_List
 * - Dog_MT_8_Female_Long_List
 * - Dog_HDB_approved_LT_4_Male_Long_List
 * - Dog_HDB_approved_LT_4_Female_Long_List
 * - Dog_HDB_approved_4_8_Male_Long_List
 * - Dog_HDB_approved_4_8_Female_Long_List
 * - Dog_HDB_approved_MT_8_Male_Long_List
 * - Dog_HDB_approved_MT_8_Female_Long_List
 * - Dog_not_HDB_approved_LT_4_Male_Long_List
 * - Dog_not_HDB_approved_LT_4_Female_Long_List
 * - Dog_not_HDB_approved_4_8_Male_Long_List
 * - Dog_not_HDB_approved_4_8_Female_Long_List
 * - Dog_not_HDB_approved_MT_8_Male_Long_List
 * - Dog_not_HDB_approved_MT_8_Female_Long_List
 */

const Dog_Small_List = {
    "dog_data": [
        {
            "age": 5,
            "date_of_birth": 2015,
            "details": "Wild, Hardworking, Dutiful",
            "gender": "M",
            "hdb_approved": 0,
            "id": 1,
            "image": "https://cdn2.thedogapi.com/images/rkiByec47_1280.jpg",
            "name": "African Hunting Dog"
        },
        {
            "age": 4,
            "date_of_birth": 2016,
            "details": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
            "gender": "F",
            "hdb_approved": 1,
            "id": 2,
            "image": "https://cdn2.thedogapi.com/images/SkFt1gc47_1280.jpg",
            "name": "American Bully"
        },
        {
            "age": 6,
            "date_of_birth": 2014,
            "details": "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous",
            "gender": "M",
            "hdb_approved": 1,
            "id": 3,
            "image": "https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg",
            "name": "Australian Terrier"
        },
        {
            "age": 11,
            "date_of_birth": 2009,
            "details": "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined",
            "gender": "M",
            "hdb_approved": 1,
            "id": 4,
            "image": "https://cdn2.thedogapi.com/images/SkvZgx94m_1280.jpg",
            "name": "Azawakh"
        },
        {
            "age": 7,
            "date_of_birth": 2013,
            "details": "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable",
            "gender": "F",
            "hdb_approved": 1,
            "id": 5,
            "image": "https://cdn2.thedogapi.com/images/HJAFgxcNQ_1280.jpg",
            "name": "Black and Tan Coonhound"
        }
    ],
    "size": 5
}

const Dog_Long_List  = {
        "dog_data": [
            {
                "age": 5,
                "date_of_birth": 2015,
                "details": "Wild, Hardworking, Dutiful",
                "gender": "M",
                "hdb_approved": 0,
                "id": 1,
                "image": "https://cdn2.thedogapi.com/images/rkiByec47_1280.jpg",
                "name": "Max"
            },
            {
                "age": 4,
                "date_of_birth": 2016,
                "details": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
                "gender": "F",
                "hdb_approved": 1,
                "id": 2,
                "image": "https://cdn2.thedogapi.com/images/SkFt1gc47_1280.jpg",
                "name": "Bella"
            },
            {
                "age": 6,
                "date_of_birth": 2014,
                "details": "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous",
                "gender": "M",
                "hdb_approved": 1,
                "id": 3,
                "image": "https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg",
                "name": "Australian Terrier"
            },
            {
                "age": 11,
                "date_of_birth": 2009,
                "details": "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined",
                "gender": "M",
                "hdb_approved": 1,
                "id": 4,
                "image": "https://cdn2.thedogapi.com/images/SkvZgx94m_1280.jpg",
                "name": "Azawakh"
            },
            {
                "age": 7,
                "date_of_birth": 2013,
                "details": "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable",
                "gender": "F",
                "hdb_approved": 1,
                "id": 5,
                "image": "https://cdn2.thedogapi.com/images/HJAFgxcNQ_1280.jpg",
                "name": "Luna"
            },
            {
                "age": 9,
                "date_of_birth": 2011,
                "details": "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm",
                "gender": "M",
                "hdb_approved": 0,
                "id": 6,
                "image": "https://cdn2.thedogapi.com/images/ry1kWe5VQ_1280.jpg",
                "name": "Boxer"
            },
            {
                "age": 5,
                "date_of_birth": 2015,
                "details": "Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous",
                "gender": "F",
                "hdb_approved": 1,
                "id": 7,
                "image": "https://cdn2.thedogapi.com/images/r1ifZl5E7_1280.jpg",
                "name": "Bullmastiff"
            },
            {
                "age": 6,
                "date_of_birth": 2014,
                "details": "Fearless, Affectionate, Sociable, Patient, Playful, Adaptable",
                "gender": "F",
                "hdb_approved": 1,
                "id": 8,
                "image": "https://cdn2.thedogapi.com/images/HJRBbe94Q_1280.jpg",
                "name": "Daisy"
            },
            {
                "age": 3,
                "date_of_birth": 2017,
                "details": "Affectionate, Reserved, Playful, Gentle, Happy, Loving",
                "gender": "F",
                "hdb_approved": 1,
                "id": 9,
                "image": "https://cdn2.thedogapi.com/images/SkIgzxqNQ_1280.jpg",
                "name": "Nala"
            },
            {
                "age": 10,
                "date_of_birth": 2010,
                "details": "Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm",
                "gender": "M",
                "hdb_approved": 0,
                "id": 10,
                "image": "https://cdn2.thedogapi.com/images/S1VWGx9Nm_1280.jpg",
                "name": "Eurasier"
            },
            {
                "age": 12,
                "date_of_birth": 2008,
                "details": "Spirited, Lively, Intelligent, Loving, Even Tempered, Familial",
                "gender": "M",
                "hdb_approved": 0,
                "id": 11,
                "image": "https://cdn2.thedogapi.com/images/B1u4zgqE7_1280.jpg",
                "name": "Pinscher"
            },
            {
                "age": 6,
                "date_of_birth": 2014,
                "details": "Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable",
                "gender": "M",
                "hdb_approved": 0,
                "id": 12,
                "image": "https://cdn2.thedogapi.com/images/SJqBMg5Nm_1280.jpg",
                "name": "Scout"
            },
            {
                "age": 6,
                "date_of_birth": 2014,
                "details": "Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent",
                "gender": "M",
                "hdb_approved": 1,
                "id": 13,
                "image": "https://cdn2.thedogapi.com/images/rkXiGl9V7_1280.jpg",
                "name": "Rosie"
            },
            {
                "age": 2,
                "date_of_birth": 2018,
                "details": "Sweet-Tempered, Loyal, Dignified, Patient, Thoughtful, Generous",
                "gender": "F",
                "hdb_approved": 1,
                "id": 14,
                "image": "https://cdn2.thedogapi.com/images/Hyd2zgcEX_1280.jpg",
                "name": "Teddy"
            },
            {
                "age": 9,
                "date_of_birth": 2011,
                "details": "Alert, Loyal, Independent, Intelligent, Loving, Cat-like",
                "gender": "M",
                "hdb_approved": 0,
                "id": 15,
                "image": "https://cdn2.thedogapi.com/images/r1H6feqEm_1280.jpg",
                "name": "Bob"
            },
            {
                "age": 4,
                "date_of_birth": 2016,
                "details": "Affectionate, Obedient, Playful, Companionable, Intelligent, Proud",
                "gender": "M",
                "hdb_approved": 0,
                "id": 16,
                "image": "https://cdn2.thedogapi.com/images/HksaMxqNX_1280.jpg",
                "name": "Lola"
            },
            {
                "age": 10,
                "date_of_birth": 2010,
                "details": "Lively, Reserved, Intelligent, Active, Protective, Vocal",
                "gender": "M",
                "hdb_approved": 0,
                "id": 17,
                "image": "https://cdn2.thedogapi.com/images/SyRe4xcN7_1280.jpg",
                "name": "Pumi"
            },
            {
                "age": 5,
                "date_of_birth": 2015,
                "details": "Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive",
                "gender": "M",
                "hdb_approved": 1,
                "id": 18,
                "image": "https://cdn2.thedogapi.com/images/HyJvcl9N7_1280.jpg",
                "name": "Honey"
            },
            {
                "age": 10,
                "date_of_birth": 2010,
                "details": "Outgoing, Friendly, Alert, Gentle, Intelligent",
                "gender": "M",
                "hdb_approved": 1,
                "id": 19,
                "image": "https://cdn2.thedogapi.com/images/S17ZilqNm_1280.jpg",
                "name": "Siberie"
            },
            {
                "age": 10,
                "date_of_birth": 2010,
                "details": "Clever, Affectionate, Confident, Intelligent, Loving, Trainable",
                "gender": "F",
                "hdb_approved": 1,
                "id": 20,
                "image": "https://cdn2.thedogapi.com/images/SkRpsgc47_1280.jpg",
                "name": "Ollie"
            },
            {
                "age": 12,
                "date_of_birth": 2008,
                "details": "Fearless, Friendly, Bold, Keen, Alert, Quick",
                "gender": "M",
                "hdb_approved": 1,
                "id": 21,
                "image": "https://cdn2.thedogapi.com/images/SJ6f2g9EQ_1280.jpg",
                "name": "Nugger"
            },
            {
                "age": 5,
                "date_of_birth": 2015,
                "details": "Aloof, Clownish, Dignified, Independent, Happy",
                "gender": "M",
                "hdb_approved": 0,
                "id": 22,
                "image": "https://cdn2.thedogapi.com/images/r1I4hl5Em_1280.jpg",
                "name": "Vizsla"
            },
            {
                "age": 8,
                "date_of_birth": 2012,
                "details": "Cheerful, Alert, Companionable, Intelligent, Protective, Calm",
                "gender": "M",
                "hdb_approved": 1,
                "id": 23,
                "image": "https://cdn2.thedogapi.com/images/HkNS3gqEm_1280.jpg",
                "name": "Xoloitzcuintli"
            },
            {
                "age": 3,
                "date_of_birth": 2017,
                "details": "Cheerful, Grass trained, Still learning on leash, Companionable, Calm",
                "gender": "M",
                "hdb_approved": 1,
                "id": 24,
                "image": "https://www.causesforanimals.com/uploads/1/0/8/3/10832582/springroll-01_orig.jpg",
                "name": "Snowflake"
            },
            {
                "age": 6,
                "date_of_birth": 2014,
                "details": "Low energy, Grass trained, Still learning on leash, Companionable, Calm",
                "gender": "M",
                "hdb_approved": 1,
                "id": 25,
                "image": "https://www.causesforanimals.com/uploads/1/0/8/3/10832582/lila-01_orig.jpg",
                "name": "Road"
            }
        ],
        "size": 25
    }
const Dog_Male_Long_List = {
        "dog_data": [
            {
                "age": 5,
                "date_of_birth": 2015,
                "details": "Wild, Hardworking, Dutiful",
                "gender": "M",
                "hdb_approved": 0,
                "id": 1,
                "image": "https://cdn2.thedogapi.com/images/rkiByec47_1280.jpg",
                "name": "African Hunting Dog"
            },
            {
                "age": 6,
                "date_of_birth": 2014,
                "details": "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous",
                "gender": "M",
                "hdb_approved": 1,
                "id": 3,
                "image": "https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg",
                "name": "Australian Terrier"
            },
            {
                "age": 11,
                "date_of_birth": 2009,
                "details": "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined",
                "gender": "M",
                "hdb_approved": 1,
                "id": 4,
                "image": "https://cdn2.thedogapi.com/images/SkvZgx94m_1280.jpg",
                "name": "Azawakh"
            },
            {
                "age": 9,
                "date_of_birth": 2011,
                "details": "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm",
                "gender": "M",
                "hdb_approved": 0,
                "id": 6,
                "image": "https://cdn2.thedogapi.com/images/ry1kWe5VQ_1280.jpg",
                "name": "Boxer"
            },
            {
                "age": 10,
                "date_of_birth": 2010,
                "details": "Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm",
                "gender": "M",
                "hdb_approved": 0,
                "id": 10,
                "image": "https://cdn2.thedogapi.com/images/S1VWGx9Nm_1280.jpg",
                "name": "Eurasier"
            },
            {
                "age": 12,
                "date_of_birth": 2008,
                "details": "Spirited, Lively, Intelligent, Loving, Even Tempered, Familial",
                "gender": "M",
                "hdb_approved": 0,
                "id": 11,
                "image": "https://cdn2.thedogapi.com/images/B1u4zgqE7_1280.jpg",
                "name": "German Pinscher"
            },
            {
                "age": 6,
                "date_of_birth": 2014,
                "details": "Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable",
                "gender": "M",
                "hdb_approved": 0,
                "id": 12,
                "image": "https://cdn2.thedogapi.com/images/SJqBMg5Nm_1280.jpg",
                "name": "German Shorthaired Pointer"
            },
            {
                "age": 6,
                "date_of_birth": 2014,
                "details": "Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent",
                "gender": "M",
                "hdb_approved": 1,
                "id": 13,
                "image": "https://cdn2.thedogapi.com/images/rkXiGl9V7_1280.jpg",
                "name": "Havanese"
            },
            {
                "age": 9,
                "date_of_birth": 2011,
                "details": "Alert, Loyal, Independent, Intelligent, Loving, Cat-like",
                "gender": "M",
                "hdb_approved": 0,
                "id": 15,
                "image": "https://cdn2.thedogapi.com/images/r1H6feqEm_1280.jpg",
                "name": "Japanese Chin"
            },
            {
                "age": 4,
                "date_of_birth": 2016,
                "details": "Affectionate, Obedient, Playful, Companionable, Intelligent, Proud",
                "gender": "M",
                "hdb_approved": 0,
                "id": 16,
                "image": "https://cdn2.thedogapi.com/images/HksaMxqNX_1280.jpg",
                "name": "Japanese Spitz"
            },
            {
                "age": 10,
                "date_of_birth": 2010,
                "details": "Lively, Reserved, Intelligent, Active, Protective, Vocal",
                "gender": "M",
                "hdb_approved": 0,
                "id": 17,
                "image": "https://cdn2.thedogapi.com/images/SyRe4xcN7_1280.jpg",
                "name": "Pumi"
            },
            {
                "age": 5,
                "date_of_birth": 2015,
                "details": "Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive",
                "gender": "M",
                "hdb_approved": 1,
                "id": 18,
                "image": "https://cdn2.thedogapi.com/images/HyJvcl9N7_1280.jpg",
                "name": "Pug"
            },
            {
                "age": 10,
                "date_of_birth": 2010,
                "details": "Outgoing, Friendly, Alert, Gentle, Intelligent",
                "gender": "M",
                "hdb_approved": 1,
                "id": 19,
                "image": "https://cdn2.thedogapi.com/images/S17ZilqNm_1280.jpg",
                "name": "Siberian Husky"
            },
            {
                "age": 12,
                "date_of_birth": 2008,
                "details": "Fearless, Friendly, Bold, Keen, Alert, Quick",
                "gender": "M",
                "hdb_approved": 1,
                "id": 21,
                "image": "https://cdn2.thedogapi.com/images/SJ6f2g9EQ_1280.jpg",
                "name": "Wire Fox Terrier"
            },
            {
                "age": 5,
                "date_of_birth": 2015,
                "details": "Aloof, Clownish, Dignified, Independent, Happy",
                "gender": "M",
                "hdb_approved": 0,
                "id": 22,
                "image": "https://cdn2.thedogapi.com/images/r1I4hl5Em_1280.jpg",
                "name": "Wirehaired Vizsla"
            },
            {
                "age": 8,
                "date_of_birth": 2012,
                "details": "Cheerful, Alert, Companionable, Intelligent, Protective, Calm",
                "gender": "M",
                "hdb_approved": 1,
                "id": 23,
                "image": "https://cdn2.thedogapi.com/images/HkNS3gqEm_1280.jpg",
                "name": "Xoloitzcuintli"
            }
        ],
        "size": 23
    }
* - Dog_Female_Long_List
* - Dog_LT_4_Male_Long_List
* - Dog_LT_4_Female_Long_List
* - Dog_4_8_Male_Long_List
* - Dog_4_8_Female_Long_List
* - Dog_MT_8_Male_Long_List
* - Dog_MT_8_Female_Long_List
* - Dog_HDB_approved_LT_4_Male_Long_List
* - Dog_HDB_approved_LT_4_Female_Long_List
* - Dog_HDB_approved_4_8_Male_Long_List
* - Dog_HDB_approved_4_8_Female_Long_List
* - Dog_HDB_approved_MT_8_Male_Long_List
* - Dog_HDB_approved_MT_8_Female_Long_List
* - Dog_not_HDB_approved_LT_4_Male_Long_List
* - Dog_not_HDB_approved_LT_4_Female_Long_List
* - Dog_not_HDB_approved_4_8_Male_Long_List
* - Dog_not_HDB_approved_4_8_Female_Long_List
* - Dog_not_HDB_approved_MT_8_Male_Long_List
* - Dog_not_HDB_approved_MT_8_Female_Long_List