import { Driver } from '../Driver';

export class ConsoleDriver implements Driver {
    public write(text: string): void {
        console.log(text);
    }
}
