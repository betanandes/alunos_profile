import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage {

  constructor(private alertCtrl: AlertController) {}

  alunos = [
    {
      nome: 'Roberta Fernandes',
      turma: 'ADS301N',
      turno: 'Noite',
      unidade: 'Bonsucesso',
      image: 'assets/img/roberta.jpg'
    },
    {
      nome: 'Beatriz Gonçalves',
      turma: 'ADS301N',
      turno: 'Noite',
      unidade: 'Bonsucesso',
      image: 'assets/img/beatriz.jpg'
    },
    {
      nome: 'Liang Hong',
      turma: 'ADS301N',
      turno: 'Noite',
      unidade: 'Bonsucesso',
      image: 'assets/img/liang.jpg'
    },
    {
      nome: 'Yhuri Gadelha',
      turma: 'ADS301N',
      turno: 'Noite',
      unidade: 'Bonsucesso',
      image: 'assets/img/yhuri.jpg'
    }
  ];

  async mostrarDetalhes(aluno: any) {
    const alert = await this.alertCtrl.create({
      header: aluno.nome,
      message: `
        <strong>Turma:</strong> ${aluno.turma}<br>
        <strong>Turno:</strong> ${aluno.turno}<br>
        <strong>Unidade:</strong> ${aluno.unidade}
      `,
      buttons: ['OK']
    });

    await alert.present();
  }
}
