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
function formatNumber(num) {
    return num < 10 ? '0' + num : String(num);
  }

function update() {

    let cardNum = document.querySelector('.number')
    let num = document.querySelector('#number').value

    let cardName = document.querySelector('.name')
    let name = document.querySelector('#name').value

    let cardDate = document.querySelector('.date')
    let MM = formatNumber((document.querySelector('#MM').value))
    let YY = formatNumber(document.querySelector('#YY').value)

    let cardCvc = document.querySelector('.cvc')
    let cvc = document.querySelector('#cvc').value

    if (num != '') {
            cardNum.innerHTML = num

    }
    else {cardNum.innerHTML = '0000 0000 0000 0000'}

    if (name != '') {
    cardName.innerHTML = name
}
else {cardName.innerHTML = 'CARDHOLDER NAME'}


if (MM != '' && YY == '') {
    cardDate.innerHTML = MM+'/'+'00'
}
else if (MM == '' && YY != '') {
    cardDate.innerHTML = '00'+'/'+YY
}

else if (MM != '' && YY != '') {
    cardDate.innerHTML = MM+'/'+YY

}
else {cardDate.innerHTML = '00/00'}


    cardCvc.innerHTML = cvc

}
