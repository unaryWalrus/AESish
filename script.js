
if (location.href === 'https://aesish.landfish.repl.co/#steg')
  steg()
if (localStorage.getItem('text')) {
  tStr.value = localStorage.getItem('text')
  localStorage.setItem('text', '')
}
//encryption algorithm start
function b3(str) {
  let b3 = ''
  for (let i = 0; i < str.length; i++) {
    b3 += str.charCodeAt(i).toString(2) + '2'
  }
  return b3
}
function unB3(b3) {
  let str = ''
  b3 = b3.split('2')
  for (let i = 0; i < b3.length - 1; i++) {
    str += String.fromCharCode(parseInt(b3[i], 2))
  }
  return str
}
function splice(sB3, kB3) {
  let sStr = ''
  let kI = -1
  for (let i = 0; i < sB3.length; i++) {
    kI++
    if (kI === kB3.length) {
        kI = 0
    }
    sStr += +sB3[i] + +kB3[kI] + 1
  }
  return sStr
}
function unsplice(sB3, kB3) {
  sB3 = sB3.split('')
  let uSArr = ''
  let kI = -1
  for (let i = 0; i < sB3.length; i++) {
    kI++
    if (kI == kB3.length) {
        kI = 0
    }
    uSArr += +sB3[i] - +kB3[kI] - 1
  }
  return uSArr
}
function obfuscate(b3) {
  b3 = b3
    .replace(/11/g, 'a')
    .replace(/12/g, 'b')
    .replace(/13/g, 'c')
    .replace(/14/g, 'd')
    .replace(/15/g, 'e')
    .replace(/21/g, 'f')
    .replace(/22/g, 'g')
    .replace(/23/g, 'h')
    .replace(/24/g, 'i')
    .replace(/25/g, 'j')
    .replace(/31/g, 'k')
    .replace(/32/g, 'l')
    .replace(/33/g, 'm')
    .replace(/34/g, 'n')
    .replace(/35/g, 'o')
    .replace(/41/g, 'p')
    .replace(/42/g, 'q')
    .replace(/43/g, 'r')
    .replace(/44/g, 's')
    .replace(/45/g, 't')
    .replace(/51/g, 'u')
    .replace(/52/g, 'v')
    .replace(/53/g, 'w')
    .replace(/54/g, 'x')
    .replace(/55/g, 'y')
    .replace(/1/g, 'z')
    .replace(/2/g, 'A')
    .replace(/3/g, 'B')
    .replace(/4/g, 'C')
    .replace(/5/g, 'D')
  return b3
}
function unobfuscate(str) {
  str = str
    .replace(/a/g, '11')
    .replace(/b/g, '12')
    .replace(/c/g, '13')
    .replace(/d/g, '14')
    .replace(/e/g, '15')
    .replace(/f/g, '21')
    .replace(/g/g, '22')
    .replace(/h/g, '23')
    .replace(/i/g, '24')
    .replace(/j/g, '25')
    .replace(/k/g, '31')
    .replace(/l/g, '32')
    .replace(/m/g, '33')
    .replace(/n/g, '34')
    .replace(/o/g, '35')
    .replace(/p/g, '41')
    .replace(/q/g, '42')
    .replace(/r/g, '43')
    .replace(/s/g, '44')
    .replace(/t/g, '45')
    .replace(/u/g, '51')
    .replace(/v/g, '52')
    .replace(/w/g, '53')
    .replace(/x/g, '54')
    .replace(/y/g, '55')
    .replace(/z/g, '1')
    .replace(/A/g, '2')
    .replace(/B/g, '3')
    .replace(/C/g, '4')
    .replace(/D/g, '5')
  return str
}
function encrypt(str, key) {
  return obfuscate(splice(b3(str), b3(key)))
}
function decrypt(str, key) {
  return unB3(unsplice(unobfuscate(str), b3(key)))
}
//encryption algorithym end
function steg() {
  let text = tStr.value
  document.body.innerHTML = ''
  document.write(`
<html>
  <head>
    <title>Stegosaurous</title>
  </head>
  <body>
    <p id = "concealText" contentEditable = "true" spellcheck = "false">${text || `Text to conceal/reveal`}</p>
    <div id = "concealFoot"></div>
    <p id = "carrierText" contentEditable = "true" spellcheck = "false" title = "Carrier text, default lorem ipsum"></p>
    <button onclick = "concealText.innerHTML = conceal(concealText.innerHTML, carrierText.innerHTML)">Conceal</button>
    <button onclick = "concealText.innerHTML = reveal(concealText.innerHTML, carrierText.textContent)">Reveal</button>
    <a id = "download" href = "data:,hi" style = "display: none;" download = "download"></a>
    <button onclick = "download.href = 'data:text/html;base64,' + btoa(concealText.innerHTML);download.click()">Download</button>
    <input id = "upload" type = "file"  style = "display: none;"></a>
    <button onclick = "upload.click()">Upload</button>
    <button id = "conceal" onclick = "localStorage.setItem('text', concealText.innerHTML);location.href = location.href;">Decrypt</button>
    <style>
    p {
  border-color: gray;
  border-style: solid;
  border-radius: 2px;
  border-width: 1px;
  overflow: auto;
  resize: vertical;
  width: calc(100vw * var(--zoom) - 13px);
  height: calc(30vh * var(--zoom));
  font-family: arial;
  font-size: min(max(1.6vw * var(--zoom), 12px), 30px);
  position: relative;
  background-color: #fefefe;
  padding-left: 2px;
  padding-top: 2px;
  padding-right: 5px;
}

p:hover {
  border-color: #505050;
}


p:focus {
  border-radius: 0px;
}

#concealText {
  margin-top: -4px;
}

#concealText:focus {
  outline: none;
}

#carrierText {
  margin-top: -17px;
}

#carrierText:active {
  color: black;
}

#carrierText:focus {
  outline: none;
  color: black;
}

body {
  --zoom: 0.6;
  filter: invert(90%) hue-rotate(180deg);
  position: relative;
  top: 10px;
  left: -1px;
  padding-top: calc(5vh * var(--zoom));
  background-color: black;
}

button {
  border-width: 1px;
  border-style: solid;
  border-color: gray;
  position: relative;
  top: -16px;
  width: calc(20vw * var(--zoom));
  height: calc(4vw * var(--zoom));
  font-size: calc(3vw * var(--zoom));
  margin-right: -5px;
  padding: 1px;
}

button:focus {
  border-color: orange;
}

button:active {
  border-color: rgb(0, 163, 163);
}

button:hover:not(:active):not(:focus) {
  border-color: #505050;
}

#decrypt {
  position: relative;
  left: -5px;
}

*:focus {
  outline: none;
  z-index: 2;
}

*:hover {
  z-index: 3;
}

p:focus {
  border-color: orange
}

p:active {
  border-color: orange;
}
    </style>
    <script src = "steg.js"></script>
  </body>
</html>`)
}

function gpl() {
  alert(`Copyright 2021 Eli Knisbacher

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

The GNU GPL is provided on https://aesish.landfish.repl.co/license.html and can be copied on https://aesish.landfish.repl.co/copying.html
`)
}