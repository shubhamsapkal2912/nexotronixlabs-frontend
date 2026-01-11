import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DataService } from '../../services/data.service';
import { Service }  from '../../helpers/model/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services: Service[] = [];
  trustedCompanies = ['AcmeCorp', 'GlobalTech', 'Nebula', 'FoxRun', 'CircleIO'];
  
  features = [
    {
      icon: 'pi-check-circle',
      title: 'Agile Methodology',
      description: 'Iterative development process ensuring flexibility and rapid delivery of value.'
    },
    {
      icon: 'pi-shield',
      title: 'Scalable & Secure',
      description: 'Security-first architecture built to scale with your business growth seamlessly.'
    },
    {
      icon: 'pi-headphones',
      title: 'Dedicated Support',
      description: 'Post-launch maintenance and support to keep your systems running smoothly.'
    }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getServices().subscribe(services => {
      this.services = services.slice(0, 3);
    });
  }
}
