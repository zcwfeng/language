// Dimensions of sunburst.
var width = 750;
var height = 600;
var radius = Math.min(width, height) / 2;


// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 105, h: 30, s: 3, t: 10
};

// Mapping of step names to colors.
var colors = {
  "Indo European": "#466187",
    "Slavic": "#7399c7",
        "West Slavic": "#88b1d1",
            "Lechitic": "#88b1d1",
                "Polish": "#88b1d1",
            "Czech Slovak": "#d9d5ce",
                "Czech": "#d9d5ce",
        "South Slavic": "#bcbfd1",  
            "Serbo Croatian": "#bcbfd1",
        "East Slavic": "#b6c7e0",
            "Ukrainian": "#b6c7e0",
            "Russian": "#b6c7e0",
            "Belarusian": "#b6c7e0",
    "Italic": "#4199a3",
        "Romance": "#44a7b0",
            "Italo Western": "#c0eced",
                "Western": "#e0af55",
                    "Ibero Romance": "#e88b3f",
                        "Spanish": "#e88b3f",
                        "Portuguese": "#e88b3f",
                    "Gallo Romance": "#fcdf26",
                        "French": "#fcdf26",
                "Italian": "#969e32",
            "Eastern": "#79b559",
                "Romanian": "#79b559",
    "Indo Iranian": "#494f9c",
        "Iranian": "#1a2138",
            "Western Iranian": "#627194",
                "Southwestern Iranian": "#627194",
                    "Persian": "#bdd6de",
                "Northwestern Iranian": "#627194",
                    "Kurdish": "#bdd6de",
                    "Balochi": "#bdd6de",
            "Eastern Iranian": "#c25456",
                "Pashto": "#fad0d0",
        "Indo Aryan": "#1c57a8",
            "Southern zone": "#237fdb",
                "Marathi": "#237fdb",
                "Konkani": "#237fdb",
                "Deccan": "#237fdb",    
            "Sinhalese": "#d8edf0",
            "Northwestern zone": "#1f53ad",
                "Sindhi": "#1f53ad",
                "Lahnda": "#1f53ad",
                    "Saraiki": "#1f53ad",
                    "Punjabi": "#1f53ad",
            "Northern zone": "#80e5f5",
                "Nepali": "#80e5f5",
            "Eastern zone": "#5253b5",
                "Oriya": "#5253b5",
                "Bihari": "#5253b5",
                    "Maithili": "#9a9fe3",
                    "Magahi": "#9a9fe3",
                    "Bhojpuri": "#9a9fe3",
                "Bengali Assamese": "#5253b5",
                    "Sylheti": "#9a9fe3",
                    "Chittagonian": "#9a9fe3",
                    "Assamese": "#9a9fe3",
                    "Bengali": "#9a9fe3",
            "East Central zone": "#8bc8f2",
                "Chhattisgarhi": "#8bc8f2",
                "Awadhi": "#8bc8f2",
            "Central zone": "#992588",
                "Western Hindi": "#dec1eb",
                    "Urdu": "#dec1eb",
                    "Hindi": "#dec1eb",
                "Rajasthani": "#992588",
                    "Marwari": "#992588",
                        "Dhundari": "#992588",
                "Haryanvi": "#992588",
                "Gujarati": "#cf88d4",
    "Greek": "#bbbbbb",
    "Germanic": "#176280",
        "West": "#469cab",
            "German": "#c3d4db",
            "English": "#c3d4db",
            "Dutch": "#c3d4db",
        "North": "#6bb89e",
            "Swedish": "#6bb89e",
  "Sino Tibetan": "#4f1124",
    "Tibeto Burman": "#ff2626",
        "Burmese": "#ff2626",
    "Chinese": "#ab2833",
        "Xiang": "#f7949b",
        "Wu": "#f7949b",
        "Min Nan": "#f7949b",
        "Min Dong": "#f7949b",
        "Min Bein": "#f7949b",
        "Mandarin": "#f7949b",
        "Jin": "#f7949b",
        "Hakka": "#f7949b",
        "Gan": "#f7949b",
        "Cantonese": "#f7949b",
  "Afro Asiatic": "#c43937",
    "Semitic": "#eb514c",
        "South": "#faafb2",
            "Amharic": "#faafb2",
        "Central": "#faafb2",
            "Arabic": "#faafb2",
    "Cushitic": "#f59382",
        "Somali": "#f59382",
        "Oromo": "#f59382",
    "Chadic": "#f7ceca",
        "Hausa": "#f7ceca",
  "Austronesian": "#fa5cb0",
    "Sundanese": "#f763b2",
    "Philippine": "#f763b2",
        "Tagalog": "#f763b2",
        "Bisayan": "#f763b2",
            "Hiligaynon": "#f763b2",
            "Cebuan": "#f763b2",
        "Ilocano": "#f763b2",
    "Malay": "#f763b2",
    "Malagasy": "#f763b2",
    "Madurese": "#f763b2",
    "Javanese": "#f763b2",
  "Dravidian": "#8073c7",
    "Southern": "#8073c7",
        "Tamil": "#8073c7",
        "Malayalam": "#8073c7",
        "Kannada": "#8073c7",
    "South Central": "#8073c7",
        "Telugu": "#8073c7",
  "Niger Congo": "#35b346",
    "Atlantic Congo": "#35b346",
        "Volta Congo": "#7dd11e",
            "North": "#7dd11e",
                "Mossi": "#7dd11e",
            "Kwa": "#7dd11e",
                "Akan": "#7dd11e",
            "Benue Congo": "#7dd11e",
                "Igboid": "#7dd11e",
                    "Igbo": "#7dd11e",
                "Defoid": "#7dd11e",
                    "Yoruba": "#7dd11e",
                "Bantoid": "#7dd11e",
                    "S": "#7dd11e",
                        "Shona": "#7dd11e",
                        "Nguni": "#7dd11e",
                            "Zulu": "#7dd11e",
                            "Xhosa": "#7dd11e",
                    "N": "#7dd11e",
                        "Chichewa": "#7dd11e",
                    "J": "#7dd11e",
                        "Kirundi": "#7dd11e",
                        "Kinyarwanda": "#7dd11e",
                    "G": "#7dd11e",
                        "Swahili": "#7dd11e",
        "Fula": "#35b346",
  "Altaic": "#ebf095",
    "Turkic": "#ebf095",
     "Western Turkic": "#ebf095",
        "Kazakh": "#ebf095",
     "Southern Turkic": "#ebf095",
        "Turkish": "#ebf095",
        "Azerbaijani": "#ebf095",
     "Eastern Turkic": "#ebf095",
        "Uzbek": "#ebf095",
        "Uyghur": "#ebf095",
  "Japonic": "#f06b43",
    "Japanese": "#f06b43",
  "Austro Asiatic": "#b82064",
    "Mon Khmer": "#b82064",
        "Vietnamese": "#b82064",
        "Khmer": "#b82064",
  "Korean": "#6a2e99",
  "Tai Kadai": "#ba6dbf",
    "Kam Tai": "#ba6dbf",
        "Southwestern": "#ba6dbf",
            "Thai": "#ba6dbf",
        "Central": "#ba6dbf",
            "Zhuang": "#ba6dbf",
  "Uralic": "#386a6e",
    "Hungarian": "#386a6e",
  "Creole": "#e05e6f",
    "Haitian Creole": "#e05e6f",
  "Quechuan": "#3c8eba",
    "Quechua": "#3c8eba",
  "Hmong Mien": "#bbbbbb",
    "Hmong":"#bbbbbb"
};

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.layout.partition()
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

