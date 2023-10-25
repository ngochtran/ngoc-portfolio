import React, { useEffect, useRef, useState } from "react";

const SparklingCursor = () => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const maxDistance = 90;
  const canvasBounds = {};

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

    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      if (
        x >= canvasBounds.left &&
        x <= canvasBounds.right &&
        y >= canvasBounds.top &&
        y <= canvasBounds.bottom
      ) {
        for (let i = 0; i < 1; i++) {
          particles.push(createParticle(x, y - 60));
        }
      }
    };

    const updateCanvasBounds = () => {
      const canvasRect = canvas.getBoundingClientRect();
      canvasBounds.left = canvasRect.left;
      canvasBounds.right = canvasRect.right;
      canvasBounds.top = canvasRect.top;
      canvasBounds.bottom = canvasRect.bottom;
    };

    // Initial bounds setup
    updateCanvasBounds();

    // Add a mousemove event listener to update cursor position
    window.addEventListener("mousemove", updateCanvasBounds);

    // Add a mousemove event listener for the cursor effect
    canvas.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", updateCanvasBounds);
    };
  }, [canvasSize]);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default SparklingCursor;
