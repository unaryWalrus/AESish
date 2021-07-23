if (location.href === 'https://aesish.landfish.repl.co/#steg')
  steg()
if (localStorage.getItem('text')) {
  tStr.value = localStorage.getItem('text')
  localStorage.setItem('text', '')
}
String.prototype.move = function (int) {
  endStr = this
  if (int > 0) {
    for (let i = 0; i < int; i++) {
      endStr = endStr[endStr.length - 1] + endStr.substr(0, endStr.length - 1)
    }
  }
  if (int < 0) {
    for (let i = 0; i < Math.abs(int); i++) {
      endStr = endStr.substr(1, endStr.length) + endStr[0]
    }
  }
  return endStr
}
String.prototype.unique = function () {
  let eStr = ''
  for (let i = 0; i < this.length; i++) {
    if (!eStr.includes(this[i])) {
      eStr += this[i]
    }
  }
  return eStr
}
function encrypt(str = '', key = '', ed = 'e') {
  let binary = '';
  let text = '';
  let i = -1;
  if (!key) {
    key = 'abcdefghijklmnopqrstuvwxyz1234';
  }
  if (key.length > 30) {
    key = key.slice(0, 29)
  }
  key = key.unique()
  if (key.length < 12) {
    kStr.value += '\n*Your key must have at least thirteen unique characters and no more than 30.'
    return ''
  }
  let endkey = '';
  let multiplier = key.charCodeAt(12)
  key = key.move(multiplier)
  while (i < key.length - 1) {
    i++;
    endkey += String.fromCharCode(key.charCodeAt(i) * multiplier);
  }
  key = endkey;
  key = key.split('');
  i = -1;
  function encode() {
    while (i < str.length - 1) {
      i++;
      binary += str.charCodeAt(i).toString(2) + '2';
    }
    i = -1;
    binary = binary
      .replace(/000/g, key[13] || '000')
      .replace(/001/g, key[14] || '001')
      .replace(/002/g, key[15] || '002')
      .replace(/010/g, key[16] || '010')
      .replace(/011/g, key[17] || '011')
      .replace(/012/g, key[18] || '012')
      .replace(/020/g, key[19] || '020')
      .replace(/021/g, key[20] || '021')
      .replace(/022/g, key[21] || '022')
      .replace(/100/g, key[22] || '100')
      .replace(/101/g, key[23] || '101')
      .replace(/102/g, key[24] || '102')
      .replace(/110/g, key[25] || '110')
      .replace(/111/g, key[26] || '111')
      .replace(/112/g, key[27] || '112')
      .replace(/120/g, key[28] || '120')
      .replace(/121/g, key[29] || '121')
      .replace(/122/g, key[30] || '122')
      .replace(/00/g, key[0])
      .replace(/01/g, key[1])
      .replace(/02/g, key[2])
      .replace(/10/g, key[3])
      .replace(/11/g, key[4])
      .replace(/12/g, key[5])
      .replace(/20/g, key[6])
      .replace(/21/g, key[7])
      .replace(/22/g, key[8])
      .replace(/0/g, key[9])
      .replace(/1/g, key[10])
      .replace(/2/g, key[11])
  }
  function decode() {
    str = str
      .replaceAll(key[13] || '000', '000')
      .replaceAll(key[14] || '001', '001')
      .replaceAll(key[15] || '002', '002')
      .replaceAll(key[16] || '010', '010')
      .replaceAll(key[17] || '011', '011')
      .replaceAll(key[18] || '012', '012')
      .replaceAll(key[19] || '020', '020')
      .replaceAll(key[20] || '021', '021')
      .replaceAll(key[21] || '022', '022')
      .replaceAll(key[22] || '100', '100')
      .replaceAll(key[23] || '101', '101')
      .replaceAll(key[24] || '102', '102')
      .replaceAll(key[25] || '110', '110')
      .replaceAll(key[26] || '111', '111')
      .replaceAll(key[27] || '112', '112')
      .replaceAll(key[28] || '120', '120')
      .replaceAll(key[29] || '121', '121')
      .replaceAll(key[30] || '122', '122')
      .replaceAll(key[0], '00')
      .replaceAll(key[1], '01')
      .replaceAll(key[2], '02')
      .replaceAll(key[3], '10')
      .replaceAll(key[4], '11')
      .replaceAll(key[5], '12')
      .replaceAll(key[6], '20')
      .replaceAll(key[7], '21')
      .replaceAll(key[8], '22')
      .replaceAll(key[9], '0')
      .replaceAll(key[10], '1')
      .replaceAll(key[11], '2')
    while (i < str.length) {
      i++;
      let t = str.split(2);
      let t2 = parseInt(t[i], 2);
      text += String.fromCharCode(t2);
      t++
    }
    text = text.substr(0, (str.split(2).length) - 1);
  }
  if (ed == 'e') {
    encode();
    return binary
  } else if (ed == 'd') {
    decode();
    return text
  }
}
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
    <p id = "carrierText" contentEditable = "true" spellcheck = "false" title = "Carrier text, default lorem ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo dui, aliquet eget mollis eget, sodales scelerisque mauris. Praesent vulputate libero lacinia finibus feugiat. Aliquam cursus, dolor vel scelerisque molestie, mauris quam accumsan quam, eget aliquet libero eros sit amet tortor. Sed sed dolor at ex ullamcorper fermentum. Sed sed viverra lorem, id finibus ex. Nulla vestibulum viverra elit rutrum pulvinar. Vivamus ultrices risus ex. Integer congue risus id augue maximus, ut vulputate libero malesuada. Nullam suscipit dignissim laoreet. Phasellus gravida, quam id elementum imperdiet, lectus mauris placerat urna, at blandit sem neque sit amet odio. Sed sed faucibus magna, id dictum mauris. Mauris sapien dolor, pharetra vel iaculis vel, facilisis at massa.

