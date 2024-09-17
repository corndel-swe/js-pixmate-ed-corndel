import animate from './animate.js'

const frames = []

for (let i = 0; i <= 10; i++) {
  let line = '|'
  line += '#'.repeat(i)
  line += ' '.repeat(10 - i)
  line += '|'

  frames.push(line)
}

animate(frames, 0.5)
