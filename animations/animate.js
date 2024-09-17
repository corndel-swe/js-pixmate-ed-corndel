import process from 'process'

function wait(n) {
  return new Promise(resolve => setTimeout(resolve, n * 1000))
}

export default async function animate(frames, interval) {
  process.stdout.write('\x1Bc') // clear the console

  for (let i = 0; i < frames.length; i++) {
    console.log(frames[i])
    await wait(interval)
    process.stdout.write('\x1Bc')
  }
}
