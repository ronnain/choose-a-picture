import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'pick-a-picture-page',
  standalone: true,
  imports: [CommonModule, ImageModule],
  template: `
    <div class="card flex justify-content-center">
      <p-image
        src="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg"
        previewImageSrc="https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg"
        alt="Image"
        width="250"
        [preview]="true"
      />
    </div>
  `,
})
export default class PickAPicturePage {}
