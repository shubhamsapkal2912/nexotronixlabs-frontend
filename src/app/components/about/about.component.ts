import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DataService } from '../../services/data.service';
import { TeamMember, Service, JobOpening } from '../../helpers/model/models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    ChipModule
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  teamMembers: TeamMember[] = [];

  coreValues = [
    {
      icon: 'pi-flag',
      title: 'Our Mission',
      description: 'To empower businesses through innovative, scalable, and user-centric software solutions that solve real-world problems.'
    },
    {
      icon: 'pi-eye',
      title: 'Our Vision',
      description: 'To be the global standard for digital transformation and engineering quality, setting new benchmarks in the industry.'
    }
  ];

  values = [
    {
      icon: 'pi-lightbulb',
      title: 'Innovation',
      description: 'Constantly pushing boundaries'
    },
    {
      icon: 'pi-shield',
      title: 'Integrity',
      description: 'Transparent and honest partnerships'
    },
    {
      icon: 'pi-bolt',
      title: 'Agility',
      description: 'Adapting quickly to change'
    }
  ];

  expertise = [
    {
      icon: 'pi-code',
      title: 'Custom Software',
      description: 'Tailored solutions for complex business needs using cutting-edge tech stacks.'
    },
    {
      icon: 'pi-mobile',
      title: 'Mobile App Dev',
      description: 'Native and cross-platform mobile experiences for iOS and Android.'
    },
    {
      icon: 'pi-globe',
      title: 'Web Development',
      description: 'Responsive, high-performance web applications designed for scale.'
    }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTeamMembers().subscribe(members => {
      this.teamMembers = members;
    });
  }
}
