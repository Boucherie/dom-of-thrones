function scene2() {
  // console.log('Executing scene 2!');

  // Setup Stage
  castle = document.querySelector('#castle')
  stageImg = stage.querySelector('#stage-img')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast

  // Character 1

  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  // nedContainer.style.border = '2px solid red'
  // nedContainer.style.backgroundColor = 'yellow'
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '20%'
  nedContainer.style.top = '50%'
  nedContainer.style.left = '25%'

  ned = document.querySelector('#ned')
  nedContainer.append(ned)

  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  // ned.style.border = '2px solid blue'

  // leather.style.border = '2px solid green'
  leather.style.position = 'absolute'
  leather.style.bottom = '0'
  leather.style.left = '0'

  nedContainer.style.height = '47%'
  ned.style.width = '30px'
  nedContainer.style.height = '37%'
  ned.style.position = 'absolute'
  ned.style.left = '4px'
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
