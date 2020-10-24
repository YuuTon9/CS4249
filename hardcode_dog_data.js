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