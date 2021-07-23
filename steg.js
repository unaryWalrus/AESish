if (localStorage.getItem('text')) {
  concealText.textContent = localStorage.getItem('text')
  localStorage.setItem('text', '')
  }
function strToB3(str) {
  let b3 = ''
  for (let i = 0; i < str.length; i++) {
    b3 += str.charCodeAt(i).toString(2) + '2'
  }
  if (b3.length > carrierText.innerHTML.length) {
    return 'error'
  }
  else {
    return b3
    }
}
function b3ToHTML(b3, carrier) {
  sHTML = ''
  for (let i = 0; i < b3.length; i++) {
    if (b3[i] === '0') {
      sHTML += "<span style = '#010000'>" + carrier[i] + "</span>"
    }
    else if (b3[i] === '1') {
      sHTML += "<span style = '#000100'>" + carrier[i] + "</span>"
    }
    else if (b3[i] === '2') {
      sHTML += "<span style = '#000001'>" + carrier[i] + "</span>"
    }
  }
  return sHTML + "<span style = 'color: #000000'>" + carrier[b3.length] + "</span>" + carrier.substr(b3.length + 1, carrier.length - 1)
}
function htmlToHex(html) {
  html = html.split(/!?(#[0-1][0-1][0-1][0-1][0-1][0-1])/)
  let hex = []
  for (let i = -1; i < html.length - 1; i += 2) {
    hex.push(html[i])
  }
  return hex
}
function hexToB3(hex) {
  let b3 = ''
  for (let i = 1; i < hex.length - 1; i++) {
    b3 += (hex[i][2] === '1') ? 0 : (hex[i][4] === '1') ? 1 : (hex[i][6] === '1') ? 2 : false
  }
  return b3
}
function b3ToStr(b3) {
  let str = ''
  for (let i = 0; i < b3.split('2').length - 1; i++) {
    str += String.fromCharCode(parseInt(b3.split('2')[i], 2))
  }
  return str
}
function conceal(str, carrier) {
  var sTB = strToB3(str)
  if (sTB == 'error') {
    alert('The carrier text is too short. Refraining from excessive use of characters high on the unicode index can minimize the required carrier length.')
  }
  else {
    return b3ToHTML(sTB, carrier)
  }
}
function reveal(html) {
  return b3ToStr(hexToB3(htmlToHex(html.split("<span style = 'color: #000000'>")[0])))
}
upload.onchange = function () {
  let fr = new FileReader()
  fr.onload = function () {
    concealText.innerHTML = fr.result
  }
  fr.readAsText(upload.files[0])
}