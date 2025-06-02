import { Component } from '@angular/core';

export class Game {
  constructor(
    public title: string,
    public genre: string,
    public description: string,
    public imageUrl: string,
    public price: number,
    public rating: number,
    public platform: string[],
    public releaseDate: string
  ) {}
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  standalone: false  
})
export class GamesComponent {
  igrice: Game[] = [
    new Game(
      'Cyberpunk 2077', 
      'RPG', 
      'Open-world action-adventure story set in Night City', 
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
      59.99,
      4.5,
      ['PC', 'PS5', 'Xbox Series X'],
      '2020-12-10'
    ),
    new Game(
      'Elden Ring', 
      'Action RPG', 
      'FromSoftware\'s epic fantasy action-RPG', 
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
      49.99,
      5,
      ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X'],
      '2022-02-25'
    ),
    new Game(
      'God of War: Ragnarök', 
      'Action-adventure', 
      'Kratos and Atreus journey through the Nine Realms', 
      'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png',
      69.99,
      4.8,
      ['PS4', 'PS5'],
      '2022-11-09'
    ),
    new Game(
      'The Witcher 3: Wild Hunt', 
      'RPG', 
      'A story-driven open world RPG', 
      'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
      29.99,
      5,
      ['PC', 'PS4', 'Xbox One', 'Switch'],
      '2015-05-19'
    ),
    new Game(
      'Horizon Forbidden West', 
      'Action RPG', 
      'Explore distant lands, fight bigger machines', 
      'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png',
      59.99,
      4.7,
      ['PS4', 'PS5'],
      '2022-02-18'
    ),
    new Game(
      'Call of Duty: Modern Warfare II', 
      'FPS', 
      'The sequel to 2019\'s blockbuster Modern Warfare', 
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg',
      69.99,
      4.2,
      ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X'],
      '2022-10-28'
    ),
    new Game(
      'FIFA 25', 
      'Sports', 
      'The latest installment in the FIFA series', 
      'https://cdn1.epicgames.com/offer/b61e8ddd14e94619b7a74cf9d73f86b5/EGS_EASPORTSFC25StandardEdition_EACanada_S1_2560x1440-f650d1a50a08e78279071d931145822a',
      59.99,
      3.9,
      ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X', 'Switch'],
      '2022-09-30'
    ),
    new Game(
      'Stray', 
      'Adventure', 
      'A lost cyberpunk cat in a robot city', 
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/header.jpg',
      29.99,
      4.6,
      ['PC', 'PS4', 'PS5'],
      '2022-07-19'
    ),
    new Game(
      'Hogwarts Legacy', 
      'Action RPG', 
      'Open-world RPG set in the Wizarding World', 
      'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg',
      59.99,
      4.4,
      ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X', 'Switch'],
      '2023-02-10'
    ),
    new Game(
      'Red Dead Redemption 2', 
      'Action-adventure', 
      'An epic tale of life in America\'s unforgiving heartland', 
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
      39.99,
      4.9,
      ['PC', 'PS4', 'Xbox One'],
      '2018-10-26'
    ),
    new Game(
      'Starfield',
      'RPG',
      'Explore the stars in Bethesda’s newest open-world RPG',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg',
      69.99,
      4.3,
      ['PC', 'Xbox Series X'],
      '2023-09-06'
    ),
    new Game(
      'Resident Evil 4 Remake',
      'Survival Horror',
      'Remake of the classic horror-action masterpiece',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg',
      59.99,
      4.7,
      ['PC', 'PS4', 'PS5', 'Xbox Series X'],
      '2023-03-24'
    ),
    new Game(
      'Baldur\'s Gate 3',
      'RPG',
      'A party-based RPG set in the Dungeons & Dragons universe',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
      59.99,
      4.9,
      ['PC', 'PS5', 'Xbox Series X'],
      '2023-08-03'
    ),
    new Game(
      'Spider-Man: Miles Morales',
      'Action-adventure',
      'Miles Morales discovers explosive powers to become his own Spider-Man',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1817190/header.jpg',
      49.99,
      4.6,
      ['PC', 'PS4', 'PS5'],
      '2020-11-12'
    ),
    new Game(
      'Alan Wake 2',
      'Psychological Horror',
      'A horror story sequel about a writer trapped in a nightmare',
      'https://image.api.playstation.com/vulcan/ap/rnd/202305/2420/83ef93949d474052cc87b86617a5498505d4b50390280394.jpg',
      59.99,
      4.5,
      ['PC', 'PS5', 'Xbox Series X'],
      '2023-10-27'
    ),
    new Game(
      'Death Stranding Director\'s Cut',
      'Action',
      'Reconnect a fractured society in a mysterious post-apocalyptic world',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1850570/header.jpg',
      49.99,
      4.4,
      ['PC', 'PS5'],
      '2022-03-30'
    ),
    new Game(
      'Ghost of Tsushima: Director\'s Cut',
      'Action-adventure',
      'Fight as a samurai in feudal Japan during the Mongol invasion',
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQi3rBW-yOcvj34Z5jzGTtwrqWkpd2o1tpT6cW-red3egnY_d75Cl7Y6KoXmvEWJj2eLgGgPw',
      69.99,
      4.9,
      ['PS4', 'PS5'],
      '2021-08-20'
    ),
    new Game(
      'Assassin\'s Creed Valhalla',
      'Action RPG',
      'Become a legendary Viking on a quest for glory',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg',
      59.99,
      4.1,
      ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X'],
      '2020-11-10'
    ),
    new Game(
      'The Legend of Zelda: Tears of the Kingdom',
      'Action-adventure',
      'Sequel to Breath of the Wild set in an expanded Hyrule',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/239160/header.jpg', 
      69.99,
      4.9,
      ['Switch'],
      '2023-05-12'
    ),
    new Game(
      'Diablo IV',
      'Action RPG',
      'Return to the dark world of Sanctuary in this grim ARPG',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg',
      69.99,
      4.2,
      ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X'],
      '2023-06-06'
    ),
    new Game(
      'Final Fantasy XVI',
      'JRPG',
      'A dark, epic fantasy tale filled with magic and monsters',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2515020/capsule_616x353.jpg?t=1741059170',
      69.99,
      4.3,
      ['PS5'],
      '2023-06-22'
    )

  ];

  selektovanaIgra: Game | null = null;
  filterGenre: string = 'all';
  sortOption: string = 'rating-desc';

  prikaziDetalje(igra: Game) {
    this.selektovanaIgra = igra;
    document.body.style.overflow = 'hidden';
  }

  sakrijDetalje(event?: MouseEvent) {
  if (event) {
    event.stopPropagation();
  }
  this.selektovanaIgra = null;
  document.body.style.overflow = 'auto';
}

  get filteredGames() {
    let games = [...this.igrice];
  
    if (this.filterGenre !== 'all') {
      games = games.filter(game => game.genre === this.filterGenre);
    }

    switch (this.sortOption) {
      case 'price-asc':
        return games.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return games.sort((a, b) => b.price - a.price);
      case 'rating-desc':
        return games.sort((a, b) => b.rating - a.rating);
      case 'date-desc':
        return games.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
      default:
        return games;
    }
  }

  get genres() {
    return ['all', ...new Set(this.igrice.map(game => game.genre))];
  }
}