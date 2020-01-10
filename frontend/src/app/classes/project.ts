export class Project {
  _id: string;
  name: string;
  createdBy: string;
  createdDate: Date;

  constructor(id: string = null,
              name: string = 'New Project',
              createdBy: string = 'System',
              createdDate: Date = new Date()
  ) {
    this._id = id;
    this.name = name;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
  }
}
