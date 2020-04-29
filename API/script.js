const big_container_el = document.getElementById("big_container");

const limit = 5;
const page = 1;
function getData() {
  // fetch API
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  )
    // convert to Json
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log data
      console.log(data);
      // Put things
      //   console.log(typeof data);
      //   console.log(data[0].title);
      data.map(getDiv);
      // Append
    });
}
function getDiv(each_data) {
  // make list
  const div = document.createElement("div");
  // put class in the list
  div.classList.add("box_container");

  div.innerHTML = `<div class="box_id">${each_data.id}</div>
  <div class="box">
    <h3>
      ${each_data.title}
    </h3>
    <p>
    ${each_data.body}
    </p>
  </div>`;
}

getData();
