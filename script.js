const memories = [
  {
    photo: "images/1.jpeg",
    title: "Hey Hiyaaa ❤️",
    message: "Yaad hai hum pehli baar Free Fire mein mile the? 😂🎮 Tab idea nahi tha ki tu itni special ban jayegi. 🫶"
  },

  {
    photo: "images/2.jpeg",
    title: "Then you asked my number 📱",
    message: "Phir tune mera number manga... aur wahi se hamari baatein aur bhi special ho gayi. ❤️"
  },

  {
    photo: "images/3.jpeg",
    title: "Our little talks 💬",
    message: "Tere saath choti choti baatein karna bhi mujhe bahut accha lagta hai. 😊"
  },

  {
    photo: "images/4.jpeg",
    title: "Different places 🌏",
    message: "Tu Bangladesh mein aur main yahan... distance hai, but friendship ke liye koi border nahi. ❤️"
  },

  {
    photo: "images/5.jpeg",
    title: "I'm genuinely sorry 🥺",
    message: "Mere se jitni bhi galtiyan hui hain, jisse tujhe hurt hua... I'm genuinely sorry. ❤️"
  },

  {
    photo: "images/6.jpeg",
    title: "No excuses ❤️",
    message: "Main apni mistakes ko justify nahi karunga. Bas itna kehna hai ki mujhe genuinely regret hai. 🥺"
  },

  {
    photo: "images/7.jpeg",
    title: "From teammates to BFF 🎮🫶",
    message: "Free Fire mein teammates se lekar aaj itne acche friends ban gaye... thank you. ❤️"
  },

  {
    photo: "images/8.jpeg",
    title: "Late night talks 🌙",
    message: "Random baatein, hasi, masti... tere saath ye sab moments special hain. ❤️"
  },

  {
    photo: "images/9.jpeg",
    title: "Your cute talks ❤️",
    message: "Tere baat karne ka style mujhe bahut accha lagta hai. Teri choti choti baatein bhi smile de deti hain. 🥹"
  },

  {
    photo: "images/10.jpeg",
    title: "Always there 🫶",
    message: "Chahe kitni bhi problems ho, teri baatein hamesha mood better kar deti hain. ❤️"
  },

  {
    photo: "images/11.jpeg",
    title: "Special You 💗",
    message: "Tu mere liye genuinely special hai. Thank you for being a part of my story. 🥹❤️"
  },

  {
    photo: "images/12.jpeg",
    title: "Hiyaaa... BFF Forever? 🥺❤️",
    message: "Ye little surprise maine dil se banaya hai. Sorry for my mistakes... aur thank you for being my friend. 🫶"
  }
];

let current = 0;


// ================= START STORY =================

function startStory() {

  document.getElementById("intro").classList.remove("active");
  document.getElementById("story").classList.add("active");

  current = 0;

  showMemory();
}


// ================= SHOW MEMORY =================

function showMemory() {

  const memory = memories[current];

  document.getElementById("photo").src = memory.photo;

  document.getElementById("title").textContent = memory.title;

  document.getElementById("message").textContent = memory.message;

  document.getElementById("counter").textContent =
    `${current + 1} / ${memories.length}`;
}


// ================= NEXT MEMORY =================

function nextMemory() {

  if (current < memories.length - 1) {

    current++;

    showMemory();

  } else {

    document.getElementById("story").classList.remove("active");

    document.getElementById("final").classList.add("active");

  }
}


// ================= MUSIC =================

function openMusic() {

  window.open(
    "https://open.spotify.com/track/0qQ4IdhjzNr0gJhdMTf2n3",
    "_blank"
  );

}


// ================= FLOATING HEARTS =================

function createHearts() {

  const hearts = document.querySelector(".hearts");

  if (!hearts) return;

  setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["❤️", "💗", "💕", "💖"][
      Math.floor(Math.random() * 4)
    ];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
      15 + Math.random() * 20 + "px";

    hearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);

  }, 700);
}


// Start hearts
createHearts();