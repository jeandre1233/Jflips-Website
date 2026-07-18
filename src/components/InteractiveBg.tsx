/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';

export default function InteractiveBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
      setIsLowPower(true);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with easing
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Particles configuration
    // We create a cloud of 3D stars around the center (0, 0, 0)
    interface Particle3D {
      x: number; // 3D X
      y: number; // 3D Y
      z: number; // 3D Z
      baseX: number;
      baseY: number;
      baseZ: number;
      radius: number;
      alpha: number;
      color: string;
      speed: number;
      orbitRadius: number;
      angle: number;
    }

    const particleCount = isLowPower ? 15 : 45;
    const particles: Particle3D[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isAccent = Math.random() > 0.6;
      const orbitRadius = Math.random() * 350 + 50;
      const angle = Math.random() * Math.PI * 2;
      
      particles.push({
        x: Math.cos(angle) * orbitRadius,
        y: (Math.random() - 0.5) * 200,
        z: Math.sin(angle) * orbitRadius,
        baseX: Math.cos(angle) * orbitRadius,
        baseY: (Math.random() - 0.5) * 200,
        baseZ: Math.sin(angle) * orbitRadius,
        radius: Math.random() * (isAccent ? 3.5 : 1.8) + 1,
        alpha: Math.random() * 0.4 + 0.15,
        // Logo-themed colors: light blue stripe (#00a8ff), pure blue, and glowing white
        color: isAccent ? '#00a8ff' : (Math.random() > 0.5 ? '#ffffff' : '#0055ff'),
        speed: (Math.random() * 0.002 + 0.0005) * (Math.random() > 0.5 ? 1 : -1),
        orbitRadius,
        angle,
      });
    }

    // 3D Projection & Camera settings
    const FOV = 280; // Field of view / perspective factor

    let tick = 0;

    const render = () => {
      tick += 0.0015;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Map mouse position to 3D rotation angles (tilt the universe)
      const rotateY = ((mouse.x - width / 2) / width) * 0.4;
      const rotateX = ((mouse.y - height / 2) / height) * -0.4;

      const cosY = Math.cos(rotateY);
      const sinY = Math.sin(rotateY);
      const cosX = Math.cos(rotateX);
      const sinX = Math.sin(rotateX);

      // We will project 3D points to 2D
      const projected: Array<{ sx: number; sy: number; sz: number; p: Particle3D }> = [];

      particles.forEach((p) => {
        // 1. Slow orbital rotation over time
        p.angle += p.speed;
        p.x = Math.cos(p.angle) * p.orbitRadius;
        p.z = Math.sin(p.angle) * p.orbitRadius;

        // 2. Apply 3D tilt based on mouse interaction
        // Rotate around Y-axis (yaw)
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate around X-axis (pitch)
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // 3. Move camera away (Z offset)
        const camZ = z2 + 400; // Keep behind camera

        if (camZ > 0) {
          // Perspective projection formula
          const scale = FOV / camZ;
          const screenX = width / 2 + x1 * scale;
          const screenY = height / 2 + y2 * scale;

          projected.push({
            sx: screenX,
            sy: screenY,
            sz: camZ,
            p,
          });
        }
      });

      // Sort by depth (Z index) back-to-front so closer particles are drawn on top
      projected.sort((a, b) => b.sz - a.sz);

      // Draw faint orbital guide rings for full 3D storytelling
      if (!isLowPower) {
        ctx.strokeStyle = 'rgba(0, 168, 255, 0.025)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 180, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(0, 168, 255, 0.015)';
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 320, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw 3D connection lines (Constellation patterns)
      if (!isLowPower && projected.length > 1) {
        for (let i = 0; i < projected.length; i++) {
          for (let j = i + 1; j < projected.length; j++) {
            const a = projected[i];
            const b = projected[j];

            // Only connect stars that are relatively close in 3D space
            const dx = a.p.x - b.p.x;
            const dy = a.p.y - b.p.y;
            const dz = a.p.z - b.p.z;
            const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist3D < 140) {
              const alpha = (1 - dist3D / 140) * 0.08 * (a.p.alpha * b.p.alpha);
              ctx.strokeStyle = `rgba(0, 168, 255, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.beginPath();
              ctx.moveTo(a.sx, a.sy);
              ctx.lineTo(b.sx, b.sy);
              ctx.stroke();
            }
          }
        }
      }

      // Draw stars with glow based on depth
      projected.forEach(({ sx, sy, sz, p }) => {
        const depthAlpha = Math.max(0.1, Math.min(1, 400 / sz));
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * depthAlpha;

        ctx.beginPath();
        const size = p.radius * (FOV / sz);
        ctx.arc(sx, sy, Math.max(0.5, size), 0, Math.PI * 2);
        ctx.fill();

        // Add a gentle aura/bloom for larger accent stars
        if (p.radius > 3 && !isLowPower) {
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(sx, sy, size * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * 0.2 * depthAlpha;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isLowPower]);

  return (
    <canvas
      id="3d-interactive-background"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-transparent"
      aria-hidden="true"
    />
  );
}
