import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    name: '',
    address: '',
    phoneNumber: '',
    creditCard: '',
    secretCode: '',  // Vous pouvez aussi ajouter un champ secretCode ici si nécessaire
    deliveryDate: ''  // Ajout du champ de date
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Handle form submission logic here
    alert('Form submitted successfully!');
  }
}
