function fliptoggle() {
    document.querySelector('.card').classList.toggle('flipped');
    document.querySelector('.card').classList.toggle('card-back');
    document.querySelector('.name').classList.toggle('hidden')
    document.querySelector('.date').classList.toggle('hidden')
    document.querySelector('.logo').classList.toggle('hidden')
    document.querySelector('.number').classList.toggle('hidden')
    document.querySelector('.cvc').classList.toggle('hidden')}


function flip(arg) {
if (arg == "back" && !document.querySelector('.name').classList.contains('hidden')) 

{fliptoggle()}

else if (arg == "front" && !document.querySelector('.cvc').classList.contains('hidden')) 

{fliptoggle()};
}


/*! ------------------------------------------------------------------------ */

function update() {

    let cardNum = document.querySelector('.number')
    let num = document.querySelector('#number').value

    let cardName = document.querySelector('.name')
    let name = document.querySelector('#name').value

    let cardDate = document.querySelector('.date')
    let MM = document.querySelector('#MM').value
    let YY = document.querySelector('#YY').value

    let cardCvc = document.querySelector('.cvc')
    let cvc = document.querySelector('#cvc').value

    if (num != '') {
            cardNum.innerHTML = num

    }

    cardName.innerHTML = name

    cardDate.innerHTML = MM+'/'+YY

    cardCvc.innerHTML = cvc

}
