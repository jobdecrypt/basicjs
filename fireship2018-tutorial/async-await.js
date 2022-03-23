const random = () => {
  return Promise.resolve(Math.random());
};

// Bad Promise Code

/* const sumRandomAsyncNums = () => {
  let first;
  let second;
  let third;

  //   THIS IS THE CALLBACK HELL or the PYRAMID
  return random()
    .then((v) => {
      first = v;
      return random();
    })
    .then((v) => {
      second = v;
      return random();
    });
};
 */
// Good Promise Code

const sumRandomAsyncNums2 = async () => {
  const first = await random();
  const second = await random();
  const third = await random();

  console.log(`Result ${first + second + third}`);
};

sumRandomAsyncNums2();

