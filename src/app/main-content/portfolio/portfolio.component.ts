import { Component } from '@angular/core';


interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects: Project[] = [
    { title: 'El Pollo Loco', description: 'Ein Spiel über ein verrücktes Huhn', imageUrl: 'assets/el-pollo-loco.png' },
    { title: 'Task Manager', description: 'Verwalten Sie Ihre Aufgaben', imageUrl: 'assets/task-manager.png' },
    { title: 'Chat App', description: 'Kommunizieren Sie mit Kollegen', imageUrl: 'assets/chat-app.png' },
    { title: 'Pokemon Info', description: 'Informationen über Pokemon', imageUrl: 'assets/pokemon-info.png' }
  ];
}