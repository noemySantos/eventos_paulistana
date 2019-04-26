import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Concurso Miss Estudantil de Paulistana';
  concursos = [
    {
      "imagem": "http://blogdoevangelista.com.br/wp-content/uploads/2018/11/Miss-e-Mister-Estudantil-2019-Paulistana-PI-dest.jpg",
      "title": "Concurso Miss Estudantil de Paulistana",
      "subtitle": "Conheça os Candidatos ao Miss e Mister Estudantil 2019 de Paulistana",
      "descricao": "Hoje (22/11/2018) foram realizadas as fotos de divulgação dos candidatos ao concurso de beleza do Miss e Mister Estudantil 2019. Foi um momento de muita alegria e expectativa dos candidatos e dos realizadores. Conheça a página onde vai ocorrer a votação clicando AQUI! Aguardem que a qualquer momento estará disponível na página as fotos dos candidatos para serem curtidas.",
      "like": "500",
      "deslike": "100"
    },

    {
      "imagem": "http://blogdoevangelista.com.br/wp-content/uploads/2019/04/protesto-alunos-falta-de-transporte-dest.jpg",
      "title": "Protesto",
      "subtitle": "Alunos em Paulistana foram as ruas em protesto contra o Governo de Wellington",
      "descricao": "Indignados alunos da rede estadual de ensino foram nesta manhã de sexta-feira (05/04/2019) as ruas na cidade de Paulistana– PI em protesto ao Governo de Wellington Dias por falta de transporte escolar.",
      "like": "500",
      "deslike": "10"
    }
];

like(concurso) {
  console.log(concurso.title);
  
}

excluir(concurso) {
  var i =this.concursos.indexOf(concurso);
  this.concursos.splice(i, 1)
}
}