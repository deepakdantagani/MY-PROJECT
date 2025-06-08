class Film {
  private title: string
  private year: number
  private genre: string

  constructor(title: string = "", year: number = -1, genre: string = "") {
    this.title = title;
    this.year = year;
    this.genre = genre
  }

  get_title() {
    return this.title;
  }

  set_title(t: string) {
    this.title = t;
  }

  get_year() {
    return this.year;
  }

  set_year(y: number) {
    this.year = y;
  }

  get_genre() {
    return this.genre;
  }

  set_genre(g: string) {
    this.genre = g;
  }
}


class Theater {
  #films : Film[]

  constructor(films: Film[]  = []) {
    this.#films = films
  }
}

