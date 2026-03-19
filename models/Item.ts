export class Item {
    id: number;
    name: string;
    title: string;  
    isActive: boolean;
    postedDate: Date;
    constructor(id: number, name: string, title: string, isActive: boolean, postedDate: Date) {
        this.id = id;
        this.name = name;
        this.title = title;         
        this.isActive = isActive;
        this.postedDate = postedDate;
    }
    getDetails(): string {
        return `Item ID: ${this.id}, Name: ${this.name}, Title: ${this.title}, Active: ${this.isActive}, Posted Date: ${this.postedDate.toDateString()} `;
    }
}