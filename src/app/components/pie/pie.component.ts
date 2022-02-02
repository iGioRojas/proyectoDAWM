import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  private data: { Framework: string; Stars: string; Released: string }[] = [
    { Framework: 'Preventivo', Stars: '52', Released: '2014' },
    { Framework: 'Correctivo', Stars: '54', Released: '2013' },
    { Framework: 'Predictivo', Stars: '44', Released: '2016' },
  ];

  private svg: any;
  private margin = 50;
  private width = 750;
  private height = 400;
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: any;

  constructor() {}

  ngOnInit(): void {
    this.createSvg();
    this.cargarDatos();
  }

  private cargarDatos(): void {
    fetch('http://localhost:3001/tipo_mantenimiento/conteo')
      .then((res) => res.json())
      .then((data) => {
        let tmp: any[] = [];
        for (let dato of data) {
          let data_tmp = {
            tipo: dato.descripcion,
            cantidad: dato.cantidad.toString(),
          };
          tmp.push(data_tmp);
        }
        this.createColors(tmp);
        this.drawChart(tmp);
      });
  }

  private createSvg(): void {
    this.svg = d3
      .select('figure#pie')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
      );
  }

  private createColors(data: any[]): void {
    this.colors = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.cantidad.toString()))
      .range(['#c7d3ec', '#a5b8db', '#879cc4', '#677795', '#5a6782']);
  }

  private drawChart(data: any[]): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.cantidad));

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', d3.arc().innerRadius(0).outerRadius(this.radius))
      .attr('fill', (d: any, i: any) => this.colors(i))
      .attr('stroke', '#121926')
      .style('stroke-width', '1px');

    // Add labels
    const labelLocation = d3.arc().innerRadius(100).outerRadius(this.radius);

    this.svg
      .selectAll('pieces')
      .data(pie(data))
      .enter()
      .append('text')
      .text((d: any) => d.data.tipo)
      .attr(
        'transform',
        (d: any) => 'translate(' + labelLocation.centroid(d) + ')'
      )
      .style('text-anchor', 'middle')
      .style('font-size', 15);
  }
}
