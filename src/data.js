const users=[
    {name:'mario', premium:true}
];
const getPremUsers=(users) =>{
    return users.filter(user => user.premium);
};
export{getPremUsers, users as default};