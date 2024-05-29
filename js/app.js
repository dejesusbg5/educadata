function getTheme() {
  const setDefaultItem = (key, def) => {
    const value = JSON.parse(localStorage.getItem(key)) ?? def;
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  };

  const mediaQueryDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)"),
    prefersDarkMode = setDefaultItem("prefersDarkMode", mediaQueryDarkMode.matches);

  $("body").addClass(prefersDarkMode ? "dark" : "light");
  $("body").removeClass(!prefersDarkMode ? "dark" : "light");
}

function setTheme() {
  toggleDarkMode();
  const newDarkMode = !JSON.parse(localStorage.getItem("prefersDarkMode"));
  localStorage.setItem("prefersDarkMode", newDarkMode);
}

getTheme();

var filename = location.href.split("/").at(-1);

if (filename.includes("ad-")) {
  colorScheme("#d532aa", "#ffb552");
} else if (filename.includes("tc-")) {
  colorScheme("#319acb", "#ee3c89");
} else {
  colorScheme("#ffb552", "#ee3c89");
}
