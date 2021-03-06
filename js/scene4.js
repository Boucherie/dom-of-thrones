function scene4() {

  // Setup Stage
  kingsLanding = document.querySelector('#kings-landing')
  mySrc = kingsLanding.getAttribute('src');
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)


  // Setup Cast

  //  Cersei
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
  cersei.style.width = '70%'
  cersei.style.left = '5%'

  redDress = document.querySelector('#red-dress')
  cerseiContainer.append(redDress)
  redDress.style.position = 'absolute'
  redDress.style.bottom = 0
  redDress.style.left = '-10%'

  // Viserys

  viserysContainer = document.createElement('div')
  viserysContainer.id = 'viserys-container'
  document.querySelector('#stage').append(viserysContainer)

  // viserysContainer.style.background = 'yellow'
  // viserysContainer.style.border = '2px solid red'
  viserysContainer.style.position = 'absolute'
  viserysContainer.style.width = '10%'
  viserysContainer.style.height = '36%'
  viserysContainer.style.top= '60%'
  viserysContainer.style.left = '60%'

  viserys = document.querySelector('#viserys')
  viserysContainer.append(viserys)
  viserys.style.width = '60%'
  viserys.style.left = 0

  kingRobes = document.querySelector('#king')
  viserysContainer.append(kingRobes)
  kingRobes.style.position = 'absolute'
  kingRobes.style.bottom = 0
  kingRobes.style.left = '-40%'


  //  Petyr
  petyrContainer = document.createElement('div')
  petyrContainer.id = 'petyr-container'
  document.querySelector('#stage').append(petyrContainer)

  // petyrContainer.style.background = 'yellow'
  // petyrContainer.style.border = '2px solid red'
  petyrContainer.style.position = 'absolute'
  petyrContainer.style.width = '10%'
  petyrContainer.style.height = '36%'
  petyrContainer.style.top= '60%'
  petyrContainer.style.left = '40%'

  petyr = document.querySelector('#petyr')
  petyrContainer.append(petyr)
  petyr.style.width = '60%'
  petyr.style.left = 0

  brownRobes = document.querySelector('#brown-robes')
  petyrContainer.append(brownRobes)
  brownRobes.style.position = 'absolute'
  brownRobes.style.bottom = 0
  brownRobes.style.left = '-20%'


  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    cerseiContainer.style.top= '60%'
    cerseiContainer.style.left = '20%'
  })

  frame(function() {
    petyrContainer.style.top= '60%'
    petyrContainer.style.left = '40%'
  })

  frame(function() {
    cerseiContainer.style.top= '60%'
    cerseiContainer.style.left = '23%'
  })

  frame(function() {
    petyrContainer.style.top= '60%'
    petyrContainer.style.left = '37%'
  })

  frame(function() {
    cerseiContainer.style.top= '60%'
    cerseiContainer.style.left = '26%'
  })

  frame(function() {
    petyrContainer.style.top= '60%'
    petyrContainer.style.left = '37%'
  })
  frame(function() {
    cerseiContainer.style.top= '60%'
    cerseiContainer.style.left = '30%'
  })

  frame(function() {
    petyrContainer.style.top= '60%'
    petyrContainer.style.left = '33%'
  })

  frame(function() {
    cerseiContainer.style.top= '60%'
    cerseiContainer.style.left = '34%'
  })

  frame(function() {
    petyrContainer.style.top= '60%'
    petyrContainer.style.left = '29%'
  })

  frame(function() {
    cerseiContainer.style.top= '60%'
    cerseiContainer.style.left = '37%'
  })

  frame(function() {
    petyrContainer.style.top= '60%'
    petyrContainer.style.left = '25%'
  })

  frame(function() {
    cerseiContainer.style.top= '60%'
    cerseiContainer.style.left = '40%'
  })

  frame(function() {
    petyrContainer.style.top= '60%'
    petyrContainer.style.left = '20%'
  })

  frame(function() {
    viserysContainer.style.top= '60%'
    viserysContainer.style.left = '60%'
  })

  frame(function() {
    petyrContainer.style.top= '55%'
    petyrContainer.style.left = '20%'
  })

  frame(function() {
    petyrContainer.style.top= '60%'
    petyrContainer.style.left = '20%'
  })
  frame(function() {
    petyrContainer.style.top= '55%'
    petyrContainer.style.left = '20%'
  })

  frame(function() {
    petyrContainer.style.top= '60%'
    petyrContainer.style.left = '20%'
  })

  frame(function() {
    viserysContainer.style.top= '60%'
    viserysContainer.style.left = '60%'
  })
  frame(function() {
    cerseiContainer.style.top= '60%'
    cerseiContainer.style.left = '42%'
  })

  frame(function() {
    viserysContainer.style.top= '60%'
    viserysContainer.style.left = '55%'
  })

  frame(function() {
    cerseiContainer.style.top= '60%'
    cerseiContainer.style.left = '48%'
  })

  frame(function() {
    viserysContainer.style.top= '60%'
    viserysContainer.style.left = '50%'
  })

  frame(function() {
    cerseiContainer.style.top= '60%'
    cerseiContainer.style.left = '54%'
  })

  frame(function() {
    viserysContainer.style.top= '60%'
    viserysContainer.style.left = '45%'
  })

  frame(function() {
    viserysContainer.style.top= '60%'
    viserysContainer.style.left = '40%'
  })
  // Stage direction 2

  // while (parseInt(egg.style.left) > 28) {
  for (sunken = 60; sunken > 0; sunken -= 5) {
    frame(sinkWorstCharacters)
  }

  function sinkWorstCharacters() {
    cerseiContainer.style.top = (parseInt(cerseiContainer.style.top) + 10) + '%'
    viserysContainer.style.top = (parseInt(viserysContainer.style.top) + 10) + '%'
    petyrContainer.style.top = (parseInt(petyrContainer.style.top) + 10) + '%'
    }


}
