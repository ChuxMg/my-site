function copyrightDate() {
  const d = new Date();
  let year = d.getFullYear();

  return year;
}

document.getElementById("copyrightYear").innerText = copyrightDate();
