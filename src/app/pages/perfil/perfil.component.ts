import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private data = [
    {"Year": "2019", "Customer": "700", "Released": "100000"},
    {"Year": "2020", "Customer": "100", "Released": "0"},
    {"Year": "2021", "Customer": "350", "Released": "0"},
  ];
  private svg:any;
  private margin = 50;
  private width = 550 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  active = "";
  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
}

  createSvg():void{
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.Year))
    .padding(0.3);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(10,2)rotate(0)")
    .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d: { Year: string; }) =>  x(d.Year))
    .attr("y", (d: { Customer: d3.NumberValue; }) => y(d.Customer))
    .attr("width", x.bandwidth())
    .attr("height", (d: { Customer: d3.NumberValue; }) => this.height - y(d.Customer))
    .attr("fill", "#E56416");
  }

  enfasis(){
    this.active = "bg-warning"
  }
}
