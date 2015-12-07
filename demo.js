global.THREE = require('three')
var createOrbitViewer = require('three-orbit-viewer')(THREE)
var createBackground = require('./')

var app = createOrbitViewer({
  clearColor: 'rgb(40, 40, 40)',
  clearAlpha: 1.0,
  fov: 55,
  position: new THREE.Vector3(0, 2, -2)
})

var background = createBackground()
app.scene.add(background)

var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshBasicMaterial({
  color: '#000',
  wireframe: true
})
var box = new THREE.Mesh(geometry, material)
app.scene.add(box)

app.on('tick', function () {
  var width = window.innerWidth
  var height = window.innerHeight
  background.style({
    aspect: width / height,
    aspectCorrection: true,
    scale: 2.5,
    offset: [-0.2, 0.25],
    // ensure even grain scale based on width/height
    grainScale: 1.5 / Math.min(width, height)
  })
})
