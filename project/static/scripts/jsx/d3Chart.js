var ns = {};

ns.create = function(el, props, state) {
  
  var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);
  
  this.update(el, props, state);
};

ns.update = function(el, props, state) {
  
  var color = d3.scale.category10();
  var force = d3.layout.force()
      .charge(-120)
      .linkDistance(30)
      .size([props.width, props.height]);
    
  var svg = d3.select(el).selectAll('svg');
  
  var path = state.path;
  
  d3.json(path, function (error, graph){
    force.nodes(graph.nodes)
        .links(graph.links)
        .start();

    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link");

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 5)  
        .style("fill", function(d) {
            return color(d.weight); 
        })
        .call(force.drag);

    node.append("title")
        .text(function(d) { return d.id; });

    force.on("tick", function() {
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
     });
  });
};

/*
ns.destroy = function(el) {
    d3.select(el).remove();
};
*/

module.exports = ns;
