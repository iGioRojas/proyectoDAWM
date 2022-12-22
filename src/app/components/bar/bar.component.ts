import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  @Input() tipo: string = '';
  @Input() lim_sup: number = 0;

  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;

  constructor() {}

  ngOnInit(): void {
    this.cargarDatos();
    this.createSvg();
  }

  private cargarDatos(): void {
    fetch(`http://localhost:3001/${this.tipo}/conteo`)
      .then((res) => res.json())
      .then((data: []) => {
        this.drawBars(data.reverse());
      })
      .catch((err) => err);
  }

  private createSvg(): void {
    this.svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => `${d.año}/${d.mes}`))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3
      .scaleLinear()
      .domain([0, this.lim_sup])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: any) => x(`${d.año}/${d.mes}`))
      .attr('y', (d: any) => y(d.num_servicios))
      .attr('width', x.bandwidth())
      .attr('height', (d: any) => this.height - y(d.num_servicios))
      .attr('fill', '#d04a35');
  }
}
