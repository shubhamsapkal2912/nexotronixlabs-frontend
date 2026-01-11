import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ChipModule } from 'primeng/chip';
import { DataService } from '../../services/data.service';
import { Service }  from '../../helpers/model/models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    ChipModule
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  processSteps = [
    {
      number: '01',
      title: 'Discovery',
      icon: 'pi-search',
      description: 'Understanding your business goals, challenges, and requirements through comprehensive analysis.'
    },
    {
      number: '02',
      title: 'Design',
      icon: 'pi-palette',
      description: 'Creating intuitive UI/UX designs and prototypes that align with your brand and user needs.'
    },
    {
      number: '03',
      title: 'Develop',
      icon: 'pi-code',
      description: 'Building robust, scalable solutions using cutting-edge technologies and best practices.'
    },
    {
      number: '04',
      title: 'Deploy',
      icon: 'pi-cloud-upload',
      description: 'Launching your solution with ongoing support, monitoring, and continuous improvement.'
    }
  ];



  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getServices().subscribe(services => {
      this.services = services;
    });
  }
}
