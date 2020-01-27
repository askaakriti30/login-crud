import { Injectable, TemplateRef  } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class ToastService {
 
  toasts: any[] = [];
 
  // Push new Toasts to array with content and options
  show(text: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ text, ...options });
  }
 
  // Callback method to remove Toast DOM element from view
  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}