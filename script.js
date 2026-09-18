const email = document.getElementById("email");
const pass = document.getElementById("pass");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const mail = email.value;
  const pas = pass.value;

  console.log(
    `
    Email : ${mail}
    Password : ${pas}
    `,
  );
});
