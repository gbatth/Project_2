// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['us-ma', 85044],
    ['us-wa', 79412],
    ['us-ca', 74305],
    ['us-or', 70004],
    ['us-wi', 65775],
    ['us-me', 60626],
    ['us-mi', 61497],
    ['us-nv', 64808],
    ['us-nm', 49943],
    ['us-co', 75020],
    ['us-wy', 63633],
    ['us-ks', 65864],
    ['us-ne', 68004],
    ['us-ok', 56309],
    ['us-mo', 60799],
    ['us-il', 71539],
    ['us-in', 62987],
    ['us-vt', 70685],
    ['us-ar', 52370],
    ['us-tx', 63661],
    ['us-ri', 67251],
    ['us-al', 53363],
    ['us-ms', 44494],
    ['us-nc', 55723],
    ['us-va', 77904],
    ['us-ia', 67403],
    ['us-md', 89658],
    ['us-de', 69378],
    ['us-pa', 66730],
    ['us-nj', 79182],
    ['us-ny', 68178],
    ['us-id', 62611],
    ['us-sd', 61384],
    ['us-ct', 79639],
    ['us-nh', 82866],
    ['us-ky', 54337],
    ['us-oh', 63569],
    ['us-tn', 57128],
    ['us-wv', 51390],
    ['us-dc', 88396],
    ['us-la', 49340],
    ['us-fl', 56456],
    ['us-ga', 57979],
    ['us-sc', 59130],
    ['us-mn', 75841],
    ['us-mt', 59597],
    ['us-nd', 66830],
    ['us-az', 65450],
    ['us-ut', 78591],
    ['us-hi', 82108],
    ['us-ak', 76570]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/us/custom/us-small'
    },

    title: {
        text: '2019-17 US Median Household Income'
    },

    subtitle: {
        text: 'Source: US Census Bureau'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Median Income',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }, {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.geojson(Highcharts.maps['countries/us/custom/us-small'], 'mapline'),
        color: 'silver',
        nullColor: 'silver',
        showInLegend: false,
        enableMouseTracking: false
    }]
});
