import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import $ from 'jquery';

type Star = {
  x: number;
  y: number;
  size: number;
  lastTime: number;
};

const STAR_COUNT = 100;
const SHOOTING_STAR_CHANCE = 0.001;
const STAR_SHRINK_RATE = 0.01;
const BASE_SPEED = 0.001;

const StarrySky: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let animationFrameId = 0;

    const timeoutId = window.setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }

      const skyElement = $('.sky');
      const width = skyElement.width() ?? canvas.clientWidth;
      const height = skyElement.height() ?? canvas.clientHeight;

      canvas.width = width;
      canvas.height = height;

      const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        lastTime: Date.now(),
      }));

      let lastTime = Date.now();

      const drawTrail = (star: Star) => {
        const now = Date.now();
        const delta = now - star.lastTime;
        const trailX = star.x - delta * BASE_SPEED;
        const trailY = star.y - delta * BASE_SPEED;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(trailX, trailY, star.size, 0, Math.PI * 2);
        ctx.fill();
      };

      const draw = () => {
        const now = Date.now();
        const delta = now - lastTime;
        lastTime = now;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star) => {
          star.size -= STAR_SHRINK_RATE;
          if (star.size < 0) {
            star.size = Math.random() * 2 + 1;
          }

          const isShootingStar = Math.random() < SHOOTING_STAR_CHANCE;
          if (isShootingStar) {
            star.x -= delta * 0.1;
            star.y += delta * 0.1;

            const endX = star.x - delta * 0.5 * (Math.random() * 2 - 1);
            const endY = star.y + delta * 0.5 * (Math.random() * 2 - 1);

            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(endX, endY);
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'white';
            ctx.stroke();
          } else {
            star.x -= delta * BASE_SPEED;
          }

          if (star.x < 0) {
            star.x = canvas.width;
          }

          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();

          drawTrail(star);
          star.lastTime = now;
        });

        animationFrameId = window.requestAnimationFrame(draw);
      };

      animationFrameId = window.requestAnimationFrame(draw);
    }, 100);

    return () => {
      window.clearTimeout(timeoutId);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="sky">
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
};

export default StarrySky;
