import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamMember, Service, JobOpening } from '../helpers/model/models';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  getServices(): Observable<Service[]> {
    return of([
      {
        id: 1,
        title: 'Custom Software',
        description: 'Tailored enterprise solutions designed to streamline your operations and solve complex business challenges with robust architecture.',
        icon: 'pi pi-code',
        longDescription: 'We build custom software solutions that perfectly align with your business processes and goals.',
        features: [
          'Enterprise Architecture Design',
          'Legacy System Modernization',
          'API Development & Integration',
          'Cloud-Native Applications',
          'Microservices Architecture'
        ]
      },
      {
        id: 2,
        title: 'Mobile App Development',
        description: 'Native and cross-platform iOS & Android apps that engage users with intuitive UI/UX and seamless performance.',
        icon: 'pi pi-mobile',
        longDescription: 'Create engaging mobile experiences that your users will love, available on both iOS and Android platforms.',
        features: [
          'iOS & Android Native Development',
          'Cross-Platform Development (React Native, Flutter)',
          'Mobile UI/UX Design',
          'App Store Optimization',
          'Push Notifications & Analytics'
        ]
      },
      {
        id: 3,
        title: 'Website Development',
        description: 'Modern, responsive, and fast websites built for scalability, utilizing the latest frameworks to ensure your digital presence stands out.',
        icon: 'pi pi-globe',
        longDescription: 'Build powerful, scalable web applications using cutting-edge technologies and best practices.',
        features: [
          'Responsive Web Design',
          'Progressive Web Apps (PWA)',
          'E-commerce Solutions',
          'Content Management Systems',
          'SEO Optimization'
        ]
      },
      {
        id: 4,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and migration services to ensure your applications perform optimally at any scale.',
        icon: 'pi pi-cloud',
        features: [
          'Cloud Migration Strategy',
          'AWS, Azure, GCP Services',
          'DevOps & CI/CD',
          'Cloud Security',
          'Cost Optimization'
        ]
      },
      {
        id: 5,
        title: 'UI/UX Design',
        description: 'User-centric design that combines aesthetics with functionality to create memorable digital experiences.',
        icon: 'pi pi-palette',
        features: [
          'User Research & Testing',
          'Wireframing & Prototyping',
          'Visual Design',
          'Design Systems',
          'Accessibility Compliance'
        ]
      },
      {
        id: 6,
        title: 'Consulting & Strategy',
        description: 'Strategic technology consulting to help you make informed decisions about your digital transformation journey.',
        icon: 'pi pi-chart-line',
        features: [
          'Digital Transformation Strategy',
          'Technology Stack Selection',
          'Architecture Review',
          'Performance Optimization',
          'Security Audits'
        ]
      }
    ]);
  }

  getTeamMembers(): Observable<TeamMember[]> {
    return of([
      {
        id: 1,
        name: 'Alex Morgan',
        position: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
        bio: 'Visionary leader with 15+ years in software development'
      },
      {
        id: 2,
        name: 'Sarah Chen',
        position: 'Chief Technology Officer',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
        bio: 'Expert in scalable architecture and cloud technologies'
      },
      {
        id: 3,
        name: 'David Ross',
        position: 'Head of Design',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        bio: 'Award-winning designer passionate about user experience'
      },
      {
        id: 4,
        name: 'Emily Watson',
        position: 'VP of Engineering',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
        bio: 'Leading engineering excellence and innovation'
      }
    ]);
  }

getJobOpenings(): Observable<JobOpening[]> {
  return of([
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      postedDate: '2 days ago',
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team and help build scalable web applications.',
      responsibilities: [
        'Design and develop full-stack web applications',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable code',
        'Participate in code reviews and mentoring'
      ],
      requirements: [
        '5+ years of full-stack development experience',
        'Proficiency in Angular and Node.js',
        'Experience with cloud platforms (AWS/Azure)',
        'Strong problem-solving skills'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Pune, India',
      type: 'Full-time',
      experience: '3+ years',
      postedDate: '1 week ago',
      description: 'Join our design team to create beautiful and intuitive user interfaces for our products.',
      responsibilities: [
        'Create user-centered designs',
        'Develop wireframes and prototypes',
        'Conduct user research and testing',
        'Collaborate with developers'
      ],
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma/Adobe XD',
        'Strong portfolio demonstrating design skills',
        'Understanding of responsive design'
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      postedDate: '3 days ago',
      description: 'We need a DevOps Engineer to manage our infrastructure and improve our deployment processes.',
      responsibilities: [
        'Manage cloud infrastructure',
        'Implement CI/CD pipelines',
        'Monitor system performance',
        'Ensure security best practices'
      ],
      requirements: [
        '4+ years of DevOps experience',
        'Experience with Docker and Kubernetes',
        'Knowledge of AWS/Azure',
        'Scripting skills (Python/Bash)'
      ]
    },
    {
      id: 4,
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '3+ years',
      postedDate: '5 days ago',
      description: 'Looking for a skilled mobile developer to build cross-platform mobile applications.',
      responsibilities: [
        'Develop mobile applications for iOS and Android',
        'Integrate with backend APIs',
        'Optimize app performance',
        'Publish apps to app stores'
      ],
      requirements: [
        '3+ years of mobile development experience',
        'Proficiency in React Native or Flutter',
        'Experience with RESTful APIs',
        'Published apps in app stores'
      ]
    }
  ]);
}

}
