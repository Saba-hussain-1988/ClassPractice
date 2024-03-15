let information = {
    name: {
        firstName: "Saba",
        lastName: "Hussain",
        surname: "Chohan",
    },
    age: 35,
    isHouseWife: true,
    familyMembers: 4,
    familyMemberSname: ['Mustafa', 'Ukasha', 'Ahmed'],
    education: {
        Qualification: 'underGraduate',
        majorSubjects: ['Mathematics', 'Economics', 'Islamiyat'],
        isCountinue: true,
    },
    contact: {
        phoneNumer: '0000-0000000',
        email: 'example45@.gmail.com',
    },
};
// Loop through the majorSubjects array and print each subject
for (let i = 0; i < information.education.majorSubjects.length; i++) {
    console.log(information.education.majorSubjects[i]);
}
console.log(information.education.majorSubjects[0]); // Mathematics
console.log(information.name); // print full nested object of name
export {};
