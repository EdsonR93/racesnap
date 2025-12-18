export class Event {
  constructor(
    public id: string,
    public name: string,
    public createdBy: string,
    public createdAt: Date
  ) {}
}