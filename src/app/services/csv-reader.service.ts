import { Injectable, signal } from '@angular/core';

export type Operario = {
  matricula: string;
  nome: string;
};

@Injectable({
  providedIn: 'any',
})
export class CSVReaderService {
  private reader = new FileReader();
  private result = signal<null | Operario[]>(null);

  readFile(file: Blob) {
    this.reader.onload = (loadedFile) => {
      const result = loadedFile.target?.result as string;
      const rows = result.split('\r\n');
      const data: Operario[] = rows.map((row) => {
        const values = row.split(',');
        return {
          matricula: values[0],
          nome: values[1],
        };
      });
      this.result.set(data);
    };

    this.reader.readAsText(file);
  }

  getResult() {
    return this.result;
  }
}
