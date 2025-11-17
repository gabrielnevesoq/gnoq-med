import { ApplicationRef, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class Alert {
  private toastRef: ComponentRef<AlertComponent> | null = null;

  constructor(private appRef: ApplicationRef) {}

  show(type: 'success' | 'error', message: string, duration = 3000) {
    // Remove toast anterior se existir
    this.hide();

    const toast = this.appRef.components[0]?.injector.get(ViewContainerRef)?.createComponent(AlertComponent);
    if (!toast) return;

    toast.instance.type = type;
    toast.instance.message = message;
    toast.instance.duration = duration;
    toast.instance.show();

    this.toastRef = toast;

    // Adiciona no body
    document.body.appendChild(toast.location.nativeElement);
  }

  hide() {
    this.toastRef?.destroy();
    this.toastRef = null;
  }

  success(message: string, duration?: number) {
    this.show('success', message, duration);
  }

  error(message: string, duration?: number) {
    this.show('error', message, duration);
  }
}