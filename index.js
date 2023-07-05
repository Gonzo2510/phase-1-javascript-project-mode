// json-server --watch db.json

function addContactToDOM(name = 'Jacob', title = "Teacher", email = "jagonz@live.com", phone = "8324037153"){
    const tbody = document.querySelector("tbody")
    const tr = document.createElement('tr')
    const tb1 = document.createElement('td')
    const tb2 = document.createElement('td')
    const tb3 = document.createElement('td')
    const tb4 = document.createElement('td')

    tb1.textContent = name
    tb2.textContent = title
    tb3.textContent = email
    tb4.textContent = phone

    tr.appendChild(tb1)
    tr.appendChild(tb2)
    tr.appendChild(tb3)
    tr.appendChild(tb4)
    
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
        });
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
    
        fetch('http://localhost:3000/contacts', {
            method: 'POST',
            body: JSON.stringify({
                name: fName,
                occupation: fTitle,
                email: fEmail,
                phone: fPhone
            }),
        })
        .then(response => response.json())
        .then(user => {
            console.log(user)
            addContactToDOM(fName,fTitle,fEmail,fPhone)
        })
    })
};









importContacts()
addContactBtn()