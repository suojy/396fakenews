const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');
const size = 400;
const margin = {top: 20, right: 20, bottom: 30, left: 50};
const width = size - margin.left - margin.right;
const height = size - margin.top - margin.bottom;

class MyBarChart extends D3Component {

  initialize(node, props) {
    let data = [{"x":"negative", "y":0},{"x":"netural","y":0},{"x":"positive","y":0}]
    
    var w = size - margin.top
    var h = margin.left+margin.right-5
    const svg = this.svg = d3.select(node).append('svg');
    svg.attr('viewBox', `0 0 ${size+40} ${size}`)
      .style('width', width + margin.left + margin.right)
      .style('height', height + margin.top + margin.bottom);
    
    svg.append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
    var x = d3.scaleBand().domain(["negative","netural","positive"]).range([0, 400]);
    x.paddingOuter(1)
    var y = d3.scaleLinear().domain([0,d3.max(data, function(d) { return d.y; })]).range([size-margin.top, 20]);
    var valueline = d3.line()
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); });
    var area = d3.area()
    .x(function(d) { return x(d.x); })
    .y0(size-margin.top)
    .y1(function(d) { return y(d.y); });

    var defs = svg.append("defs");

    var pattern = defs.append("pattern")
    pattern
    .attr("id","diagonal-stripe-2")
    .attr("width","200")
    .attr("height", "200")
    .attr("patternUnits","userSpaceOnUse")
      
    var image = pattern.append("image")
    image
    .attr("xlink:href","../static/images/stripes.png")
    .attr("x","0")
    .attr("y", "0")
    .attr("width", "200")
    .attr("height","200");
    svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .style("fill", "url(#diagonal-stripe-2)")
      .attr("transform", "translate("+ h +", 0)")
      .attr("x", function(d) { return x(d.x); })
      .attr("width", 50)
      .attr("y", function(d) { return y(d.y); })
      .attr("height", function(d) { return size-margin.top - y(d.y); });
    // svg.append("path")
    //   .data([data])
    //   .style("fill", "url(#diagonal-stripe-2)")
    //   .attr("class", "area")
    //   .attr("d", area);

    //   svg.append("path")
    //   .data([data])
    //   .attr("class", "line")
    //   .attr("d", valueline);
      // Add the X Axis
      
    svg.append("g")
    .attr("class", "myaxis")
    .attr("transform", "translate("+ margin.left +", "+ w +")")
    .call(d3.axisBottom(x));
    
    // Add the Y Axis
    svg.append("g")
    .attr("class", "myaxis_y")
    .attr("transform", "translate("+ margin.left +",0)")
      .call(d3.axisLeft(y));
  }

  update(props, oldProps) {
    let data = [{"x":"negative", "y":0},{"x":"netural","y":0},{"x":"positive","y":0}]
    let d = props.data
    let n = d.filter(t=>t.Neutral ==="Neutral")
    let p = d.filter(t=>t.Neutral ==="Positive")
    let ne = d.filter(t=>t.Neutral ==="Negative")
    data[0].y = ne.length
    data[1].y = n.length
    data[2].y = p.length
    var x = d3.scaleBand().domain(["negative","netural","positive"]).range([0, 400]);
    x.paddingOuter(1)
    var y = d3.scaleLinear().domain([0,d3.max(data, function(d) { return d.y; })]).range([size-margin.top, 20]);

    this.svg.selectAll('.bar')
      .data(data)
      .transition()
      .duration(750)
      .attr("x", function(d) { return x(d.x); })
      .attr("y", function(d) { return y(d.y); })
      .attr("height", function(d) { return size-margin.top - y(d.y); });
    // this.svg.selectAll('.area')
    //   .data([data])
    //   .transition()
    //   .duration(750)
    //   .attr("d", area);
    // this.svg.selectAll('.line')
    // .data([data])
    // .transition()
    // .duration(750)
    // .attr("d", valueline);
    this.svg.selectAll(".myaxis_y")
    .transition()
    .duration(750)
    .call(d3.axisLeft(y));
  }
}

module.exports = MyBarChart;
