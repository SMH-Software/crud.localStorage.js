import { readData, createData, updateData, showForm } from "./functions.js"

/**
 * Récupérer toutes les données du localStorage
 */
let Data = JSON.parse(localStorage.getItem('mydata'))

/**
 * Afficher toutes les données au chargeent de la page
 */
readData('tbody', Data)

/**
 * Afficher le formulaire d'ajout
 */
const addFormm = document.querySelector('#addForm')
addFormm.addEventListener('click', () => {
    showForm('create', 'block')
})

/**
 * Ajouter les donnée du formulaire au localStorage
 */
const form = document.querySelector('#create')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(Data === null){
        Data = []
    }

    createData('firstName', 'lastName', 'age', Data)
    readData('tbody', Data)
    form.reset()

    showForm('create', 'none')
  
})

const editData = document.querySelectorAll('#edit')
for(let element of editData){
    element.addEventListener('click', (e) => {
        e.preventDefault()
        showForm('update', 'block')

        const elementData = Data.find(EData => EData.id === parseInt(element.getAttribute('data-id')))
        document.querySelector('#ufirstName').value = elementData.firstName
        document.querySelector('#ulastName').value = elementData.lastName
        document.querySelector('#uage').value = elementData.age
        document.querySelector('#uid').value = elementData.id
    })
}

const update = document.querySelector('#update')
update.addEventListener('submit', (e) => {
    e.preventDefault()

    updateData('uid','ufirstName','ulastName','uage', Data)
    readData('tbody', Data)

    showForm('update', 'none')
})

const deleteData = document.querySelectorAll('#delete')
for(let element of deleteData){
    element.addEventListener('click', (e) => {
        e.preventDefault()

        Data = Data.filter(DData => DData.id !== parseInt(element.getAttribute('data-id')))

        readData('tbody', Data)
       
    })
}





