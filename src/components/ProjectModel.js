import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class ProjectModel extends Component {

    componentDidMount() {
        this.init();
    }

    init() {
        let element = document.getElementById('scene-project');
        let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        let scene = new THREE.Scene();
         // Set Renderer
         renderer.setPixelRatio(
            element.devicePixelRatio ? element.devicePixelRatio : 1
        );
        renderer.setSize(element.clientWidth, element.clientHeight);
        renderer.autoClear = false;
        renderer.setClearColor(0x383636, 1);
        element.appendChild(renderer.domElement);

        // Set Camera
        let camera = new THREE.PerspectiveCamera(
            75,
            element.clientWidth / element.clientHeight,
            1,
            1000
        );
        camera.position.z = 400;
        scene.add(camera);

        // Set 3D Objects
        let skelet = new THREE.Object3D();
        let particle = new THREE.Object3D();
        let model = null;

        // Orbit Controls
        new OrbitControls(camera, renderer.domElement);
        camera.position.set(0, 5, 100);
        // camera.update();

        // Add 3D Objects to scene
        // scene.add(skelet);
        scene.add(particle);

        // Set Geometry for Particles & Skelet
        var geometry = new THREE.TetrahedronGeometry(2, 0);

        // Set Particle Material (Texture)
        var material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            shading: THREE.FlatShading,
        });

        // Set Particle Mesh
        for (let i = 0; i < 100; i++) {
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position
                .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
                .normalize();
            mesh.position.multiplyScalar(90 + Math.random() * 700);
            mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
            particle.add(mesh);
        }

        // Set Lighting
        var ambientLight = new THREE.AmbientLight(0xffffff, 2);
        scene.add(ambientLight);

        var lights = [];
        lights[0] = new THREE.DirectionalLight(0xffffff, 2.5);
        lights[0].position.set(0, 0, 0);
        scene.add(lights[0]);
        renderer.render(scene, camera);

        let animate = () => {
            requestAnimationFrame(animate);
            particle.rotation.x += 0.0;
            particle.rotation.y -= 0.004;
            skelet.rotation.x -= 0.001;
            skelet.rotation.y += 0.002;
            if (model) model.rotation.y += 0.002;
            renderer.clear();
            renderer.render(scene, camera);
        };

        let onWindowResize = () => {
            camera.aspect = element.clientWidth / element.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(element.clientWidth, element.clientHeight);
        };

        // Event Listener to Resize Canvas
        window.addEventListener("resize", onWindowResize, false);

         // Load Model Scale 16
         let loader = new GLTFLoader();
         let dracoloader = new DRACOLoader();
         dracoloader.setDecoderPath("/js/libs/draco/");
         loader.setDRACOLoader(dracoloader);
         loader.load(this.props.model, (gltf) => {
             model = gltf.scene.children[0];
             model.scale.x = model.scale.y = model.scale.z = 18;
             model.position.y = -50;
             model.rotation.y = -10;
             model.traverse((o) => {
                 if (o.isMesh) {
                     o.material.roughness = 0.5;
                     o.material.metalness = 0.5;
                     o.material.side = THREE.DoubleSide;
                     o.material.shading = THREE.FlatShading;
                 }
                });
             scene.add(model);
             animate();
         });
    }

	render() {
		return (
			<div id="scene-project"></div>
		);
	}
}

export default ProjectModel;
