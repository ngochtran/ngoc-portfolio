/* This Sparkling Cursor was made by following a tutorial 
 * from TA Coding on Youtube, with some minor adjustments
 */

import React, { useEffect, useRef, useState } from "react";

const SparklingCursor = () => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const maxDistance = 90;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const randomColor = () => {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);

      return `rgb(${r},${g},${b})`;
    };
    var hue = 0;

    const createParticle = (x, y) => {
      const size = 3;
      const color = `hsl(${hue},100%,50%)`;
      const speedX = Math.random() * 2 - 1;
      const speedY = Math.random() * 2 - 1;

      return { x, y, size, color, speedX, speedY };
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance <= maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = particles[i].color;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);

      canvas.width = canvasSize.width;
      canvas.height = canvasSize.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hue++;
      connectParticles();
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size -= 0.05;
        if (particle.size <= 0.3) {
          particles.splice(index, 1);
        }

        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    animate();

    const handleResize = () => {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (event) => {
      for (let i = 0; i < 1; i++) {
        particles.push(createParticle(event.clientX, event.clientY - 60));
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasSize]);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default SparklingCursor;
