const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/* collego le variabili al dom */
const teamContainer = document.getElementById("team-container");
const form = document.getElementById("add-member-form");
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const emailInput = document.getElementById("email");
const imgInput = document.getElementById("img");

/*  creo ed aggiungo card in pagina */
function createCard(member) {
  const { name, role, email, img } = member;

  const col = document.createElement("div");
  col.className = "col";

  col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${img}" class="card-img-top" alt="Foto di ${name}">
      <div class="card-body">
        <h5 class="card-title mb-1">${name}</h5>
        <p class="card-text mb-1">${role}</p>
        <p class="card-text">
          <small class="text-muted">${email}</small>
        </p>
      </div>
    </div>
  `;

  return col;
}
function renderTeam() {
  teamContainer.innerHTML = "";
  teamMembers.forEach(member => {
    const card = createCard(member);
    teamContainer.appendChild(card);
  });
}

renderTeam();
console.log("Array completo:", teamMembers);