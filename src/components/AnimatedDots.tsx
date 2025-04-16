
import React, { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

const AnimatedDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };

    const initDots = () => {
      dotsRef.current = [];
      const dotCount = Math.floor(window.innerWidth * window.innerHeight / 8000);
      
      for (let i = 0; i < dotCount; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          color: `rgba(${130 + Math.random() * 70}, ${50 + Math.random() * 60}, ${255}, ${0.3 + Math.random() * 0.5})`,
          alpha: 0.1 + Math.random() * 0.4
        });
      }
    };

    const drawDots = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dotsRef.current.forEach((dot, i) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = dot.alpha;
        ctx.fill();
        
        // Connect to nearby dots
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot2 = dotsRef.current[j];
          const dx = dot.x - dot2.x;
          const dy = dot.y - dot2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.globalAlpha = 0.2 * (1 - distance / 100);
            ctx.stroke();
          }
        }
        
        // Connect to mouse
        const mouseX = mouseRef.current.x;
        const mouseY = mouseRef.current.y;
        const mdx = dot.x - mouseX;
        const mdy = dot.y - mouseY;
        const mouseDistance = Math.sqrt(mdx * mdx + mdy * mdy);
        
        if (mouseDistance < 150) {
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(161, 99, 247, ${0.3 * (1 - mouseDistance / 150)})`;
          ctx.globalAlpha = 0.4 * (1 - mouseDistance / 150);
          ctx.stroke();
          
          // Add a slight gravitational pull toward mouse
          const pull = 0.3 * (1 - mouseDistance / 150);
          dot.vx += mdx > 0 ? -pull : pull;
          dot.vy += mdy > 0 ? -pull : pull;
          
          // Limit velocity
          const maxVel = 2;
          const vel = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy);
          if (vel > maxVel) {
            dot.vx = (dot.vx / vel) * maxVel;
            dot.vy = (dot.vy / vel) * maxVel;
          }
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(drawDots);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    
    resizeCanvas();
    drawDots();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
    />
  );
};

export default AnimatedDots;
