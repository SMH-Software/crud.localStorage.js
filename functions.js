/**
 * 
 * @param {string} tagId 
 * @param {string []} data 
 */
export function readData(tagId, data) {
    localStorage.setItem('mydata', JSON.stringify(data))
    const tbody = document.querySelector(`#${tagId}`)
    const storeData = JSON.parse(localStorage.getItem('mydata'))
    let tableRow = ""

    if(storeData !== null || storeData === undefined){
        storeData.map(dataElement => {
            tableRow += `
                <tr>
                    <td>${dataElement.firstName}</td>
                    <td>${dataElement.lastName}</td>
                    <td>${dataElement.age}</td>
                    <td>
                        <a href="" id="edit" data-id=${dataElement.id}> 
                            <ion-icon name="create-outline"></ion-icon> 
                        </a>
                        <a href="" id="delete" data-id=${dataElement.id} title="Supprimer"> 
                            <ion-icon name="trash-outline"></ion-icon>
                        </a>
                    </td>
                </tr>
            `
        })
    }

    tbody.innerHTML = tableRow
}

/**
 * 
 * @param {string} tagId 
 * @param {string} diplayMode 
 */
export function showForm(tagId, diplayMode) {
    const form = document.querySelector(`#${tagId}`)
    form.style.display = diplayMode
}

/**
 * 
 * @param {string} inputID1 
 * @param {string} inputID2 
 * @param {string} inputID3 
 * @param {string []} data 
 */
export function createData(inputID1, inputID2, inputID3, data) {
    const firstName = document.querySelector(`#${inputID1}`).value
    const lastName = document.querySelector(`#${inputID2}`).value
    const age = document.querySelector(`#${inputID3}`).value

    const newData = { id: Math.floor(Math.random() * 9999), firstName: firstName, lastName: lastName, age: age}
    data.push(newData)
}

/**
 * 
 * @param {number} uid 
 * @param {string} input1 
 * @param {string} input2 
 * @param {string} input3 
 * @param {string []} data 
 */
export function updateData(uid, input1, input2, input3, data) {
   
    const id = parseInt(document.querySelector(`#${uid}`).value)
    const firstName= document.querySelector(`#${input1}`).value
    const lastName = document.querySelector(`#${input2}`).value
    const age = document.querySelector(`#${input3}`).value

    const index = data.findIndex(dataElement => dataElement.id === id)
    data[index] = {id, firstName, lastName, age}

}