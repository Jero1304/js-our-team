/*
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/
console.log('Our Team');

const memberTeam = [
    {
        fName: 'Wayne Barnett',
        job: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        fName: 'Angela Caroll',
        job: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        fName: 'Walter Gordon',
        job: 'Office Manage',
        photo: 'walter-gordon-office-manager.jpg',
    },
]

const teamMembersEle = document.getElementById('members-info')

for (let i = 0; i < memberTeam.length; i++) {
    const currentMember = memberTeam[i];
    const firstName = currentMember.fName;
    const role = currentMember.job;
    const imageProfile = currentMember.photo;

    console.log('name', firstName, 'role', role, 'image', imageProfile, 'array', currentMember[i]);

    const memeberTable = `
                <tr>
                    <td>${firstName}</td>
                    <td>${role}</td>
                    <td>${imageProfile}</td>
                </tr>
                `
    teamMembersEle.innerHTML +=  memeberTable;
}

