async function getData() {
  const testing = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (testing.ok) {
    const data = await testing.json();
    console.log(data);
  } else {
    console.log("error");
  }
}

async function getData2() {
  try {
    const testing = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await testing.json();
  } catch (error) {
    console.log(error);
  }
}
