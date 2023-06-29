

function addContact(){
    const tbody = document.querySelector("tbody")
    
    
};

function importContacts(){
    fetch('http://localhost:3000/contacts')
    .then(response => response.json())
    .then(contacts => {
        contacts.forEach(contact => {
            for (const key in contact) {
                if (typeof key === number){
                    console.log(contact[key])
                }
            // let tbody = document.querySelector("tbody")
            // let tr = document.createElement('tr')
            // let td = document.createElement('td')


                console.log(contact[key])

                //tr.id = contact.id


            }
            // console.log(contact)
            // console.log(contact.id)
            // console.log(contact.name)
            // console.log(contact.occupation)
            // console.log(contact.email)
            // console.log(contact.phone)

            // tbody.appendChild(tr)

        });
        console.log(contacts)
    })
    .catch(error => {
        //handle error
    })
};

importContacts()