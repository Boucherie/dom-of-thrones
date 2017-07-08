function scene2() {
  // console.log('Executing scene 2!');

  // Setup Stage
  castle = document.querySelector('#castle')
  stageImg = stage.querySelector('#stage-img')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast

  // Ned

  nedContainer = document.createElement('div')
  nedContainer.id = 'ned-container'
  stage.append(nedContainer)
  nedContainer.style.border = 'none'
  // nedContainer.style.backgroundColor = 'yellow'
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '20%'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '10%'

  ned = document.querySelector('#ned')
  nedContainer.append(ned)

  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  ned.style.border = 'none'

  leather.style.border = 'none'
  leather.style.position = 'absolute'
  leather.style.bottom = '0'
  leather.style.left = '0'

  // nedContainer.style.height = '47%'
  ned.style.width = '30px'
  nedContainer.style.height = '37%'
  ned.style.position = 'absolute'
  ned.style.left = '4px'

  //  Joffrey
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.border = 'none'
  // joffContainer.style.backgroundColor = 'yellow'
  joffContainer.style.position = 'absolute'
  joffContainer.style.width = '8%'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'

  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)

  kingRobes = document.querySelector('#king')
  joffContainer.append(kingRobes)
  joff.style.border = 'none'

  kingRobes.style.border = 'none'
  kingRobes.style.position = 'absolute'
  kingRobes.style.bottom = '0'
  kingRobes.style.left = '0'
  kingRobes.style.height = '77px'

  // nedContainer.style.height = '47%'
  joff.style.width = '30px'
  joffContainer.style.height = '37%'
  joff.style.position = 'absolute'
  joff.style.right = '0'

  // Setup Props

  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '20%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'
  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '20%'
  })

  frame(function() {
    sword.style.top = '76%'
    sword.style.left = '26%'
  })
  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '31%'
  })
  frame(function() {
    sword.style.top = '72%'
    sword.style.left = '36%'
  })


  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '47%'
  })

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })



  // Stage direction 2

  frame(function() {
    joff.style.top = 0
    joff.style.left = '33%'
  })

  frame(function() {
    joff.style.top = '15%'
    joff.style.left = '75%'
    joff.style.transform = 'rotateZ(140deg)'
  })

  frame(function() {
    joff.style.top = '20%'
    joff.style.left = '100%'
    joff.style.transform = 'rotateZ(260deg)'
  })

  frame(function() {
    joff.style.top = '28%'
    joff.style.left = '135%'
    joff.style.transform = 'rotateZ(180deg)'
  })

  frame(function() {
    joff.style.top = '40%'
    joff.style.left = '170%'
    joff.style.transform = 'rotateZ(260deg)'

  })

  frame(function() {
    joff.style.top = '50%'
    joff.style.left = '200%'
    joff.style.transform = 'rotateZ(180deg)'
  })

  frame(function() {
    joff.style.top = '70%'
    joff.style.left = '230%'
    joff.style.transform = 'rotateZ(260deg)'
  })
}
