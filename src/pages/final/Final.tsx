import React, { useEffect, useRef, useState } from 'react';

const Final: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showMerged, setShowMerged] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [textHidden, setTextHidden] = useState(false);
  const chars = '가나안입성'.split('');

  // Heart particle class
  class HeartParticle {
    x: number;
    y: number;
    speed: number;
    angle: number;
    color: string;
    alpha: number;
    decay: number;

    constructor(x: number, y: number, angle: number, color: string) {
      this.x = x;
      this.y = y;
      this.speed = Math.random() * 5 + 2;
      this.angle = angle;
      this.color = color;
      this.alpha = 1;
      this.decay = Math.random() * 0.015 + 0.01;
    }

    update() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      this.alpha -= this.decay;
    }

    drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x - size, y - size, x - size * 1.5, y + size / 2, x, y + size);
      ctx.bezierCurveTo(x + size * 1.5, y + size / 2, x + size, y - size, x, y);
      ctx.closePath();
      ctx.fill();
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      this.drawHeart(ctx, 0, 0, 10);
      ctx.restore();
    }
  }

  const particles: HeartParticle[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const explode = (x: number, y: number) => {
      const color = `hsl(${Math.random() * 360}, 100%, 70%)`;
      for (let i = 0; i < 50; i++) {
        const angle = Math.random() * 2 * Math.PI;
        particles.push(new HeartParticle(x, y, angle, color));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) particles.splice(i, 1);
      }
    };

    const interval = setInterval(() => {
      explode(Math.random() * canvas.width, Math.random() * canvas.height * 0.6);
    }, 800);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const totalTime = chars.length * 700 + 1000;

    const hideTextTimer = setTimeout(() => setTextHidden(true), totalTime);
    const showMergedTimer = setTimeout(() => setShowMerged(true), totalTime);
    const showFinalTimer = setTimeout(() => setShowFinal(true), totalTime + 3000);

    return () => {
      clearTimeout(hideTextTimer);
      clearTimeout(showMergedTimer);
      clearTimeout(showFinalTimer);
    };
  }, []);

  return (
    <div style={{ margin: 0, background: 'white', overflow: 'hidden', fontFamily: 'Cafe24Ohsquare, sans-serif' }}>
      <audio src="bgm.mp3" autoPlay loop />
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }} />

      {!textHidden && (
        <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5vh' }}>
          {chars.map((char, i) => (
            <span
              key={i}
              style={{
                fontSize: '20vw',
                fontWeight: 'bold',
                color: 'black',
                opacity: 0,
                animation: `showChar 0.5s forwards`,
                animationDelay: `${i * 700}ms`,
                transform: 'scale(2)',
              }}
            >
              {char}
            </span>
          ))}
        </div>
      )}

      {showMerged && (
        <div
          style={{
            position: 'absolute',
            top: showFinal ? '10%' : '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '12vw',
            fontWeight: 'bold',
            color: 'black',
            opacity: 1,
            zIndex: 2,
            transition: 'all 2s ease-in-out',
          }}
        >
          가나안입성
        </div>
      )}

      {showFinal && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '13vw',
            fontWeight: 'bold',
            color: 'black',
            opacity: 1,
            zIndex: 2,
            transition: 'opacity 2s ease-in-out',
          }}
        >
          바울성전
        </div>
      )}
    </div>
  );
};

export default Final;
