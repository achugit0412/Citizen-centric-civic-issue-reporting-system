const district = localStorage.getItem("authorityDistrict");
const issues = document.querySelectorAll(".issue");

issues.forEach(issue => {
  if (issue.classList.contains(district)) {
    issue.style.display = "block";
  } else {
    issue.style.display = "none";
  }
});