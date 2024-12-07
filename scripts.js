const submit = document.querySelector('#submit')
const divSubmit = document.querySelector('.submit')
const numbersInput = document.querySelector('.numeros')
const titleForm = document.querySelector('.title-form') 
const toggleBtn = document.querySelector('#toggle-btn')
const toggle = document.querySelector('.toggle')
const resultTitle = document.querySelector('.result-title')
const result = document.querySelector('.result')
const seta = document.querySelector('#seta')
const novamente = document.querySelector('#novamente')
const qtd = document.querySelector('#qtd')
const de = document.querySelector('#de')
const ate = document.querySelector('#ate')
const qtResult = document.querySelector('small')
const submitMsg = document.querySelector('.submit p')
let i = 0
let r = 0

qtd.addEventListener('input', () =>{
})
de.addEventListener('input', () =>{
})
ate.addEventListener('input', () =>{
})

submit.addEventListener('click', (event) => {
    i += 1
    event.preventDefault()
        numbersInput.classList.toggle('no-appear')
        titleForm.classList.toggle('no-appear')
        toggle.classList.toggle('no-appear')
        resultTitle.classList.toggle('no-appear')
        result.classList.toggle('no-appear')
        seta.classList.toggle('no-appear')
        novamente.classList.toggle('no-appear')
        const quantity = parseInt(qtd.value, 10);
        const from = parseInt(de.value, 10);
        const to = parseInt(ate.value, 10);
        const noRepeat = toggleBtn.checked
        const numbers = generateRandomNumbers(from, to, quantity, noRepeat)
        result.classList.remove('no-appear')
        let length = numbers.length
        if(i%2 == 1){
            r+=1
            if(length > 5){
                divSubmit.classList.add('space')
            }
        }else{
            divSubmit.classList.remove('space')
        }
        for(let j = 0; j < numbers.length; j++){
            let sorteado = numbers[j]
            if(i%2 == 1){
                let numberBg = document.createElement('div')
                result.append(numberBg)
                numberBg.classList.add('number-bg')
                numberBg.classList.add('appear')
                let num = document.createElement('p')
                num.classList.add('appearnum')
                numberBg.append(num)
                num.innerText = sorteado
                qtResult.innerText = `${r}° RESULTADO`
                submitMsg.innerText = 'Sortear novamente'
            }else{
                result.classList.add('no-appear')
                result.innerHTML = ''
                submitMsg.innerText = 'Sortear'
            }
        }
})


function generateRandomNumbers(min, max, count, noRepeat) {
    const numbers = [];
    if(noRepeat === true){
        for (let i = 0; i < count; i++) {
            let number = getRandomNumber(min, max)
            if(numbers.includes(number)){
                while(numbers.includes(number)){
                    number = getRandomNumber(min, max)
                }
                numbers.push(number)
            }else{
                numbers.push(number)
            }
        }
        return numbers
      }else{
        for (let i = 0; i< count; i++){
            let number = getRandomNumber(min, max)
            numbers.push(number)
        }
        return numbers
      }
    }
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  