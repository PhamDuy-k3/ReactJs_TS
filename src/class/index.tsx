import React from "react";
import duy from "./class";
// kế thừa cha thì các phương thức của cha thì con đều có
// nếu con có pthuoc giống cha thì pthuc con sẽ ghi đề lên phương thức cha
//
export const Class: React.FC = () => {
  class Person {
    public name: string;
    private age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    getFullName(): string {
      return this.name + this.age;
    }
    setAge(age_new: number): number {
      return (this.age = age_new);
    }
    descibe(): string {
      return `toi la ${this.name} - cha`;
    }
  }
  class Duy extends Person {
    private job: string;
    constructor(name: string, age: number, job: string) {
      super(name, age);
      this.job = job;
    }
    // descibe(): string {
    //   return `toi la ${this.name} - con`;
    // }
  }
  const duy = new Duy("pham", 12, "ql");
  
  //Duy ko có hàm descibe()
  console.log("DUY", duy.descibe()); //toi la pham-cha

  //Duy  có hàm descibe() ghi đè hàm cha
  console.log("DUY", duy.descibe()); //toi la pham-con

  console.log("class >>>", duy);
  return <h1>class</h1>;
};
