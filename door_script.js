let door__open = document.querySelector(".door__open-btn");
let doorSound = document.getElementById("doorSound");

let time__line = gsap.timeline({
  paused: true,
  onStart: () => {
    doorSound.currentTime = 0;
    doorSound.play();
  },
});

time__line.to(
  ".left--door",
  {
    x: "-100%",
    duration: 1.1,
    ease: "power2.inOut",
  },
  0
);

time__line.to(
  ".right--door",
  {
    x: "100%",
    duration: 1.1,
    ease: "power2.inOut",
  },
  0
);

time__line.to(
  ".door__open-btn",
  {
    opacity: 0,
    duration: 0.1,
  },
  0
);

door__open.addEventListener("click", () => {
  time__line.play();
  door__open.style.pointerEvents = "none";
});
