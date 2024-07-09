// Function to calculate the countdown
function calculate() {
    // Get the selected date from the input
    const dateInput = document.getElementById('dateInput').value;

    const currentDate = new Date();

    // Manually parse the date input to avoid time zone issues
    const [year, month, day] = dateInput.split('-').map(Number);
    const selectedDate = new Date(year, month - 1, day); // Months are 0-based in JavaScript Date

    const diff = selectedDate - currentDate;
    if (diff <= 0) {
        alert("Select a date in the future.");
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    selectedDate.setHours(0, 0, 0, 0);
    result = selectedDate;
    document.getElementById('resultText').innerHTML = `
        Your time remaining is: ${days} Days / ${hours} Hours / ${minutes} Minutes / ${seconds} Seconds
    `;

    setTimeout(calculate, 1000);
}