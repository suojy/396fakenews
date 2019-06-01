const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 400;

class MyBarChart extends D3Component {

  initialize(node, props) {
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = size - margin.left - margin.right,
    height = size - margin.top - margin.bottom;
    var w = size - margin.top
    var h = margin.left*2
    const svg = this.svg = d3.select(node).append('svg');
    svg.attr('viewBox', `0 0 ${size+40} ${size}`)
      .style('width', width + margin.left + margin.right)
      .style('height', height + margin.top + margin.bottom);
    const data = [{"x":"negative", "y":300},{"x":"netural","y":10},{"x":"positive","y":100}]
    svg.append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
    var x_domain = d3.extent(data, function(d) { return d.x; })
    var x = d3.scaleOrdinal().domain(["negative","netural","positive"]).range([100,250, 400]);
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
    //  console.log(rect) 
    image
    .attr("xlink:href","../static/images/stripes.png")
    .attr("x","0")
    .attr("y", "0")
    .attr("width", "200")
    .attr("height","200");
    
    svg.append("path")
      .data([data])
      .style("fill", "url(#diagonal-stripe-2)")
      .attr("class", "area")
      .attr("d", area);

      svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);
      // Add the X Axis
      
    svg.append("g")
    .attr("class", "myaxis")
    .attr("transform", "translate(0, "+ w +")")
    .call(d3.axisBottom(x));
    
    // Add the Y Axis
    svg.append("g")
    .attr("class", "myaxis_y")
    .attr("transform", "translate("+ h +",0)")
      .call(d3.axisLeft(y));
  }

  update(props, oldProps) {
    
  }
}

module.exports = MyBarChart;
