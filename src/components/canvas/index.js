import React, { useRef, useEffect } from 'react';

let x = 0;
let y = 0;

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const imgObj1 = new Image();
    imgObj1.src =
      'https://images.pexels.com/photos/2915997/pexels-photo-2915997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

    context.fillStyle = '#000000';
    canvas.height = 640;
    canvas.width = 480;
    !props.display
      ? context.fillRect(0, 0, canvas.width, canvas.height)
      : context.drawImage(imgObj1, 0, 0, 650, 940);
    if (props.display) {
      const interval = setInterval(() => {
        x -= 1;
        y -= 1;
        context.drawImage(imgObj1, x, y, 650 - x, 940 - y);
        if (x === -50) {
          x = 0;
          y = 0;
          clearInterval(interval);
        }
      }, 100);
    }
  }, [props.display]);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
