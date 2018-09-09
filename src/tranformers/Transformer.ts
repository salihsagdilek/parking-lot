export class Transformer {
  public static fetchCollection(items: []) {
    // @ts-ignore
    return items.map((item) => this.fetch(item));
  }

  public static sendCollection(items: []) {
    // @ts-ignore
    return items.map((item) => this.send(item));
  }
}
