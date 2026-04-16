function showDistrictIssues() {
  const districts = document.querySelectorAll(".district-issues");

  districts.forEach(d => d.style.display = "none");

  const selected = document.getElementById("districtSelect").value;
  const selectedDiv = document.getElementById(selected);

  if (selectedDiv) {
    selectedDiv.style.display = "block";
  }
}

// show default district on load
document.addEventListener("DOMContentLoaded", showDistrictIssues);

const TRENDING_LIMIT = 25;

function upvoteIssue(issueId, button) {
  let count = localStorage.getItem(issueId) || 0;
  count++;

  localStorage.setItem(issueId, count);
  document.getElementById(issueId + "-count").innerText = count;

  if (count >= TRENDING_LIMIT) {
    document.getElementById(issueId + "-trending").style.display = "inline";
  }

  button.disabled = true;
}

// load upvotes on page load
document.addEventListener("DOMContentLoaded", function () {
  const issues = [
    "chennai1","chennai2","chennai3",
    "coimbatore1","coimbatore2","coimbatore3",
    "erode1","erode2"
  ];

  issues.forEach(id => {
    const count = localStorage.getItem(id) || 0;
    const countSpan = document.getElementById(id + "-count");
    const trendSpan = document.getElementById(id + "-trending");

    if (countSpan) countSpan.innerText = count;
    if (count >= TRENDING_LIMIT && trendSpan) {
      trendSpan.style.display = "inline";
    }
  });
});

