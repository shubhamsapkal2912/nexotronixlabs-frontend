import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { FeaturesComponent } from '../features/features.component';
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Nexotronix Labs';
  
  features = [
    {
      icon: 'lightbulb',
      title: 'Innovation',
      description: 'Leveraging the latest technologies to build future-proof solutions that give you a competitive edge.'
    },
    {
      icon: 'groups',
      title: 'Expertise',
      description: 'Our team consists of industry veterans with proven track records in delivering complex projects.'
    },
    {
      icon: 'verified_user',
      title: 'Reliability',
      description: 'Delivering robust and scalable products you can depend on, ensuring your operations run smoothly.'
    }
  ];

services = [
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent systems that learn and adapt to your needs, unlocking powerful insights from your data.',
    image: 'assets/images/bg1.png'
  },
  {
    title: 'IoT Development',
    description: 'Connecting the physical and digital worlds seamlessly to create smarter environments and products.',
    image: 'assets/images/bg2.png'
  },
  {
    title: 'Custom Software Solutions',
    description: 'Tailor-made applications designed for your specific challenges and workflows.',
    image: 'assets/images/bg3.png'
  }
];

}