Suspendisse rhoncus tincidunt lorem id dictum. Maecenas vitae ex at dui tincidunt mollis a non augue. Morbi at lectus eu velit mollis molestie. Curabitur pretium, lectus ac tristique vestibulum, nunc neque scelerisque mauris, quis ultrices quam risus hendrerit risus. Sed tempus tincidunt venenatis. Etiam convallis tempor nunc. Sed quam sapien, consectetur id nunc eget, pulvinar molestie magna. Nullam eu tortor tortor. Sed pretium, lacus sollicitudin dapibus dictum, tellus arcu luctus nunc, in auctor neque leo id augue.

Quisque ac interdum metus, et fringilla nunc. Nulla at nulla vel erat rhoncus tristique. Vivamus ultrices non sem blandit finibus. Sed lacinia tristique laoreet. Vivamus vestibulum non leo ut tristique. Pellentesque vel eros rutrum, egestas tortor in, gravida urna. Donec orci metus, egestas et elementum eu, sagittis sit amet lectus. Maecenas gravida purus ligula, vel pretium sem rhoncus nec. Integer semper in nunc id maximus. Praesent porttitor rhoncus ante, nec sagittis nunc elementum sit amet. Nam rutrum aliquam risus a blandit. Curabitur tempor efficitur sollicitudin. Aenean vel nibh fringilla, tempus metus at, eleifend nunc.

Mauris porttitor iaculis nulla nec mattis. Phasellus vel est at augue cursus congue. Aliquam feugiat augue at pellentesque maximus. Cras dignissim, ante ac hendrerit mollis, quam dui blandit elit, eu ultricies lacus tortor vitae metus. Phasellus commodo mi sed vestibulum cursus. Vivamus egestas ullamcorper nisl, quis posuere enim aliquet in. Nullam vel gravida nibh, et rutrum felis. Duis accumsan diam sit amet risus condimentum tincidunt. Pellentesque id purus magna. Phasellus in vehicula nunc, sed fermentum sem.

