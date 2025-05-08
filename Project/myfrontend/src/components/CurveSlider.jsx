import React from 'react';
import { useSprings, animated, to } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const cards = [
  { id: 1, text: 'Card 1' },
  { id: 2, text: 'Card 2' },
  { id: 3, text: 'Card 3' },
  { id: 4, text: 'Card 4' },
  { id: 5, text: 'Card 5' },
];

const radius = 300;
const angleStep = 360 / cards.length;

const getPosition = (index, xOffset) => {
  const angle = (index * angleStep + xOffset / 5) * (Math.PI / 180);
  const x = radius * Math.sin(angle);
  const y = -50 * Math.sin(angle); // Vertical curve
  const z = radius * Math.cos(angle);
  return [x, y, z];
};

const Card = ({ card }) => (
  <div className="card">
    {card.text}
  </div>
);

const CurveSlider = () => {
  const [springs, api] = useSprings(cards.length, (i) => {
    const [x, y, z] = getPosition(i, 0);
    return {
      x,
      y,
      z,
      scale: 1,
      opacity: 1,
    };
  });

  const bind = useDrag(({ movement: [mx] }) => {
    api.start((i) => {
      const [x, y, z] = getPosition(i, mx);
      const centerIndex = Math.round(-mx / angleStep);
      const scale = i === centerIndex ? 1.2 : 1;
      const opacity = i === centerIndex ? 1 : 0.6;

      return {
        x,
        y,
        z,
        scale,
        opacity,
      };
    });
  });

  return (
    <div className="slider-container" style={{ perspective: '1000px', position: 'relative', height: '300px' }}>
      {springs.map((styles, i) => (
        <animated.div
          key={cards[i].id}
          {...bind()}
          style={{
            position: 'absolute',
            transform: to(
              [styles.x, styles.y, styles.z, styles.scale],
              (x, y, z, s) => `translate3d(${x}px, ${y}px, ${z}px) scale(${s})`
            ),
            opacity: styles.opacity,
          }}
        >
          <Card card={cards[i]} />
        </animated.div>
      ))}
    </div>
  );
};

export default CurveSlider;
