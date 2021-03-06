//選擇DOM節點
const rgbPanel = document.querySelector('#RGB')
const hexLabel = document.querySelector('#HEX .table tr td label')
const hexSection = document.querySelector('#HEX .table tr td section')
const rgbToHexVer2Panel = document.querySelector('#RGBtoHexConverterVER2')
const hexP = document.querySelector('#RGBtoHexConverterVER2 .p')

let R1 = document.querySelectorAll('#RGB .table  tr  td  input')[0].value
let G1 = document.querySelectorAll('#RGB .table  tr  td  input')[1].value
let B1 = document.querySelectorAll('#RGB .table  tr  td  input')[2].value
let R2 = document.querySelectorAll('#RGBtoHexConverterVER2 .table  tr  td  p')[1].innerHTML
let G2 = document.querySelectorAll('#RGBtoHexConverterVER2 .table  tr  td  p')[3].innerHTML
let B2 = document.querySelectorAll('#RGBtoHexConverterVER2 .table  tr  td  p')[5].innerHTML


//設置事件監聽器
rgbPanel.addEventListener('input' , inputRgb)
rgbPanel.addEventListener('click' , convertRgb)
rgbToHexVer2Panel.addEventListener('change' , changeRgb)

//function
/**
 * RGB to Hex Converter VER1 的RGB輸入
 * @param {*} event  input事件
 */
function inputRgb(event){
    let target = event.target
    let rgbTitle = target.parentElement.previousElementSibling.children[0]
    let rgbResult = target.parentElement.nextElementSibling.children[0]

    if(target.tagName === 'INPUT' ){
        //預覽R、G、B顏色
        if(rgbTitle.innerText.indexOf('R') >-1){
            R1 = target.value  
            rgbResult.style.backgroundColor = 'rgb(' + target.value + ', 0 , 0 )'
        }else if (rgbTitle.innerText.indexOf('G') >-1){
            G1 = target.value 
            rgbResult.style.backgroundColor = 'rgb(0,'+ target.value +  ', 0 )'
        }else{
            B1 = target.value 
            rgbResult.style.backgroundColor = 'rgb(0, 0 ,'+ target.value +  ' )'
        }
    }
}

/**
 * 判斷RGB欄位是否空白或數值不在0~255之間
 * hexLabel.innerHTML = '#' + 十進位轉十六進位後的結果
 * hexSection.style.backgroundColor = hexLabel顯示的Hex碼
 * @param {*} event click事件
 */
function convertRgb(event){
    let target = event.target

    if(target.classList.contains('btn')){
        //判斷RGB欄位是否空白或數值不在0~255之間
        if(R1 == "" || G1 == "" || B1 == ""){
            alert('R、G、B三個欄位皆為必填欄位，不得空白，請確實輸入0~255之間的正整數！')
        }else if(R1<0 || R1 >255 || G1 < 0 || G1 > 255 || B1 < 0 || B1 > 255){
            alert('R、G、B三個欄位的數值範圍皆僅限於0~255之間的正整數，請重新確認您輸入的數值是否不在此範圍後，進行修改！')   
        }
        else{
            //hexLabel.innerHTML = '#' + 十進位轉十六進位後的結果
            hexLabel.innerHTML = '#'+decimalToHex(R1)+decimalToHex(G1)+decimalToHex(B1)
            //hexSection.style.backgroundColor = hexLabel顯示的Hex碼
            hexSection.style.backgroundColor = hexLabel.innerHTML
        }
    }
}

/**
 * 十進位轉十六進位
 */
function decimalToHex(decimal){
    decimal = parseInt(decimal)
    let hex = decimal.toString(16)    
    if(hex.length === 1){
        hex = hex.repeat(2)
    }
    return hex
}

/**
 * RGB to Hex Converter VER2 的RGB衡桿拉動
 * @param {*} event change事件
 */
function changeRgb(event){
    let target = event.target
    let rgbTitle = target.parentElement.previousElementSibling.children[0]
    let rgbResult = target.parentElement.nextElementSibling.children[0]
    console.log(R2 +','+G2+','+B2)

    if(target.tagName === 'INPUT' ){
        //顯示slider目前的數字並預覽R、G、B顏色
        if(rgbTitle.innerText.indexOf('R') >-1){
            R2 = target.value
            rgbResult.innerHTML = target.value
            rgbResult.style.backgroundColor = 'rgb(' + target.value + ', 0 , 0 )'
            rgbTitle.style.backgroundColor = 'rgb(' + target.value + ', 0 , 0 )'
        }else if (rgbTitle.innerText.indexOf('G') >-1){
            G2 = target.value
            rgbResult.innerText = target.value
            rgbResult.style.backgroundColor = 'rgb(0,'+ target.value +  ', 0 )'
            rgbTitle.style.backgroundColor = 'rgb(0,'+ target.value +  ', 0 )'
        }else{
            B2 = target.value
            rgbResult.innerText = target.value
            rgbResult.style.backgroundColor = 'rgb(0, 0 ,'+ target.value +  ' )'
            rgbTitle.style.backgroundColor = 'rgb(0, 0 ,'+ target.value +  ' )'
        }
        //hexP.innerHTML = '#'+十進位轉十六進位後的結果
        hexP.innerHTML = '#'+decimalToHex(R2)+decimalToHex(G2)+decimalToHex(B2)
        //變換背景色為Hex碼
        rgbToHexVer2Panel.children[1].style.backgroundColor = hexP.innerHTML
    }
    
}