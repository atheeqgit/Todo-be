import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-insert-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, JsonPipe, HttpClientModule],
  templateUrl: './insert-form.component.html',
  styleUrl: './insert-form.component.scss',
})
export class InsertFormComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}

  // =============  example brandName data ==================
  brandData: string[] = ['honda', 'bajaj', 'yamaha'];

  // ============= example category data ===================
  categoryData: string[] = ['scooty', 'bike'];

  formData!: FormGroup;

  ngOnInit(): void {
    this.formData = this._formBuilder.group({
      modelName: this._formBuilder.control('', Validators.required),
      brandName: this._formBuilder.control('', Validators.required),
      bikeCC: this._formBuilder.control('', Validators.required),
      category: this._formBuilder.control('', Validators.required),
    });

    this.fetchBrandData();
    this.fetchCategoryData();
  }

  // ================ For fetching the datas ===================
  fetchBrandData() {
    this.http.get<string[]>('BRAND_API_URL').subscribe(
      (data: string[]) => {
        this.brandData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fetchCategoryData() {
    this.http.get<string[]>('CATEGORY_API_URL').subscribe(
      (data: string[]) => {
        this.brandData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // ============= for sending data ==========
  onSubmit() {
    if (this.formData.valid) {
      console.log(this.formData.value);
      this.formData.reset();
    }
  }
}
