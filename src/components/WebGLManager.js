// WebGLManager.js

import * as THREE from 'three';

class WebGLManager {
  constructor() {
    this.canvas = null;
    this.renderer = null;
    this.scenes = [];
    this.camera = null;
    this.isContextLost = false;
  }
  initialize(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true });

    // Create a shared camera instance if needed
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Handle context loss event
    this.canvas.addEventListener('webglcontextlost', this.onContextLost.bind(this), false);
    this.canvas.addEventListener('webglcontextrestored', this.onContextRestored.bind(this), false);
  }

  addScene(scene) {
    this.scenes.push(scene);
  }

  removeScene(scene) {
    const index = this.scenes.indexOf(scene);
    if (index !== -1) {
      this.scenes.splice(index, 1);
    }
  }

  render() {
    if (!this.isContextLost) {
      this.renderer.clear();

      this.scenes.forEach((scene) => {
        this.renderer.render(scene, this.camera);
      });
    }
  }

  onContextLost(event) {
    event.preventDefault();
    this.isContextLost = true;
    console.log('WebGL context lost. Please refresh the page.');
  }

  onContextRestored() {
    this.isContextLost = false;
    console.log('WebGL context restored.');
  }
}

export default new WebGLManager();
