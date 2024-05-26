// file .ts là file ko chưa JSX
function addNew(a: string, b: string): string;
function addNew(a: number, b: number): number;
function addNew(a: any, b: any): any {
  return a + b;
}

export default addNew;
