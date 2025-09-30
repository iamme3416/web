const btn = document.querySelector('#btn')
const lottoDisplay = document.querySelector('#lotto')
const lottoBox = document.querySelectorAll("#lotto > li")

function randomLotto(){
    const random = Math.floor(Math.random() * 45 + 1)
    return random
}

function lottoHandler(e){
    const num1 = randomLotto()
    const num2 = randomLotto()
    const num3 = randomLotto()
    const num4 = randomLotto()
    const num5 = randomLotto()
    const num6 = randomLotto()

    const num1ClassName = getClassName(num1)
    const num2ClassName = getClassName(num2)
    const num3ClassName = getClassName(num3)
    const num4ClassName = getClassName(num4)
    const num5ClassName = getClassName(num5)
    const num6ClassName = getClassName(num6)

    lottoBox[0].innerHTML = num1
    lottoBox[0].className = num1ClassName
    lottoBox[1].innerHTML = num2
    lottoBox[1].className = num2ClassName
    lottoBox[2].innerHTML = num3
    lottoBox[2].className = num3ClassName
    lottoBox[3].innerHTML = num4
    lottoBox[3].className = num4ClassName
    lottoBox[4].innerHTML = num5
    lottoBox[4].className = num5ClassName
    lottoBox[5].innerHTML = num6
    lottoBox[5].className = num6ClassName

    LottoDisplay.style = 'Display:flex;'
    Info.style = 'display:block;'
    Payinfo.style = 'Display:block;'

}

function between(num, min, max){
    if(num => min && num <= max){
        return true        
    }
    return false
}

function getClassName(num){
    if(between(num,0,11)){
        return 'a'
    }
    if(between(num,10,21)){
        return 'b'
    }
    if(between(num,20,31)){
        return 'c'
    }

    if(between(num,30,41)){
        return 'd'
    }

    if(between(num,40,46)){
        return 'e'
    }
    }
}
btn.addEventListener('click',lottoHandler)
