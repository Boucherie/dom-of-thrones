
function scene3() {
  // Setup Stage
  mySrc = desert.getAttribute('src');
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)
  // Setup Cast

  //  Danerys
  danerysContainer = document.createElement('div')
  danerysContainer.id = 'danerys-container'

  document.querySelector('#stage').append(danerysContainer)

  // danerysContainer.style.background = 'yellow'
  // danerysContainer.style.border = '2px solid red'
  danerysContainer.style.position = 'absolute'
  danerysContainer.style.width = '60px'
  danerysContainer.style.height = '128px'
  danerysContainer.append(danerys)

  blueDress = document.querySelector('#blue-dress')
  danerysContainer.append(blueDress)

  danerys.style.position = 'absolute'
  danerys.style.width = '40px'

  blueDress.style.position = 'absolute'
  blueDress.style.bottom = 0
  danerysContainer.style.top = '40%'
  danerysContainer.style.left = '20%'

  // Drogo

  drogoContainer = document.createElement('div')
  drogoContainer.id = 'drogo-container'

  document.querySelector('#stage').append(drogoContainer)

  // drogoContainer.style.background = 'yellow'
  // drogoContainer.style.border = '2px solid red'
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.left = '70%'
  drogoContainer.style.top = '40%'
  drogoContainer.style.width = '60px'
  drogoContainer.style.height = '133px'

  drogoContainer.append(drogo)
  drogo.style.position = 'absolute'
  drogo.style.left = '6px'
  drogo.style.width = '45px'

  bulkyMan = document.querySelector('#bulky-man')
  drogoContainer.append(bulkyMan)
  bulkyMan.style.position = 'absolute'
  bulkyMan.style.bottom = 0



  // Setup Props

  // Prop 1

  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.left = '28%'
  egg.style.top = '50%'
  egg.style.width = '40px'

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.left = '28%'
  })

  frame(function() {
    egg.style.left = '34%'
  })

  frame(function() {
    egg.style.left = '45%'
  })

  frame(function() {
    egg.style.left = '53%'
  })

  frame(function() {
    egg.style.left = '65%'
  })

// while (parseInt(egg.style.left) > 28) {
for (eggLeft = 65; eggLeft > 28; eggLeft -= 10) {
  frame(drogoThrowsEgg)
}

function drogoThrowsEgg() {
  egg.style.left = (parseInt(egg.style.left) - 10) + '%'
  }

  // Stage direction 2




  // Stage direction 2

}
