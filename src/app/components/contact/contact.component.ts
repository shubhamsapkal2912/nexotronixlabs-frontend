import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { AccordionModule } from 'primeng/accordion';
import { Message } from 'primeng/api';
import { ConfigService } from '../../services/config.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    CardModule,
    MessageModule,
    MessagesModule,
    AccordionModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  messages: Message[] = [];

  serviceOptions = [
    { label: 'Custom Software Development', value: 'custom' },
    { label: 'Mobile App Development', value: 'mobile' },
    { label: 'Web Development', value: 'web' },
    { label: 'Cloud Solutions', value: 'cloud' },
    { label: 'UI/UX Design', value: 'design' },
    { label: 'Consulting', value: 'consulting' },
    { label: 'Other', value: 'other' }
  ];

  budgetOptions = [
    { label: 'Less than $10k', value: '<10k' },
    { label: '$10k - $50k', value: '10k-50k' },
    { label: '$50k - $100k', value: '50k-100k' },
    { label: '$100k+', value: '100k+' },
    { label: 'To be discussed', value: 'tbd' }
  ];

  contactInfo = [
    {
      icon: 'pi-envelope',
      title: 'Email',
      value: 'nexotronixlabs@gmail.com',
      link: 'mailto:nexotronixlabs@gmail.com'
    },
    {
      icon: 'pi-phone',
      title: 'Phone',
      value: '+91 9373290652',
      link: 'tel:+919373290652'
    },
    {
      icon: 'pi-map-marker',
      title: 'Address',
      value: 'Pune ,Maharashtra, India',
      link: 'https://maps.google.com'
    }
  ];

  faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple mobile app might take 2-3 months, while enterprise solutions can take 6-12 months. We provide detailed timelines during the discovery phase.'
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes, we offer comprehensive post-launch support including bug fixes, updates, and maintenance packages. We also provide training for your team to manage the solution effectively.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile methodology with four main phases: Discovery (requirements gathering), Design (UI/UX), Development (coding & testing), and Deployment (launch & support). We maintain transparent communication throughout.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We can integrate with your existing team or provide dedicated resources. We are flexible with engagement models including staff augmentation, dedicated teams, or full project ownership.'
    },
    {
      question: 'How do you ensure project confidentiality?',
      answer: 'We sign NDAs before any project discussion and follow strict security protocols. All our team members are bound by confidentiality agreements and we use secure communication channels.'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private configService: ConfigService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[\d\s\-\+\(\)]+$/)]],
      company: [''],
      service: ['', Validators.required],
      budget: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.messages = [
        { severity: 'error', summary: 'Error', detail: 'Please fill in all required fields correctly.' }
      ];
      return;
    }

    this.loading = true;

    // Call API through ConfigService
    this.configService.post('api/contact/', this.contactForm.value)
      .pipe(
        catchError((error) => {
          console.error('Error submitting form:', error);
          this.loading = false;
          
          // Handle different error types
          if (error.status === 400) {
            // Validation errors from backend
            this.messages = [
              { severity: 'error', summary: 'Validation Error', detail: 'Please check your form fields and try again.' }
            ];
          } else if (error.status === 0) {
            // Network error
            this.messages = [
              { severity: 'error', summary: 'Connection Error', detail: 'Unable to connect to server. Please check your internet connection.' }
            ];
          } else {
            // Other errors
            this.messages = [
              { severity: 'error', summary: 'Error', detail: 'Something went wrong. Please try again later.' }
            ];
          }
          
          return of(null);
        })
      )
      .subscribe((response) => {
        this.loading = false;
        
        if (response) {
          console.log('Form submitted successfully:', response);
          
          this.messages = [
            { 
              severity: 'success', 
              summary: 'Success', 
              detail: 'Thank you for contacting us! We will get back to you within 24 hours. A confirmation email has been sent to your email address.' 
            }
          ];

          // Reset form
          this.contactForm.reset();
          this.submitted = false;

          // Clear message after 7 seconds
          setTimeout(() => {
            this.messages = [];
          }, 7000);
        }
      });
  }
}
