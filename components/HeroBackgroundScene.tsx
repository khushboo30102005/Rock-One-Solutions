"use client";

import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroBackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    canvas.dataset.sceneReady = "initializing";

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
      preserveDrawingBuffer: true
    });
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) }
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;

        mat2 rotate2d(float angle) {
          float s = sin(angle);
          float c = cos(angle);
          return mat2(c, -s, s, c);
        }

        float softRibbon(vec2 uv, float angle, float offset, float width, float feather, float travel) {
          vec2 centered = uv - 0.5;
          centered *= rotate2d(angle);
          float wave = sin(centered.x * 5.8 + uTime * 1.1 + travel) * 0.08;
          float distanceToRibbon = abs(centered.y + wave + offset);
          float ribbon = smoothstep(width + feather, width, distanceToRibbon);
          float movingHighlight = smoothstep(0.62, 0.0, abs(fract(centered.x * 0.42 - uTime * 0.08 + travel) - 0.5));
          return ribbon * (0.58 + movingHighlight * 0.42);
        }

        float glow(vec2 uv, vec2 center, float radius, float softness) {
          return 1.0 - smoothstep(radius, radius + softness, distance(uv, center));
        }

        float grain(vec2 uv) {
          return fract(sin(dot(uv * uResolution.xy, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
          vec2 uv = vUv;
          float aspect = uResolution.x / max(uResolution.y, 1.0);
          vec2 wideUv = vec2((uv.x - 0.5) * aspect + 0.5, uv.y);

          vec3 base = mix(vec3(0.018, 0.024, 0.040), vec3(0.015, 0.035, 0.072), uv.y);

          vec2 coolCenter = vec2(0.7 + sin(uTime * 0.42) * 0.14, 0.56 + cos(uTime * 0.34) * 0.09);
          vec2 deepCenter = vec2(0.35 + cos(uTime * 0.28) * 0.1, 0.34 + sin(uTime * 0.3) * 0.07);
          vec2 warmCenter = vec2(0.84 + sin(uTime * 0.38) * 0.08, 0.30 + cos(uTime * 0.44) * 0.1);

          float coolGlow = glow(wideUv, coolCenter, 0.02, 0.62);
          float deepGlow = glow(wideUv, deepCenter, 0.01, 0.74);
          float warmGlow = glow(wideUv, warmCenter, 0.01, 0.48);
          float ribbonOne = softRibbon(wideUv, -0.28, -0.02 + sin(uTime * 0.52) * 0.08, 0.008, 0.09, 0.12);
          float ribbonTwo = softRibbon(wideUv, 0.2, 0.2 + cos(uTime * 0.46) * 0.07, 0.006, 0.07, 0.48);
          float ribbonThree = softRibbon(wideUv, -0.58, -0.28 + sin(uTime * 0.44) * 0.08, 0.004, 0.055, 0.82);
          float pulse = 0.88 + sin(uTime * 0.85) * 0.12;

          vec3 color = base;
          color += vec3(0.0, 0.54, 0.92) * coolGlow * 0.52 * pulse;
          color += vec3(0.03, 0.16, 0.48) * deepGlow * 0.6;
          color += vec3(0.94, 0.23, 0.08) * warmGlow * 0.3 * pulse;
          color += vec3(0.0, 0.65, 0.92) * ribbonOne * 0.32;
          color += vec3(0.95, 0.33, 0.13) * ribbonTwo * 0.17;
          color += vec3(0.40, 0.58, 1.0) * ribbonThree * 0.2;

          float vignette = smoothstep(0.96, 0.26, distance(uv, vec2(0.5, 0.54)));
          float rightFocus = smoothstep(0.08, 0.74, uv.x);
          float noise = (grain(uv + uTime * 0.01) - 0.5) * 0.025;

          gl_FragColor = vec4(color + noise, (0.82 + vignette * 0.22) * rightFocus);
        }
      `
    });
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();

      renderer.setSize(Math.max(width, 1), Math.max(height, 1), false);
      material.uniforms.uResolution.value.set(Math.max(width, 1), Math.max(height, 1));
    };

    const animate = (time: number) => {
      material.uniforms.uTime.value = reducedMotion.matches ? 0 : time * 0.001;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    frameId = window.requestAnimationFrame(animate);
    canvas.dataset.sceneReady = "true";

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div className="hero-background-scene" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
