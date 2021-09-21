// this program is an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

// example input node timer1.js 10 3 5 15 9

const inputArgs = process.argv
  .slice(2)
  // An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
  // An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

  .filter(time => !isNaN(time))
  .filter(time => time >= 0);

inputArgs.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
});