import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
import { ConfigService } from '../../services/config.service';
import { JobOpening } from '../../helpers/model/models';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    ChipModule,
    AccordionModule,
    DialogModule,
    InputTextModule,
    FileUploadModule,
    MessagesModule
  ],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  openPositions: JobOpening[] = [];
  displayModal: boolean = false;
  applicationForm: FormGroup;
  submitted = false;
  selectedFile: File | null = null;
  selectedJob: JobOpening | null = null;
  messages: Message[] = [];
  loading: boolean = false;

  cultureValues = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new ideas to solve complex problems.',
      image: "assets/images/img-3.jpeg"
    },
    {
      title: 'Collaboration',
      description: 'Teamwork and open communication drive our success and foster growth.',
      image: 'assets/images/img-4.jpeg'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we deliver to our clients.',
      image: 'assets/images/img-5.jpeg'
    }
  ];

  benefits = [
    {
      icon: 'pi-heart',
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for you and your family.'
    },
    {
      icon: 'pi-chart-line',
      title: 'Career Growth',
      description: 'Continuous learning opportunities, mentorship, and clear career progression paths.'
    },
    {
      icon: 'pi-calendar',
      title: 'Flexible Schedule',
      description: 'Work-life balance with flexible hours and remote work options.'
    },
    {
      icon: 'pi-dollar',
      title: 'Competitive Pay',
      description: 'Industry-leading salaries with performance bonuses and equity options.'
    },
    {
      icon: 'pi-sun',
      title: 'Time Off',
      description: 'Generous PTO, paid holidays, and sabbatical programs for long-term employees.'
    },
    {
      icon: 'pi-users',
      title: 'Team Events',
      description: 'Regular team building activities, offsites, and social events.'
    }
  ];

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder
  ) {
    this.applicationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^[\d\s\-\+\(\)]+$/)]],
      resume: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadJobOpenings();
  }

  loadJobOpenings() {
    this.loading = true;
    
    this.configService.get('api/current_openings/')
      .pipe(
        catchError((error) => {
          console.error('Error loading job openings:', error);
          this.loading = false;
          return of([]);
        })
      )
      .subscribe((jobs: JobOpening[]) => {
        this.openPositions = jobs;
        this.loading = false;
      });
  }

  get f() {
    return this.applicationForm.controls;
  }

  openApplicationModal(job: JobOpening | null) {
    this.selectedJob = job;
    this.displayModal = true;
    this.applicationForm.reset();
    this.selectedFile = null;
    this.submitted = false;
    this.messages = [];
  }

  onFileSelect(event: any) {
    const file = event.files[0];
    
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
      this.applicationForm.patchValue({ resume: file.name });
      this.messages = [];
    } else {
      this.selectedFile = null;
      this.applicationForm.patchValue({ resume: '' });
      this.messages = [
        { severity: 'error', summary: 'Invalid File', detail: 'Please upload a PDF file only.' }
      ];
      event.files = [];
    }
  }

  onFileRemove() {
    this.selectedFile = null;
    this.applicationForm.patchValue({ resume: '' });
  }

  onSubmit() {
    this.submitted = true;

    if (this.applicationForm.invalid || !this.selectedFile) {
      this.messages = [
        { severity: 'error', summary: 'Error', detail: 'Please fill in all required fields and upload your resume.' }
      ];
      return;
    }

    this.loading = true;

    const formData = new FormData();
    formData.append('name', this.applicationForm.get('name')?.value);
    formData.append('email', this.applicationForm.get('email')?.value);
    formData.append('contact', this.applicationForm.get('contact')?.value);
    formData.append('resume', this.selectedFile);
    formData.append('job_position', this.selectedJob?.title || 'General Application');

    this.configService.post('api/apply/', formData)
      .pipe(
        catchError((error) => {
          console.error('Error submitting application:', error);
          this.loading = false;
          
          if (error.status === 400 && error.error) {
            let errorMessage = 'Please check your form fields and try again.';
            
            if (error.error.resume) {
              errorMessage = error.error.resume[0];
            } else if (error.error.email) {
              errorMessage = error.error.email[0];
            } else if (error.error.contact) {
              errorMessage = error.error.contact[0];
            }
            
            this.messages = [
              { severity: 'error', summary: 'Validation Error', detail: errorMessage }
            ];
          } else {
            this.messages = [
              { severity: 'error', summary: 'Error', detail: 'Failed to submit application. Please try again.' }
            ];
          }
          
          return of(null);
        })
      )
      .subscribe((response) => {
        this.loading = false;
        
        if (response) {
          this.messages = [
            { 
              severity: 'success', 
              summary: 'Success', 
              detail: 'Your application has been submitted successfully! Check your email for confirmation.' 
            }
          ];

          setTimeout(() => {
            this.displayModal = false;
            this.applicationForm.reset();
            this.selectedFile = null;
            this.submitted = false;
          }, 3000);
        }
      });
  }

  closeModal() {
    this.displayModal = false;
    this.applicationForm.reset();
    this.selectedFile = null;
    this.submitted = false;
    this.messages = [];
  }
}
