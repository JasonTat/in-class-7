/*
HTML for the project.

<div class="list-group-item list-group-item-action">
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">FULLNAME HERE</h5>
  </div>
 <small>EMAIL HERE<</small>
</div>
*/


async function getAllContacts (){
    const res = await fetch('data/contacts.json');
    const contacts = await res.json();
    return contacts
}

//presentational templating
//if it was interactive, we'd have to convert the templates to elements so we can add addEventListeners to them.
async function renderContacts(props){
    const contacts = await getAllContacts();    
    const container = document.createElement('div');
    let markup = ``

    contacts.forEach(contact=>{
        const template = `
        <aside class="list-group-item list-group-item-action">
            <header class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${contact.name}</h5>
            </header>
            <address>${contact.email}</address>
        </aside>
        `
        markup += template
    })
    container.innerHTML = markup

    return container
}

export {renderContacts};













// function somethingElse (params) {
//     return null
// }

// function getSomethingElse (props){
//     return null
// }

// export default somethingElse