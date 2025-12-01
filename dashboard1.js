// LINE CHART
new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Automated Tasks",
            data: [120, 180, 260, 350, 480, 620],
            borderWidth: 3
        }]
    }
});

// BAR CHART
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: ["HR", "Finance", "IT", "Support", "Sales"],
        datasets: [{
            label: "AI Tool Usage",
            data: [45, 68, 82, 53, 75],
            borderWidth: 1
        }]
    }
});

// PIE CHART
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["RPA", "ML Models", "Chatbots", "Predictive Analytics"],
        datasets: [{
            data: [35, 25, 20, 20]
        }]
    }
});
