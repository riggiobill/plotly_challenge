//build a map of functions, test and fill in as you go

function init() {
    // D3 select the dropdown element
    var selected = d3.select("#selDataset");

    // Fill in the select options using the samples.json file
    d3.json("samples.json").then((data) => {
        var dataNames = data.names;

        dataNames.forEach((sample) => {
            selected
                .append("option")
                .text(sample)
                .property("value", sample);
        });

        // initialize the plots with the first sample section
        var initSample = dataNames[0];
        buildCharts(initSample);
        buildMetadata(initSample);

    });
}

function buildMetadata(data) {

    // filter the data for results, store in array, access object items
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        // filter for target search sample
        var resultsArray = metadata.filter(sampleObject => sampleObject.id == sample);
        var results = resultsArray[0];

        // D3 select to target the panel
        var targetPanel = d3.select("#sample-metadata");

        // clear potential previous metadata
        targetPanel.html("");

        // Display key and value pairs
        Object.entries(results).forEach(([key, value]) => {
            targetPanel.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });

    });
}

function buildCharts(data) {
    
    // D3 json to select the sample data

    // build bar chart

    // plotly call



    // build bubble chart

    // plotly call

}

function optionChanged(newData) {
    // select and fetch new data when new option is selected

    buildCharts(newData);
    buildCharts(newData);

}

// Initialize dashboard with info
init();