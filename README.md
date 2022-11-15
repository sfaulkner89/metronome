# Hi, to get the metronome running just run:

### `npm i`

### `npm start`

## The tap tempo takes a cumulative average, so you can get a more accurate tempo over a few clicks.

### If you make a mistake or want to reset the tap tempo just press 'reset'.

### The 'fine' button will also allow you to fine tune your tempo in 0.1bpm increments.

## The metronome currently swings by a few milliseconds each beat and does slide slightly over time.

### The former seems to be best dealt with by implementing requestAnimationFrame().

### The latter can be predominantly solved by implementing a correction algorithm, but we will discuss this in the interview.
