const CUBES = [
  { left: 10, size: 12, dur: 17, delay: 0, sway: 15, rot: 140, op: 0.45 },
  { left: 22, size: 9, dur: 21, delay: 4, sway: -12, rot: -120, op: 0.4 },
  { left: 34, size: 16, dur: 19, delay: 8, sway: 20, rot: 160, op: 0.4 },
  { left: 48, size: 10, dur: 23, delay: 2, sway: -10, rot: 100, op: 0.38 },
  { left: 58, size: 18, dur: 16, delay: 6, sway: 22, rot: 180, op: 0.5 },
  { left: 64, size: 12, dur: 20, delay: 11, sway: -16, rot: -150, op: 0.5 },
  { left: 71, size: 22, dur: 14, delay: 1, sway: 18, rot: 200, op: 0.55 },
  { left: 78, size: 14, dur: 18, delay: 7, sway: -14, rot: -130, op: 0.5 },
  { left: 84, size: 10, dur: 22, delay: 3, sway: 12, rot: 120, op: 0.45 },
  { left: 90, size: 16, dur: 15, delay: 9, sway: -18, rot: 170, op: 0.55 },
  { left: 95, size: 11, dur: 19, delay: 5, sway: 14, rot: -110, op: 0.45 },
];

export default function IceFall() {
  return (
    <div className="fi-icefall" aria-hidden="true">
      {CUBES.map((c, i) => (
        <span
          key={i}
          className="fi-ice-cube"
          style={{
            left: `${c.left}%`,
            width: c.size,
            height: c.size,
            '--dur': `${c.dur}s`,
            '--delay': `${c.delay}s`,
            '--sway': `${c.sway}px`,
            '--rot': `${c.rot}deg`,
            '--op': c.op,
          }}
        />
      ))}
    </div>
  );
}
