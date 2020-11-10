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




    // call buildCharts
    // call buildMetadata
}

function buildMetadata(data) {

    // filter the data for results, store in array, access object items

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