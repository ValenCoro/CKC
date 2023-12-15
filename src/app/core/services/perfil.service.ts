import { Injectable } from '@angular/core';
import { Perfil } from '../interfaces/perfil';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  perfil: Perfil = {
    nombreCompleto: '',
    email: '',
    celular: '',
    direccion: '',
    fechaNacimiento: new Date()
  };

  constructor(private toastController: ToastController) {}

  getPerfil(): Perfil {
    return this.perfil;
  }

  guardarPerfil(nuevoPerfil: Perfil): void {
    this.perfil = { ...nuevoPerfil };
    this.actualizarLocalStorage();
  }

  private actualizarLocalStorage(): void {
    const datosGuardados = JSON.stringify(this.perfil);
    localStorage.setItem('perfil', datosGuardados);
  }

  async guardarDatosLocal(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Datos guardados en localStorage con éxito',
      duration: 2000,
      position: 'bottom'
    });

    await toast.present();

    console.log('Datos guardados en localStorage:', localStorage.getItem('perfil'));
  }
}

