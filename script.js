//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    let p = document.createElement('p');
	p.setAttribute('id','timer')
    setInterval(() => {
		const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
			hourCycle: 'h12',
        second: "numeric",
        hour12: true // Use 24-hour format
    };
        p.innerHTML = new Date().toLocaleDateString(undefined, options).toUpperCase();
    }, 1000);
    document.body.appendChild(p);
});