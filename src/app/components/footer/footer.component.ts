import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, DividerModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  services = [
    { label: 'Custom Software', link: '/services' },
    { label: 'Mobile Development', link: '/services' },
    { label: 'Web Development', link: '/services' },
    { label: 'Cloud Solutions', link: '/services' }
  ];

  company = [
    { label: 'About Us', link: '/about' },
    { label: 'Careers', link: '/careers' },
    { label: 'Contact', link: '/contact' }
  ];

  contactInfo = [
    { icon: 'pi-envelope', text: 'nexotronixlabs@gmail.com' },
    { icon: 'pi-phone', text: '+91 9373290652' },
    { icon: 'pi-map-marker', text: 'Pune, Maharashtra, India' }
  ];

  socialLinks = [
    { icon: 'pi-linkedin', link: 'https://www.linkedin.com/company/110829290' },
    { icon: 'pi-twitter', link: 'https://x.com/nexotronixlabs' },
    // { icon: 'pi-github', link: '#' },
    { icon: 'pi-instagram', link: 'https://www.instagram.com/nexotronixlabs/' }
  ];
}