// Use d3.text and d3.csv.parseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("Languages.csv", function(text) {
  var csv = d3.csv.parseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition.nodes(json)
      .filter(function(d) {
      return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return colors[d.name]; })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

  var percentage = (100 * d.value / totalSize).toPrecision(3);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.select("#percentage")
      .text(percentageString);

  d3.select("#explanation")
      .style("visibility", "");

  var sequenceArray = getAncestors(d);
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .each("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .transition()
      .duration(1000)
      .style("visibility", "hidden");
}

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
  var path = [];
  var current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

  // Data join; key function combines name and depth (= position in sequence).
  var g = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.name + d.depth; });

  // Add breadcrumb and label for entering nodes.
  var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", function(d) { return colors[d.name]; });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.name; });

  // Set position for entering and updating nodes.
  g.attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Remove exiting nodes.
  g.exit().remove();

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}

function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 75, h: 30, s: 3, r: 3
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(colors).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(colors))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.value; });

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.key; });
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("-");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
 	var foundChild = false;
 	for (var k = 0; k < children.length; k++) {
 	  if (children[k]["name"] == nodeName) {
 	    childNode = children[k];
 	    foundChild = true;
 	    break;
 	  }
 	}
  // If we don't already have a child node for this branch, create it.
 	if (!foundChild) {
 	  childNode = {"name": nodeName, "children": []};
 	  children.push(childNode);
 	}
 	currentNode = childNode;
      } else {
 	// Reached the end of the sequence; create a leaf node.
 	childNode = {"name": nodeName, "size": size};
 	children.push(childNode);
      }
    }
  }
  return root;
};
