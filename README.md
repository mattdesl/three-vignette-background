# three-vignette-background

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A soft vignette background for ThreeJS demos with a [simplex noise grain](https://github.com/mattdesl/glsl-film-grain).

Currently, browserify is required to use this module as it has a hard dependency on [glslify](https://github.com/stackgl/glslify), a browserify transform.

Also see [gl-vignette-background](https://github.com/mattdesl/gl-vignette-background).

## Install

```sh
npm install three-vignette-background --save
```

## Example

```js
var createOrbitViewer = require('three-orbit-viewer')(THREE)
var createBackground = require('./')

var app = createOrbitViewer({
  clearColor: 'rgb(40, 40, 40)',
  clearAlpha: 1.0,
  fov: 55,
  position: new THREE.Vector3(0, 2, -2)
})

// add a default background
var background = createBackground()
app.scene.add(background)

// ... setup rest of scene ...
```

See [demo.js](./demo.js) for another usage example.

## Usage

[![NPM](https://nodei.co/npm/three-vignette-background.png)](https://www.npmjs.com/package/three-vignette-background)

#### `background = createBackground([opt])`

Creates a new vignette background with some default options. Turning the `grainScale` or `noiseAlpha` to zero will not compute the grain noise.

- `geometry` the geometry to use, defaults to `new PlaneGeometry(2, 2, 1)`
- `colors` an array of two colors to use; either strings or `THREE.Color` objects; default `[ '#fff', '#283844' ]`
- `aspect` aspect ratio for grain and vignette; default 1
- `grainScale` how large to scale the grain particles, default 0.005
- `grainTime` the time offset for animating grain; default 0
- `noiseAlpha` the alpha to blend the noise onto the background, default 0.25
- `smooth` an `[x, y]` array or THREE.Vector2 with the low and high smoothstep values for the vignetting, default `[ 0, 1 ]`
- `scale` a number, `[x, y]` array, or THREE.Vector2 with the scaling for the vignette, default 1
- `offset` a `[x, y]` array or THREE.Vector2 to offset the vignette; default `[0, 0]`
- `aspectCorrection` a boolean, default false, as to whether to correct the vignette scale to the `aspect` value

#### `background.style(opt)`

Re-style the background. Any values that are specified in `opt` will be set, others will not be changed. Takes all the same values except `geometry`, which must be set at creation time.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/three-vignette-background/blob/master/LICENSE.md) for details.
