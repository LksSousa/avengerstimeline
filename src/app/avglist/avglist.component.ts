import { Component, OnInit } from '@angular/core';
import { movies } from '../model/movies';

@Component({
  selector: 'avg-avglist',
  templateUrl: './avglist.component.html',
  styleUrls: ['./avglist.component.css']
})
export class AvglistComponent implements OnInit {

  constructor() { }

  listMovies: movies[] = [
    { ordem: 1, name: 'Cap. América - O primeiro Vingador', year: 2011, release: 'Steve Rogers é um jovem que participa de experiências visando a criação do supersoldado americano. Quando os oficiais militares conseguem transformá-lo em uma arma humana, eles percebem que não podem arriscar a vida do jovem nas batalhas de guerra.', img: 'cap01.jpg'},
    { ordem: 2, name: 'Capitã Marvel', year: 2019, release: 'Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. Ao tentar impedir uma invasão de larga escala na Terra, em 1995, ela tem memórias recorrentes de uma outra vida.', img: 'cap02.jpg'},
    { ordem: 3, name: 'Homem de Ferro', year: 2008, release: 'Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores.', img: 'cap03.jpg'},
    { ordem: 4, name: 'Homem de Ferro 2', year: 2010, release: 'Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre pressão de todos os lados para compartilhar sua tecnologia com as forças armadas. Ele resiste para divulgar os segredos de sua inigualável armadura, com medo de que estas informações caiam nas mãos erradas.', img: 'cap04.jpg'},
    { ordem: 5, name: 'O Incrível Hulk', year: 2008, release: 'O cientista Bruce Banner se esconde no Brasil enquanto busca desesperadamente a cura da mutação que o transforma em um monstro incontrolável. Só assim ele poderá novamente levar uma vida normal. Porém, durante este processo, ele precisa lutar contra o Abominável.', img: 'cap05.jpg'},
    { ordem: 6, name: 'Thor', year: 2011, release: 'Como filho de Odin, rei dos deuses nórdicos, Thor logo herdará o trono de Asgard de seu idoso pai. Porém, no dia de sua coroação, Thor reage com brutalidade quando os inimigos dos deuses entram no palácio violando o tratado. Como punição, Odin manda Thor para a Terra.', img: 'cap06.jpg'},
    { ordem: 7, name: 'Os Vingadores', year: 2012, release: 'Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra.', img: 'cap07.jpg'},
    { ordem: 8, name: 'Homem de Ferro 3', year: 2013, release: 'Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.', img: 'cap08.jpg'},
    { ordem: 9, name: 'Thor - O mundo Sombrio', year: 2014, release: 'Thor precisa contar com a ajuda de seus companheiros e até de seu traiçoeiro irmão Loki em um plano audacioso para salvar o universo. Entretanto, os caminhos de Thor se cruzam com Jane Foster e, dessa vez, a vida dela está realmente em perigo.', img: 'cap09.jpg'},
    { ordem: 10, name: 'Capitão América - Soldado Invernal', year: 2014, release: 'Após os eventos catastróficos em Nova York com Os Vingadores, Steve Rogers, também conhecido como Capitão América, segue tentando se ajustar ao mundo moderno. Porém, quando um colega da agência S.H.I.E.L.D. é atacado, Steve se vê preso em uma rede de intrigas.', img: 'cap10.jpg'},
    { ordem: 11, name: 'Guardiões da Galáxia', year: 2014, release: 'O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder.', img: 'cap11.jpg'},
    { ordem: 12, name: 'Guardiões da Galáxia Vol. 2', year: 2017, release: 'Os Guardiões da Galáxia lutam para manter sua nova família unida enquanto desvendam os mistérios sobre o verdadeiro pai de Peter Quill.', img: 'cap12.jpg'},
    { ordem: 13, name: 'OS Vingadores - Era de Ultron', year: 2015, release: 'Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron. Com o destino da Terra em jogo.', img: 'cap13.jpg'},
    { ordem: 14, name: 'Homem-Formiga', year: 2015, release: 'Dr. Hank Pym transforma um talentoso ladrão no herói Homem-Formiga. Ele quer impedir que seu antigo pupilo consiga replicar a fórmula da roupa que dá o poder do encolhimento, força sobre-humana e a capacidade de controlar um exército de formigas.', img: 'cap14.jpg'},
    { ordem: 15, name: 'Capitão América - Guerra Civil', year: 2016, release: 'Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.', img: 'cap15.jpg'},
    { ordem: 16, name: 'Homem-Aranha: De Volta ao Lar', year: 2017, release: 'Depois de lutar ao lado dos Vingadores, chegou a hora do jovem Peter Parker voltar para casa em Nova York ao lado de sua tia May. Sob o olhar atento do mentor Tony Stark, Peter começa a abraçar sua nova identidade como Homem-Aranha e combate diariamente pequenos crimes.', img: 'cap16.jpg'},
    { ordem: 17, name: 'Doutor Estranho', year: 2017, release: 'Após sua carreira ser destruída, um brilhante, porém arrogante, cirurgião ganha uma nova chance em sua vida quando um feiticeiro o treina para se tornar o Mago Supremo.', img: 'cap17.jpg'},
    { ordem: 18, name: 'Pantera Negra', year: 2018, release: 'Conheça a história de TChalla, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados.', img: 'cap18.jpg'},
    { ordem: 19, name: 'Thor: Ragnarok', year: 2017, release: 'Após anos afastado, Thor retorna para casa e descobre que seu pai Odin, rei de Asgard, está desaparecido. Após encontrá-lo, ele toma conhecimento de sua irmã mais velha, Hela, a poderosa e implacável deusa da morte.', img: 'cap19.jpg'},
    { ordem: 20, name: 'Homem-Formiga e a Vespa', year: 2018, release: 'Scott Lang lida com as consequências de suas escolhas tanto como super-herói quanto como pai. Enquanto tenta reequilibrar sua vida com suas responsabilidades como o Homem-Formiga, ele é confrontado por Hope van Dyne e Dr. Hank Pym com uma nova missão urgente.', img: 'cap20.jpg'},
    { ordem: 21, name: 'Vingadores - Guerra Infinita', year: 2018, release: 'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.', img: 'cap21.jpg'},
    { ordem: 22, name: 'Vingadores - Ultimato', year: 2019, release: 'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.', img: 'cap22.jpg'},
    { ordem: 23, name: 'Homem-Aranha: Longe de Casa', year: 2019, release: 'Peter Parker está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando é surpreendido pela visita de Nick Fury. Convocado para mais uma missão heroica, ele precisa enfrentar vários vilões que surgem em cidades-símbolo do continente.', img: 'cap23.jpg'},
  ];

  ngOnInit(): void {
  }

}
