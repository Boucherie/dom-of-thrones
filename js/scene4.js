function scene4() {

  // Setup Stage
  kingsLanding = document.querySelector('#kings-landing')
  mySrc = kingsLanding.getAttribute('src');
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)


  // Setup Cast

  // Character 1
  cerseiContainer = document.createElement('div')
cerseiContainer.id = 'cersei-container'
document.querySelector('#stage').append(cerseiContainer)

// cerseiContainer.style.background = 'yellow'
// cerseiContainer.style.border = '2px solid red'
cerseiContainer.style.position = 'absolute'
cerseiContainer.style.width = '10%'
cerseiContainer.style.height = '38%'
cerseiContainer.style.top= '60%'
cerseiContainer.style.left = '20%'

cersei = document.querySelector('#cersei')
cerseiContainer.append(cersei)
cersei.style.width = '75%'
cersei.style.left = '5%'

redDress = document.querySelector('#red-dress')
cerseiContainer.append(redDress)
redDress.style.position = 'absolute'
redDress.style.bottom = 0
redDress.style.left = '-10%'

  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