Praesent ut fringilla nulla. Integer vel magna at enim sollicitudin dictum. Duis at feugiat turpis. Aenean lectus massa, sodales porta arcu vel, varius placerat erat. Praesent at leo nulla. Suspendisse lobortis euismod lorem sed lacinia. Proin egestas neque et mauris volutpat, vitae imperdiet est sodales.

Proin tincidunt ante et ultrices vulputate. Nulla vel nulla turpis. Maecenas non turpis in lacus volutpat dapibus ut sed nunc. In eu eleifend tellus, a hendrerit est. Phasellus nec venenatis erat. Quisque quis lacus tellus. Aenean pharetra nulla porttitor tortor molestie blandit. Proin dolor lacus, lacinia et odio vitae, molestie placerat dui. Nullam ut imperdiet metus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ultrices nisi. Sed vulputate a elit ut suscipit. Proin placerat luctus erat vitae rhoncus. Morbi sed risus a justo blandit malesuada eu in felis. Mauris pretium, libero a egestas tempus, purus neque mattis dolor, eu faucibus nisi lectus vel felis. Duis ut justo nec eros porta semper non et massa. Vestibulum et quam eu ante rutrum hendrerit ac sed mi. Donec at tempus nunc. Vestibulum ac feugiat mi. Mauris erat urna, auctor at tincidunt vel, posuere nec sapien. Nam magna est, ultricies non eros quis, lacinia condimentum nunc. Maecenas a scelerisque mauris. Nulla in imperdiet lectus. Etiam lectus nunc, commodo a dictum vitae, varius quis mauris.

Nam vel nisl pretium, tristique nisl vestibulum, venenatis justo. Pellentesque maximus elit lectus, nec mattis augue dapibus a. Curabitur sollicitudin a mi sit amet consequat. Curabitur at viverra risus, ac laoreet mi. In vestibulum augue ac ligula congue, sed mollis ligula interdum. Donec porta augue efficitur enim volutpat maximus. Praesent arcu arcu, tristique vitae varius ultricies, ultrices vel risus. Pellentesque eu elit vel diam varius lobortis. Fusce egestas velit at vestibulum porta. Aliquam sodales ante ac ligula tincidunt, a faucibus risus accumsan. Fusce ut bibendum ante, eget dignissim quam.

Donec ultrices urna a magna elementum, vitae dapibus diam volutpat. Morbi tempus leo risus. Ut sit amet rhoncus elit. Nam cursus dapibus mi, in feugiat quam tincidunt at. Etiam eget ligula justo. Sed congue velit at laoreet vestibulum. Nullam vel velit et lectus maximus auctor. Nunc rhoncus tellus sed urna interdum cursus. Cras eleifend urna id felis scelerisque commodo. Proin lorem orci, placerat ut condimentum vel, consectetur non sapien. Ut varius diam non elementum ultrices. Nunc elementum neque id felis pretium elementum. Maecenas ultricies placerat aliquet. Suspendisse cursus nisi sit amet lacinia sagittis. Curabitur facilisis mauris at elit congue efficitur. Duis eros nibh, ultrices ut consequat id, ornare quis nulla.

Vestibulum facilisis, dolor vel posuere congue, quam sem laoreet mi, non convallis dui odio non justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus porta scelerisque. Aenean magna lectus, dapibus quis ante eget, varius vestibulum purus. Cras bibendum ex id pulvinar semper. Suspendisse congue tempor velit ac sollicitudin. Nulla non placerat purus, sit amet cursus nibh. Curabitur facilisis lacus sem. Nunc ut est nulla. Etiam gravida ut mi ut eleifend. Vestibulum ut viverra tellus.

