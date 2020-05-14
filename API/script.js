const big_container_el = document.getElementById("big_container");
const slider_el = document.getElementById("slider");

const limit = 5;
let page = 1;
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
      data.map(getDiv);
    });
}
function getDiv(each_data) {
  // make div
  const div = document.createElement("div");
  // put class in the div
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
  big_container_el.append(div);
}

function displayLoading() {
  slider_el.classList.add("display");
  setTimeout(() => {
    page += 1;
    getData();
  }, 1000);
}

init();

function init() {
  getData();
}
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    console.log("scroll downed");
    displayLoading();
  } else {
    slider_el.classList.remove("display");
  }
});
