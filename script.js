const orca = document.getElementById("orca");
const brand = document.getElementById("brand");

document.addEventListener("keydown", function (event) {
  jump();
});
function jump() {
  if (orca.classList != "jump") {
    orca.classList.add("jump");
  }
  setTimeout(function () {
    orca.classList.remove("jump");
  }, 300);
}
let isAlive = setInterval(function () {
  let orcaTop = parseInt(window.getComputedStyle(orca).getPropertyValue("top"));
  let brandLeft = parseInt(
    window.getComputedStyle(brand).getPropertyValue("left")
  );

  if (brandLeft < 20 && brandLeft > 0 && orcaTop >= 130) {
    alert("БРЕНД УШЕЛ С РЫНКА!!");
  }
}, 10);
