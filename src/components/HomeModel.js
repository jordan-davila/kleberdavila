import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

class HomeModel extends Component {
    componentDidMount() {
        this.init();
    }

    init() {
        let element = document.getElementById('scene');
        let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        let scene = new THREE.Scene();
         // Set Renderer
         renderer.setPixelRatio(
            element.devicePixelRatio ? element.devicePixelRatio : 1
        );
        renderer.setSize(element.clientWidth, element.clientHeight);
        renderer.autoClear = false;
        renderer.setClearColor(0x000000, 0.0);
        element.appendChild(renderer.domElement);

        let mouse = new THREE.Vector3(); //Needed for mouse coordinates

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
        // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        camera.position.set(0, 5, 100);
        // this.camera.update();

        // Add 3D Objects to scene
        // scene.add(skelet);
        scene.add(particle);

        // Set Geometry for Particles & Skelet
        var geometry = new THREE.TetrahedronGeometry(2, 0);
        var geom = new THREE.IcosahedronGeometry(15, 1);

        // Set Particle Material (Texture)
        var material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            shading: THREE.FlatShading,
        });

        // Set Particle Mesh
        for (let i = 0; i < 400; i++) {
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position
                .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
                .normalize();
            mesh.position.multiplyScalar(90 + Math.random() * 700);
            mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
            particle.add(mesh);
        }

        // Set Skelet Material (Texture)
        var mat = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            wireframe: true,
            side: THREE.DoubleSide,
        });

        // Set Skelet Mesh
        var planet = new THREE.Mesh(geom, mat);
        planet.scale.x = planet.scale.y = planet.scale.z = 10;
        skelet.add(planet);

        // Set Lighting
        var ambientLight = new THREE.AmbientLight(0x666666, 1);
        scene.add(ambientLight);

        var lights = [];
        lights[0] = new THREE.DirectionalLight(0x111111, 1);
        lights[0].position.set(1, 0, 0);
        lights[1] = new THREE.DirectionalLight(0x999999, 1);
        lights[1].position.set(0.75, 1, 0.5);
        lights[2] = new THREE.DirectionalLight(0xfbfbfb, 1);
        lights[2].position.set(-0.75, -1, 0.5);
        scene.add(lights[0]);
        scene.add(lights[1]);
        scene.add(lights[2]);
        renderer.render(scene, camera);

        let animate = () => {
            requestAnimationFrame(animate);
            particle.rotation.x += 0.0;
            particle.rotation.y -= 0.004;
            skelet.rotation.x -= 0.001;
            skelet.rotation.y += 0.002;
            renderer.clear();
            // required if controls.enableDamping or controls.autoRotate are set to true
            // this.controls.update();
            lights[1].color.set(window.color)
            if (model) {
                model.traverse((o) => {
                    if (o.isMesh) o.material = new THREE.MeshPhongMaterial({
                        color: 0xffffff,
                        wireframe: true,
                        side: THREE.DoubleSide,
                    });
                });

                let q = new THREE.Quaternion().setFromEuler(
                    new THREE.Euler(mouse.y, mouse.x, 0, "YXZ")
                );
                let newQuaternion = new THREE.Quaternion();
                THREE.Quaternion.slerp(model.quaternion, q, newQuaternion, 0.07);

                // console.log(newQuaternion);
                model.quaternion.set(newQuaternion.x, newQuaternion.y, newQuaternion.z, newQuaternion.w);
                model.quaternion.normalize();
            }
            renderer.render(scene, camera);
        };


        let onDocumentMouseMove = (event) => {
            event.preventDefault();
            mouse.x = ((event.pageX / element.clientWidth) * 2 - 1) * 0.1;
            mouse.y = (event.pageY / element.clientHeight) * 0.2 + 0.7;
        };

        let onWindowResize = () => {
            camera.aspect = element.clientWidth / element.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(element.clientWidth, element.clientHeight);
        };

        // Event Listener to Resize Canvas
        window.addEventListener("resize", onWindowResize, false);
        window.addEventListener("mousemove", onDocumentMouseMove, false);

         // Load Model Scale 16
         let loader = new GLTFLoader();
         let dracoloader = new DRACOLoader();
         dracoloader.setDecoderPath("/js/libs/draco/");
         loader.setDRACOLoader(dracoloader);
         loader.load("/models/thepromise.glb", (gltf) => {
             model = gltf.scene.children[0];
             model.scale.x = model.scale.y = model.scale.z = 3.7;
             model.position.y = -47;
             model.rotation.y = -0.7;
             console.log(model.quaternion)
             scene.add(model);
             animate();
         });
    }

	render() {
		return (
			<div id="scene"></div>
		);
	}
}

export default HomeModel;
