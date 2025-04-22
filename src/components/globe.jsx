import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { motion } from 'framer-motion';

const Globe = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const controlsRef = useRef();
  const particleSystemRef = useRef();
  const particleGeometryRef = useRef();
  const animationFrameId = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 13);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = false;
    controls.enableRotate = true;
    controls.enablePan = false;
    controlsRef.current = controls;

    const light = new THREE.PointLight("gray", 3);
    light.position.set(50, 50, -50);
    scene.add(light);

    // Particles setup
    const particleCount = 5000;
    const radius = 5;
    const positions = [];
    const scales = [];
    const opacities = [];

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.push(x, y, z);
      scales.push(Math.random());
      opacities.push(Math.random());
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.Float32BufferAttribute(scales, 1));
    geometry.setAttribute("opacity", new THREE.Float32BufferAttribute(opacities, 1));
    particleGeometryRef.current = geometry;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0xffffff) },
      },
      vertexShader: `
        attribute float scale;
        attribute float opacity;
        varying float vOpacity;

        void main() {
          vOpacity = opacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (20.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vOpacity;
        void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, vOpacity);
        }
      `,
      transparent: true,
    });

    const particleSystem = new THREE.Points(geometry, material);
    particleSystemRef.current = particleSystem;
    scene.add(particleSystem);

    let time = 0;
    const animate = () => {
      time += 0.05;
      const opacityAttr = geometry.attributes.opacity;
      const opacityArray = opacityAttr.array;

      for (let i = 0; i < particleCount; i++) {
        opacityArray[i] = Math.abs(Math.sin(time + i * 0.1));
      }

      opacityAttr.needsUpdate = true;
      particleSystem.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <motion.div  initial={{ opacity: 0}}  animate={{ opacity: 1}} transition={{ duration: .2 }}  className="h-100 h-md-auto position-relative globe-wrapper align-item-center" style={{height: "100vh" }}>
      <canvas id="globeGl" ref={canvasRef}   style={{display: "block" }}/>
    </motion.div>
  );
};

export default Globe;