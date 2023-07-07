// json-server --watch db.json



function addContactToDOM(name, title, email, phone){
    const tbody = document.querySelector("tbody")
    const tr = document.createElement('tr')
    const tb1 = document.createElement('td')
    const tb2 = document.createElement('td')
    const tb3 = document.createElement('td')
    const tb4 = document.createElement('td')
    const tb5 = document.createElement('td')

    tb1.textContent = name
    tb2.textContent = title
    tb3.textContent = email
    tb4.textContent = phone
    tb5.textContent = 'X'
    tb5.className = 'invisible'

    tr.appendChild(tb1)
    tr.appendChild(tb2)
    tr.appendChild(tb3)
    tr.appendChild(tb4)
    tr.appendChild(tb5)
    
    tbody.appendChild(tr)
};

function importContacts(){
    fetch('http://localhost:3000/contacts')
    .then(response => response.json())
    .then(contacts => {
        contacts.forEach(contact => {
            let name = contact.name
            let title = contact.occupation
            let email = contact.email
            let phone = contact.phone
            addContactToDOM(name, title, email, phone)
        })
    })
    .catch(error => {
        //handle error
    })
};

function addContactBtn(){
    //console.log(document.querySelector('form').lastElementChild)
    const form = document.querySelector('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        let fName = e.target['0'].value
        let fTitle = e.target['1'].value
        let fEmail = e.target['2'].value
        let fPhone = e.target['3'].value
    
        let newContact = {
            name: fName,
            occupation: fTitle,
            email: fEmail,
            phone: fPhone
        }

        fetch('http://localhost:3000/contacts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
        .then(response => response.json())
        .then(user => addContactToDOM(fName,fTitle,fEmail,fPhone))
    })
};

function find(){
    const findForm = document.getElementById("find_form")
    findForm.addEventListener("submit", e => {
        e.preventDefault()

        let userSearch = e.target['0'].value
        const tbody = document.querySelector('tbody')
        const rows = tbody.querySelectorAll('tr')

        for (let i = 0; i < rows.length; i++) {
            let name = rows[i].querySelector("td")

            if (userSearch.toLowerCase() !== name.innerHTML.toLowerCase()) {
                rows[i].className = 'hidden'
            } else rows[i].className = ''
        }
        const button = document.getElementById("remove")
        button.addEventListener('click', () => {

            fetch('http://localhost:3000/contacts')
            .then(response => response.json())
            .then(contacts => {
                contacts.forEach(contact => {
                    let name = contact.name

                    if (userSearch.toLowerCase() === name.toLowerCase()) {
                        let contactId = contact.id





                    }
                })
            })
        })
    })
};

function clear(){
    const clearBtn = document.getElementsByClassName('button')[0]
    clearBtn.addEventListener('click', (e)=> {
        e.preventDefault()

        const tbody = document.querySelector('tbody')
        const rows = tbody.querySelectorAll('tr')
        console.log(tbody, rows)

        for (let i = 0; i < rows.length; i++) {
            rows[i].className = ''
        }

    })
};

function visibleButton() {
    const button = document.getElementById("remove")
    button.addEventListener('mouseenter', () => {
        button.className = 'invisible'
    })
    button.addEventListener('mouseleave', () => {
        button.className = ''
    })
}

function removeAllContacts() {
    const button = document.getElementById("remove")
    console.log(button)
    
    button.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e)
        //let userSearch = e.target['0'].value

        fetch('http://localhost:3000/contacts')
        .then(response => response.json())
        .then(contacts => {
            contacts.forEach(contact => {
                let name = contact.name

                console.log(name, userSearch)
            })
        })

        fetch('http://localhost:3000/contacts', {
            method: 'DELETE' 
        })
        .then(response => {
            if (response.status === 200) {
              console.log("Data deleted successfully")
            } else {
                console.log("Error deleting data")
            }
          })
        })
}



importContacts()
addContactBtn()
find()
clear()
//visibleButton()
