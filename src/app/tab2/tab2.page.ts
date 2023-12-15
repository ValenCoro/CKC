import { NavController } from '@ionic/angular';
import { PerfilService } from '../core/services/perfil.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(
    public perfilService: PerfilService,
    private navCtrl: NavController
  ) {}

  guardarPerfil(): void {
    this.perfilService.guardarPerfil(this.perfilService.getPerfil());
  }

  async guardarDatosLocal(): Promise<void> {
    this.perfilService.guardarPerfil(this.perfilService.getPerfil());
    await this.perfilService.guardarDatosLocal();
  }

  irATab1() {
    this.navCtrl.navigateRoot('/tabs/tab1');
  }
}
