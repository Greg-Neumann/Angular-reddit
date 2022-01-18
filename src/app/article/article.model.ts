export class Article {
  title: string;
  link: string;
  votes: number;
  constructor(t: string, l: string, v?: number) {
    //
    // third parameter v is optional - thus nullable
    //
    this.title = t;
    this.link = l;
    this.votes = v || 0;
  }
  voteUp(): void {
    this.votes += 1;
  }
  voteDown(): void {
    this.votes -= 1;
  }
}
