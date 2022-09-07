import { getHellfireClubSubscriptions } from './firebase/hellfire-clube.js'
import { subscribeToHellfireClub } from './firebase/hellfire-clube.js'


const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnsubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    //Salvar no banco de dados
    const subscriptionId = await subscribeToHellfireClub (subscription)
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''

    alert(`Inscrito com sucesso: ${subscriptionId}`)
})

async function loadData() {

    const subscriptions = getHellfireClubSubscriptions()
    console.log(subscriptions)
}

loadData()
