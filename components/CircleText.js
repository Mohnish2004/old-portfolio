import { useEffect } from 'react';
import CircleType from 'circletype';

export default function CircleText() {
  useEffect(() => {
    const text = document.getElementById('text');
    const rotate = new CircleType(text).radius(40);

    window.addEventListener('scroll', function () {
      text.style.transform = `rotate(${window.scrollY * 0.60}deg)`;
    });
  }, []);

  return (
    <div className="circle absolute top-1 left-1 transform -translate-x-1/2 -translate-y-1/2">
      <p id="text" className="text-white text-xl font-bold uppercase">SCROLL DOWN &#8226; SCROLL DOWN &#8226; SCROLL DOWN &#8226;</p>
    </div>
  );
}
