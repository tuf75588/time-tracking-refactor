const uuidv4 = require('uuid/v4');


export function newTimer(args={}) {
  const timer = {
    title: args.title || 'Timer',
    project: args.project || 'Project',
    elapsed: args.elapsed,
    id: getId(),
    elapsed: 0,
  }
  return timer;
}

export function renderElapsedString(elapsed, runningSince) {
  let totalElapsed = elapsed;
  if (runningSince) {
    totalElapsed += Date.now() - runningSince;
  }
  return millisecondsToHuman(totalElapsed);
}
function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }

export function millisecondsToHuman(ms) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2)
  ].join(':');

  return humanized;
}
export function getId() {
  return uuidv4();
}
