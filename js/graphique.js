// partie graphique en JS

// Récupération du contexte d'affichage du canvas d'id chart
const ctx0 = document.getElementById("chart1");
Chart.defaults.elements.line.borderWidth = 2;

const myDatasets = [];
myDatasets.push({
    data: data[0].assecs,
    label: data[0].region,
    borderColor: "#3FD3C7",
    backgroundColor: "#3FD3C7",
});

Chart.defaults.color = "#FDFFEB";

// Création d'un graphique affichant des courbes dans le canvas d'id chart
const chart = new Chart(ctx0, {
    type: "line",
    data: {
        labels: data[0].years,
        datasets: myDatasets,
    },
    options: {
        elements: {
            point: {
                pointStyle: 'point',
                pointColor: "#3FD3C7",
            },
            line: {
                borderWidth: 3
            }
        },
        plugins: {
            title: {
                display: true,
                align: 'center',
                position: 'top',
                text: 'Nombre d\'assecs en mai-septembre entre 2012 et 2022 en France'
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    align: 'center',
                    position: 'top',
                    text: 'Années'
                },
                grid: {
                    display: false,
                }
            },
            y: {
                title: {
                    display: true,
                    align: 'center',
                    position: 'top',
                    text: 'Nombre d\assecs'
                },
                grid: {
                    color: "#FDFFEB"
                }
            }
        },
        maintainAspectRatio: false

    }
});