Nulla sem urna, blandit ac pulvinar et, malesuada eget lectus. Ut luctus congue justo, id iaculis augue convallis a. Aenean vitae dui ultrices, gravida dolor eget, dapibus nisl. Suspendisse malesuada justo eu tellus rhoncus malesuada. Donec eu ante in elit tincidunt cursus non suscipit metus. Nulla pellentesque gravida mauris, sit amet semper ipsum facilisis id. Sed sed feugiat mi. Etiam dignissim diam dapibus arcu auctor, vitae venenatis lorem venenatis. Suspendisse fermentum nulla eu nisi tempus, quis aliquet lacus efficitur. Curabitur eget fermentum dui, id tempus turpis.

Cras quis sagittis nibh. Integer mauris urna, blandit sit amet tortor ac, consectetur imperdiet elit. Fusce faucibus, massa vel sagittis sagittis, nulla nulla dignissim nisl, vitae molestie magna arcu ut diam. Quisque accumsan mauris eu justo pellentesque pulvinar. Duis neque purus, tincidunt a tincidunt quis, tristique volutpat dui. In molestie massa at lorem accumsan, id rhoncus leo maximus. Ut arcu odio, sollicitudin sit amet ullamcorper id, vehicula finibus ligula. Etiam vitae est lacus.

Integer sed sapien convallis, ultrices tortor eu, commodo dui. In hac habitasse platea dictumst. Sed eget quam id elit sagittis varius ut vel erat. Nam ornare luctus eleifend. Nullam ultricies mi id erat porttitor, sed sagittis sapien venenatis. Sed sodales, tortor a sagittis scelerisque, lacus turpis ornare nisi, sed accumsan quam risus id massa. Praesent ultrices a tortor eget mollis. Ut nec euismod nisl. In aliquam posuere dolor at pretium.

Suspendisse sodales nulla vitae sapien accumsan aliquet. Ut pulvinar nisi non tellus luctus gravida. Pellentesque eu nibh eget leo condimentum gravida vel eu nunc. Nulla facilisi. Vestibulum scelerisque fermentum consectetur. Sed pellentesque odio enim. Duis venenatis massa sit amet urna accumsan porttitor. Aliquam id tincidunt enim. Vivamus faucibus magna metus, eget elementum neque vehicula non. Aenean vitae nibh vitae sem auctor imperdiet. Duis porta a diam eget sodales. Curabitur maximus luctus justo, nec fringilla nunc aliquet sit amet. Etiam fermentum ullamcorper sapien sed laoreet. Nunc non justo aliquet, maximus justo et, dignissim nisi. Quisque iaculis velit quis velit ullamcorper, a pharetra arcu accumsan.

Nam viverra sollicitudin metus id volutpat. Vivamus quis sem eu lacus posuere pulvinar. Suspendisse sodales varius ullamcorper. Donec fermentum eleifend libero vitae ultrices. Sed ultrices dolor eu egestas iaculis. Cras vel libero quis ligula imperdiet mattis quis sed elit. Duis posuere, quam condimentum malesuada condimentum, enim ligula maximus lacus, sit amet bibendum quam tellus vel nulla. Suspendisse quis elit ut odio egestas consectetur sit amet quis eros.

Phasellus semper pellentesque elit, quis porta diam vestibulum in. Nunc consectetur dolor tellus, id imperdiet est lobortis ut. Donec nec sagittis mi, sit amet lacinia magna. Sed vitae est tristique, auctor nibh at, ornare elit. Fusce volutpat sapien ut tortor porta tempor. Vestibulum ut arcu laoreet, volutpat ipsum sed, efficitur justo. Praesent metus mi, accumsan eu dui ut, sagittis viverra risus. Praesent tempor dapibus ultrices. Nunc quam ipsum, congue non metus sed, varius suscipit odio. Proin congue neque vitae lacus ullamcorper posuere. Etiam ultricies eleifend suscipit. Ut dapibus tortor arcu, sit amet egestas ligula pretium non.

