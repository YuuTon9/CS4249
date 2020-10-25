/**
 *
 * Functions in this file:
 *  filterDogsShortList(gender, ageRange, status, dogList=Dog_Long_List)
 *  filterDogsMediumList(gender, ageRange, status, dogList=Dog_Long_List)
 *  filterDogsLongList(gender, ageRange, status, dogList=Dog_Long_List) {
     * Input data:
     * gender:
     *  - 0: no filter
     *  - 1: Male
     *  - 2: Female
     * ageRange:
     *  - 0: no filter
     *  - 1: less than 4
     *  - 2: 4-8
     *  - 3: more than 8
     * status:
     *  - 0: no filter
     *  - 1: hdb approved
 */

const Dog_Long_List  = [
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
            "name": "Austra"
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
            "age": 2,
            "date_of_birth": 2018,
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
        },

        {
            "age": 11,
            "date_of_birth": 2009,
            "details": "Aloof, Clownish, Dignified, Independent, Happy",
            "gender": "F",
            "hdb_approved": 0,
            "id": 55,
            "image": "https://cdn2.thedogapi.com/images/wd68jwRjD.png",
            "name": "Boomer"
        },
        {
            "age": 10,
            "date_of_birth": 2010,
            "details": "Aloof, Clownish, Dignified, Independent, Happy",
            "gender": "F",
            "hdb_approved": 1,
            "id": 56,
            "image": "https://www.causesforanimals.com/uploads/1/0/8/3/10832582/d1_orig.jpg",
            "name": "Duke"
        },
        {
            "age": 5,
            "date_of_birth": 2015,
            "details": "Aloof, Clownish, Dignified, Independent, Happy",
            "gender": "M",
            "hdb_approved": 0,
            "id": 57,
            "image": "https://cdn2.thedogapi.com/images/pYkNylnuw.jpg",
            "name": "Sam"
        },
        {
            "age": 9,
            "date_of_birth": 2011,
            "details": "Aloof, Clownish, Dignified, Independent, Happy",
            "gender": "F",
            "hdb_approved": 0,
            "id": 58,
            "image": "https://www.causesforanimals.com/uploads/1/0/8/3/10832582/3979425.jpg",
            "name": "Riley"
        },
        {
            "age": 8,
            "date_of_birth": 2012,
            "details": "Aloof, Clownish, Dignified, Independent, Happy",
            "gender": "F",
            "hdb_approved": 1,
            "id": 50,
            "image": "https://cdn2.thedogapi.com/images/VOKm-sqrT.jpg",
            "name": "Simba"
        },
        {
            "age": 11,
            "date_of_birth": 2009,
            "details": "Aloof, Clownish, Dignified, Independent, Happy",
            "gender": "M",
            "hdb_approved": 0,
            "id": 51,
            "image": "https://cdn2.thedogapi.com/images/UsKoTe0vu.jpg",
            "name": "Roscoe"
        },
        {
            "age": 5,
            "date_of_birth": 2015,
            "details": "Aloof, Clownish, Dignified, Independent, Happy",
            "gender": "M",
            "hdb_approved": 0,
            "id": 52,
            "image": "https://cdn2.thedogapi.com/images/bRq0anD4j.jpg",
            "name": "Gunner"
        },
        {
            "age": 12,
            "date_of_birth": 2008,
            "details": "Aloof, Clownish, Dignified, Independent, Happy",
            "gender": "F",
            "hdb_approved": 1,
            "id": 53,
            "image": "https://cdn2.thedogapi.com/images/FsK9WepDe.jpg",
            "name": "Bo"
        },
    {
        "age": 6,
        "date_of_birth": 2014,
        "details": "Aloof, Clownish, Dignified, Independent, Happy",
        "gender": "M",
        "hdb_approved": 1,
        "id": 54,
        "image": "https://cdn2.thedogapi.com/images/KaU4DC_DG.jpg",
        "name": "Prince"
    }]

