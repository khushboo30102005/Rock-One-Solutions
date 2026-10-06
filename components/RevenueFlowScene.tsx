"use client";

import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 22;

export default function RevenueFlowScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    canvas.dataset.sceneReady = "initializing";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
      preserveDrawingBuffer: true
    });
    const group = new THREE.Group();
    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];
    let frameId = 0;

    camera.position.set(0, 0, 8);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    scene.add(group);

    const nodeGeometry = new THREE.SphereGeometry(0.06, 18, 18);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x1c5fb8 });
    const accentMaterial = new THREE.MeshBasicMaterial({ color: 0xf35a2b });

    for (let index = 0; index < NODE_COUNT; index += 1) {
      const angle = index * 0.82;
      const radius = 1.1 + (index % 5) * 0.33;
      const position = new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle * 0.86) * 1.08,
        Math.sin(angle) * 0.95
      );
      const node = new THREE.Mesh(
        nodeGeometry,
        index % 7 === 0 ? accentMaterial : nodeMaterial
      );

      node.position.copy(position);
      nodePositions.push(position);
      nodes.push(node);
      group.add(node);
    }

    const linePositions = new Float32Array((NODE_COUNT - 1) * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8fb8ee,
      transparent: true,
      opacity: 0.42
    });

    for (let index = 0; index < NODE_COUNT - 1; index += 1) {
      const current = nodePositions[index];
      const next = nodePositions[index + 1];
      const offset = index * 6;

      linePositions.set([current.x, current.y, current.z], offset);
      linePositions.set([next.x, next.y, next.z], offset + 3);
    }

    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    group.add(new THREE.LineSegments(lineGeometry, lineMaterial));

    const centralRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.85, 0.012, 12, 96),
      new THREE.MeshBasicMaterial({
        color: 0x10a8df,
        transparent: true,
        opacity: 0.42
      })
    );
    centralRing.rotation.x = Math.PI / 2.8;
    group.add(centralRing);

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();

      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      const time = performance.now() * 0.001;

      group.rotation.y = time * 0.16;
      group.rotation.x = Math.sin(time * 0.34) * 0.12;
      centralRing.rotation.z = time * 0.22;

      nodes.forEach((node, index) => {
        const pulse = 1 + Math.sin(time * 1.8 + index) * 0.18;
        node.scale.setScalar(pulse);
      });

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);

    animate();

    canvas.dataset.sceneReady = "true";

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
      renderer.dispose();
      nodeGeometry.dispose();
      lineGeometry.dispose();
      nodeMaterial.dispose();
      accentMaterial.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return (
    <div className="revenue-flow-scene" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="scene-fallback">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
