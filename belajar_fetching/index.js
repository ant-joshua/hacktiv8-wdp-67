async function fetchJobs() {
  const response = await fetch("http://localhost:3001/jobs");

  response.json().then((data) => {
    console.log("ini data then", data);
  });

  console.log("halo");

  //   const jobs = await response.json();
  //   console.log("ini data await", jobs);

  //   console.log("halo");

  //   return jobs;
  // console.log(jobs);
}

fetchJobs();
