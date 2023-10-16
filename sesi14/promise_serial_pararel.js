const firstPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise");
    }, 1000);
  });

const secondPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second promise");
    }, 1000);
  });

const thirdPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Third promise");
    }, 1000);
  });

async function parallelPromise() {
  const a = firstPromise().then((response) =>
    console.log(response, "parallel")
  );
  const b = secondPromise().then((response) =>
    console.log(response, "parallel")
  );
  const c = thirdPromise().then((response) =>
    console.log(response, "parallel")
  );

  console.log("done parallel");
}

async function serialPromise() {
  const a = await getProfile();

  setState("key", a);
  console.log(a);
  const b = await secondPromise();
  console.log(b);
  const c = await thirdPromise();
  console.log(c);

  console.log("done serial");
}

parallelPromise();
serialPromise();

const dateNow = new Date();

const dateFlashSale = new Date("2021-09-30T00:00:00.000Z");

const checkIfFlashSaleAlreadyStarted = dateNow > dateFlashSale;

// setInterval(() => {
