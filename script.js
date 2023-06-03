const delay = ms => new Promise(res => setTimeout(res, ms));

async function loadPage() {
    document.getElementById("nl").className = "box topload";
    await delay(250);
    document.getElementById("nr").className = "box flex topload";
    await delay(400);
    document.getElementById("tl").className = "box leftload";
    await delay(250);
    document.getElementById("tr").className = "box topload";
    await delay(250);
    document.getElementById("br").className = "box rightload";
    await delay(250);
    document.getElementById("bl").className = "box bottomload";
}

loadPage();

GithubCalendar(".calendar", "OuterSoda", {responsive: true});