export function filterDogsLongList(gender, ageRange, status, dogList=Dog_Long_List) {
    /**
     * Input data:
     * gender:
     *  - 0: no filter
     *  - 1: Male
     *  - 2: Female
     * ageRange:
     *  - 0: no filter
     *  - 1: less than 4
     *  - 2: 4-8
     *  - 3: more than 8
     * status:
     *  - 0: no filter
     *  - 1: hdb approved
     */
    if (gender === 0 && ageRange === 0 && status === 0) {
        return dogList
    }
    else if (gender === 1 && ageRange === 0 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M"
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 0 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F"
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 1 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age < 4
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 2 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age >= 4 && dl.age <= 8
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 3 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age > 8
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 0 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 1 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age < 4
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 2 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age >= 4 && dl.age <= 8
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 3 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age > 8
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 0 && status === 1) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 1 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age < 4
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 2 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age >= 4 && dl.age <= 8
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 3 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age > 8
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 0 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 1 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age < 4 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 2 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age >= 4 && dl.age <= 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 3 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age > 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 1 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age < 4 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 2 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age >= 4 && dl.age <= 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 3 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age > 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 3 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age > 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 1 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age < 4 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 2 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age >= 4 && dl.age <= 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    return dogList
}
const Dog_Medium_List  = [
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
        "details": "Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable",
        "gender": "M",
        "hdb_approved": 0,
        "id": 12,
        "image": "https://cdn2.thedogapi.com/images/SJqBMg5Nm_1280.jpg",
        "name": "Scout"
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
    },
    {
        "age": 11,
        "date_of_birth": 2009,
        "details": "Aloof, Clownish, Dignified, Independent, Happy",
        "gender": "M",
        "hdb_approved": 0,
        "id": 51,
        "image": "https://cdn2.thedogapi.com/images/UsKoTe0vu.jpg",
        "name": "Roscoe"
    },
    {
        "age": 5,
        "date_of_birth": 2015,
        "details": "Aloof, Clownish, Dignified, Independent, Happy",
        "gender": "M",
        "hdb_approved": 0,
        "id": 52,
        "image": "https://cdn2.thedogapi.com/images/bRq0anD4j.jpg",
        "name": "Gunner"
    },
    {
        "age": 12,
        "date_of_birth": 2008,
        "details": "Aloof, Clownish, Dignified, Independent, Happy",
        "gender": "F",
        "hdb_approved": 1,
        "id": 53,
        "image": "https://cdn2.thedogapi.com/images/FsK9WepDe.jpg",
        "name": "Bo"
    }]

export function filterDogsMediumList(gender, ageRange, status, dogList=Dog_Medium_List) {
    /**
     * Input data:
     * gender:
     *  - 0: no filter
     *  - 1: Male
     *  - 2: Female
     * ageRange:
     *  - 0: no filter
     *  - 1: less than 4
     *  - 2: 4-8
     *  - 3: more than 8
     * status:
     *  - 0: no filter
     *  - 1: hdb approved
     */
    if (gender === 0 && ageRange === 0 && status === 0) {
        return dogList
    }
    else if (gender === 1 && ageRange === 0 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M"
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 0 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F"
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 1 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age < 4
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 2 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age >= 4 && dl.age <= 8
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 3 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age > 8
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 0 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 1 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age < 4
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 2 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age >= 4 && dl.age <= 8
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 3 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age > 8
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 0 && status === 1) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 1 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age < 4
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 2 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age >= 4 && dl.age <= 8
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 3 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age > 8
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 0 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 1 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age < 4 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 2 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age >= 4 && dl.age <= 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 3 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age > 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 1 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age < 4 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 2 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age >= 4 && dl.age <= 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 3 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age > 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 3 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age > 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 1 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age < 4 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 2 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age >= 4 && dl.age <= 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    return dogList
}

const Dog_Small_List  = [
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
    }]


export function filterDogsSmallList(gender, ageRange, status, dogList=Dog_Small_List) {
    /**
     * Input data:
     * gender:
     *  - 0: no filter
     *  - 1: Male
     *  - 2: Female
     * ageRange:
     *  - 0: no filter
     *  - 1: less than 4
     *  - 2: 4-8
     *  - 3: more than 8
     * status:
     *  - 0: no filter
     *  - 1: hdb approved
     */
    if (gender === 0 && ageRange === 0 && status === 0) {
        return dogList
    }
    else if (gender === 1 && ageRange === 0 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M"
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 0 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F"
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 1 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age < 4
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 2 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age >= 4 && dl.age <= 8
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 3 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age > 8
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 0 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 1 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age < 4
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 2 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age >= 4 && dl.age <= 8
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 3 && status === 0) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age > 8
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 0 && status === 1) { // Male
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 1 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age < 4
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 2 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age >= 4 && dl.age <= 8
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 3 && status === 0) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age > 8
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 0 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 1 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age < 4 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 2 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age >= 4 && dl.age <= 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 0 && ageRange === 3 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.age > 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 1 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age < 4 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 2 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age >= 4 && dl.age <= 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 1 && ageRange === 3 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "M" && dl.age > 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 3 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age > 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 1 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age < 4 && dl.hdb_approved === 1
        });
        return newDogList
    }
    else if (gender === 2 && ageRange === 2 && status === 1) {
        const newDogList = dogList.filter(function (dl) {
            return dl.gender === "F" && dl.age >= 4 && dl.age <= 8 && dl.hdb_approved === 1
        });
        return newDogList
    }
    return dogList
}