Quisque non tempus nulla, a vehicula turpis. Suspendisse volutpat sagittis pulvinar. Aenean dapibus urna sed dui pellentesque, eget fermentum sem tincidunt. Nam vel tellus tincidunt, sollicitudin nunc sed, eleifend tellus. Donec pharetra fermentum ex, in lobortis lorem tincidunt ut. Suspendisse vestibulum dolor vel enim dictum egestas. Morbi massa purus, accumsan non dictum vitae, suscipit in est. Etiam iaculis facilisis nunc nec semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sit amet commodo lorem. Proin dolor purus, porttitor et elit sed, vehicula lobortis metus.

Suspendisse tempus, sapien id fermentum suscipit, justo sem eleifend sapien, ac gravida lectus ante vitae risus. Morbi lorem risus, dapibus et urna molestie, convallis sollicitudin ante. Aenean eu eros consectetur, vulputate dolor at, sagittis nisi. Ut eu laoreet justo. Phasellus rutrum sapien ac quam volutpat, eget pulvinar felis auctor. Ut blandit ante lobortis, viverra felis nec, fringilla metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nunc purus, mollis non tempus eu, fringilla vitae est. Nunc at tristique mi, eget ultrices justo. Pellentesque efficitur, leo in porta maximus, metus nunc semper dolor, posuere vestibulum ex nisi vitae erat. Vestibulum congue enim sit amet nulla porta, sit amet mollis tellus congue. Pellentesque pharetra elit dui, at accumsan dolor fringilla eget.

Donec euismod lectus et elit fringilla, fermentum tincidunt purus elementum. Nulla gravida, diam vitae auctor egestas, risus sapien rhoncus leo, quis rhoncus justo dui ac massa. Curabitur sollicitudin arcu nec maximus aliquet. Quisque elit ligula, tempus ut diam in, vulputate feugiat orci. Donec sit amet lectus ac urna pretium molestie. Aliquam accumsan eleifend congue. Donec nec pretium sem. Proin in neque non urna pharetra ultrices. Curabitur dictum, libero euismod sodales pretium, felis sapien tincidunt nunc, id vehicula ligula enim quis ante.

Vestibulum efficitur nunc sed massa luctus, id blandit risus aliquet. Duis ornare lacinia egestas. Praesent non elit eu lorem laoreet posuere nec at nisl. Curabitur dictum, dui ut ornare ultricies, augue leo suscipit nulla, sit amet faucibus nunc mi ac eros. Nam ut condimentum dolor, in vulputate eros. Mauris et porta velit. Aenean lorem risus, euismod venenatis felis quis, fringilla varius lacus. Aliquam eleifend interdum ante vitae lobortis. Aliquam est lectus, aliquet non convallis ut, commodo ac felis. Praesent fermentum nunc arcu, tincidunt molestie magna hendrerit id. Maecenas sodales ipsum eget magna elementum sagittis. Sed sagittis lobortis urna, ac fringilla leo blandit sit amet. Praesent mattis, ex eu sodales feugiat, arcu arcu pretium quam, auctor blandit ante nulla ut sem. Nam sapien erat, commodo ac velit at, viverra congue enim. Integer pulvinar nisl ante, in hendrerit lacus pretium eu.</p>
    <button onclick = "concealText.innerHTML = conceal(concealText.innerHTML, carrierText.textContent)">Conceal</button>
    <button onclick = "concealText.innerHTML = reveal(concealText.innerHTML, carrierText.textContent)">Reveal</button>
    <a id = "download" href = "data:,hi"  style = "display: none;" download = "download"></a>
    <button onclick = "(window.frames === window.parent) ? (download.href = 'data:text/html;base64,' + btoa(concealText.innerHTML),download.click()) : alert('Downloads currently aren\'t supported in iframes.')">Download</button>
    <input id = "upload" type = "file"  style = "display: none;"></a>
    <button onclick = "upload.click()">Upload</button>
    <button id = "conceal" onclick = "localStorage.setItem('text', concealText.innerHTML);location.href = 'https://aesish.landfish.repl.co';">Decrypt</button>
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

#concealText {
  margin-top: -4px;
}

#concealText:focus {
  outline: none;
}

#carrierText {
  margin-top: -15px;
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
  top: -15px;
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