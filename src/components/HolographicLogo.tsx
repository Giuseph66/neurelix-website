'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  tx: number;
  ty: number;
  tz: number;
  vx: number;
  vy: number;
  vz: number;
  color: string;
  originalColor: string;
}

interface FloatingParticle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  opacity: number;
}

const PARTICLE_SIZE = 1.0;
const FRICTION = 0.94;
const EASE = 0.05;
const FOV = 600;
const LOGO_SCALE = 0.45;
const FLOATING_PARTICLES = 200;
const MOUSE_RADIUS = 120;
const MOUSE_STRENGTH = 0.2;

export default function HolographicLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const floatingParticlesRef = useRef<FloatingParticle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const rotationRef = useRef({ angleX: 0, angleY: 0, targetAngleX: 0, targetAngleY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let cx = width / 2;
    let cy = height / 2;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cx = width / 2;
      cy = height / 2;
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
      
      const moveX = (e.clientX - cx) * 0.0003;
      const moveY = (e.clientY - cy) * 0.0003;
      rotationRef.current.targetAngleY = moveX;
      rotationRef.current.targetAngleX = -moveY;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      rotationRef.current.targetAngleX = 0;
      rotationRef.current.targetAngleY = 0;
    };

    // Touch events para mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current.x = touch.clientX;
        mouseRef.current.y = touch.clientY;
        mouseRef.current.active = true;
        
        const moveX = (touch.clientX - cx) * 0.0003;
        const moveY = (touch.clientY - cy) * 0.0003;
        rotationRef.current.targetAngleY = moveX;
        rotationRef.current.targetAngleX = -moveY;
      }
    };
    
    const handleTouchEnd = () => {
      mouseRef.current.active = false;
      rotationRef.current.targetAngleX = 0;
      rotationRef.current.targetAngleY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);

    const loadLogo = async () => {
      const response = await fetch('/neurelix-logo.svg');
      let svgText = await response.text();
      
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgText, 'image/svg+xml');
      const paths = doc.querySelectorAll('path');
      
      paths.forEach(path => {
        const d = path.getAttribute('d');
        if (d && (d.includes('M0 2500') || d.includes('M0,2500'))) {
          const subpaths = d.split(/(?=[Mm])/);
          if (subpaths.length > 1) {
            const firstLogoSubpath = subpaths[1];
            const match = firstLogoSubpath.match(/^m\s*(-?\d+)\s+(-?\d+)/i);
            if (match) {
              const relX = parseInt(match[1]);
              const relY = parseInt(match[2]);
              const absX = relX;
              const absY = 2500 + relY;
              subpaths[1] = firstLogoSubpath.replace(/^m\s*-?\d+\s+-?\d+/i, `M${absX} ${absY}`);
            }
            path.setAttribute('d', subpaths.slice(1).join(''));
          } else {
            path.remove();
          }
        }
      });
      
      svgText = new XMLSerializer().serializeToString(doc);
      const blob = new Blob([svgText], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.src = url;
      await new Promise((resolve) => { img.onload = resolve; });

      const size = 300;
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      tempCanvas.width = size;
      tempCanvas.height = size;
      
      const imgScale = Math.min(size / img.width, size / img.height) * 0.9;
      const drawWidth = img.width * imgScale;
      const drawHeight = img.height * imgScale;
      const drawX = (size - drawWidth) / 2;
      const drawY = (size - drawHeight) / 2;
      
      tempCtx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      const imgData = tempCtx.getImageData(0, 0, size, size);
      URL.revokeObjectURL(url);
      
      let minX = size, maxX = 0, minY = size, maxY = 0;
      let hasPixels = false;
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const i = (y * size + x) * 4;
          if (imgData.data[i + 3] > 10) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
            hasPixels = true;
          }
        }
      }

      const logoCenterX = hasPixels ? (minX + maxX) / 2 : size / 2;
      const logoCenterY = hasPixels ? (minY + maxY) / 2 : size / 2;

      const newParticles: Particle[] = [];
      const step = 2;
      for (let y = 0; y < size; y += step) {
        for (let x = 0; x < size; x += step) {
          const i = (y * size + x) * 4;
          if (imgData.data[i + 3] > 128) {
            const px = (x - logoCenterX) * (1 / LOGO_SCALE);
            const py = (y - logoCenterY) * (1 / LOGO_SCALE);
            const pz = (Math.random() - 0.5) * 40;
            const ratio = x / size;
            const r = Math.floor(0 + 255 * ratio); 
            const g = Math.floor(229 + (138 - 229) * ratio); 
            const b = Math.floor(255 - 255 * ratio);
            const color = `rgba(${r}, ${g}, ${b}, ${Math.min(1, (imgData.data[i + 3] / 255) * 1.5)})`;
            newParticles.push({
              x: (Math.random() - 0.5) * 3000,
              y: (Math.random() - 0.5) * 3000,
              z: (Math.random() - 0.5) * 3000,
              tx: px, ty: py, tz: pz, vx: 0, vy: 0, vz: 0,
              color: color, originalColor: color
            });
          }
        }
      }
      particlesRef.current = newParticles;

      const floating: FloatingParticle[] = [];
      for (let i = 0; i < FLOATING_PARTICLES; i++) {
        const isBlue = Math.random() > 0.5;
        floating.push({
          x: (Math.random() - 0.5) * width * 2,
          y: (Math.random() - 0.5) * height * 2,
          z: Math.random() * 1200 - 600,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          vz: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 2.5 + 0.5,
          color: isBlue ? 'rgba(0, 229, 255' : 'rgba(255, 138, 0',
          opacity: Math.random() * 0.3 + 0.05,
        });
      }
      floatingParticlesRef.current = floating;
    };

    loadLogo();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() * 0.001;
      const rot = rotationRef.current;
      const mouse = mouseRef.current;
      
      rot.angleY += (rot.targetAngleY - rot.angleY) * 0.05;
      rot.angleX += (rot.targetAngleX - rot.angleX) * 0.05;

      const cosY = Math.cos(rot.angleY);
      const sinY = Math.sin(rot.angleY);
      const cosX = Math.cos(rot.angleX);
      const sinX = Math.sin(rot.angleX);

      ctx.globalCompositeOperation = 'lighter';
      
      const floating = floatingParticlesRef.current;
      for (let i = 0; i < floating.length; i++) {
        const fp = floating[i];
        fp.x += fp.vx + Math.sin(time + i) * 0.2;
        fp.y += fp.vy + Math.cos(time + i) * 0.2;
        
        if (mouse.active) {
          const fx1 = fp.x * cosY - fp.z * sinY;
          const fz1 = fp.z * cosY + fp.x * sinY;
          const fy1 = fp.y * cosX - fz1 * sinX;
          const fz2 = fz1 * cosX + fp.y * sinX;
          const fscale = FOV / (FOV + fz2);
          const fx2d = fx1 * fscale + cx;
          const fy2d = fy1 * fscale + cy;
          const dx = mouse.x - fx2d;
          const dy = mouse.y - fy2d;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS * 1.5) {
            const force = (1 - dist / (MOUSE_RADIUS * 1.5)) * MOUSE_STRENGTH * 2;
            fp.vx -= (dx / dist) * force;
            fp.vy -= (dy / dist) * force;
          }
        }
        fp.vx *= 0.99; fp.vy *= 0.99;
        if (fp.x > width * 1.5) fp.x = -width * 0.5;
        if (fp.x < -width * 0.5) fp.x = width * 1.5;
        if (fp.y > height * 1.5) fp.y = -height * 0.5;
        if (fp.y < -height * 0.5) fp.y = height * 1.5;
        
        const fx1 = fp.x * cosY - fp.z * sinY;
        const fz1 = fp.z * cosY + fp.x * sinY;
        const fy1 = fp.y * cosX - fz1 * sinX;
        const fz2 = fz1 * cosX + fp.y * sinX;
        const fscale = FOV / (FOV + fz2);
        if (fscale > 0) {
          ctx.fillStyle = `${fp.color}, ${fp.opacity * fscale})`;
          ctx.beginPath();
          ctx.arc(fx1 * fscale + cx, fy1 * fscale + cy, (fp.size * fscale * 3) / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const tx1 = p.tx * cosY - p.tz * sinY;
        const tz1 = p.tz * cosY + p.tx * sinY;
        const ty1 = p.ty * cosX - tz1 * sinX;
        const tz2 = tz1 * cosX + p.ty * sinX;
        const tScale = FOV / (FOV + tz2);
        const tx2d = tx1 * tScale + cx;
        const ty2d = ty1 * tScale + cy;

        if (mouse.active) {
          const dx = mouse.x - tx2d;
          const dy = mouse.y - ty2d;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH;
            p.vx -= (dx / dist) * force * 15;
            p.vy -= (dy / dist) * force * 15;
            p.vz -= force * 10;
          }
        }

        p.vx += (p.tx - p.x) * EASE;
        p.vy += (p.ty - p.y) * EASE;
        p.vz += (p.tz - p.z) * EASE;
        p.vx *= FRICTION; p.vy *= FRICTION; p.vz *= FRICTION;
        p.x += p.vx; p.y += p.vy; p.z += p.vz;

        const rx1 = p.x * cosY - p.z * sinY;
        const rz1 = p.z * cosY + p.x * sinY;
        const ry1 = p.y * cosX - rz1 * sinX;
        const rz2 = rz1 * cosX + p.y * sinX;
        const scale = FOV / (FOV + rz2);
        if (scale > 0) {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(rx1 * scale + cx, ry1 * scale + cy, PARTICLE_SIZE * scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}
