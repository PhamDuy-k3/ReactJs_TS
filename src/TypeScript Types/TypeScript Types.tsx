import React, { useState } from "react";
const Types: React.FC = () => {
  let name = "dyt";
  // typescript gợi ý các hàm
  console.log(name.toUpperCase());
  console.log(name.length);
  //
  let name1: string;
  name1 = "1";

  //Định nghĩa type cho mảng//////////////////////////////////////////////////////////////////////////////////
  //=> TH1
  let aray1: string[] = ["duy", "nam"];
  //   aray1.push(1) // error
  aray1.push("1"); // no error

  //=> TH2
  let aray2: (string | number)[] = ["duy", "nam"];
  aray2.push(1); // no error
  aray2.push("1"); // no error

  //=> TH1 tuple
  let aray3: [string, number] = ["string", 24];
  let aray4: [boolean, number];
  aray4 = [true, 23];
  // aray4 = ["true", 23]; // error

  //Định nghĩa type cho object/////////////////////////////////////////

  interface Person1 {
    name: string;
    age: number;
    isStudent: boolean;
  }

  // Khai báo một object có kiểu dữ liệu là Person
  const person1: Person1 = {
    name: "John",
    age: 30,
    isStudent: false,
  };
  //   person1.gt = 'Nam'; //error : ko có kiểu gt trong Person
  console.log("person1", person1);

  interface Person2 {
    name: string;
    age: number;
    isStudent: boolean;
    gt?: string; // ko bắt buộc phải có
  }

  // Khai báo một object có kiểu dữ liệu là Person
  const person2: Person2 = {
    name: "John",
    age: 30,
    isStudent: false,
  };
  person2.gt = "Nam"; // no error
  console.log("person2", person2);

  ///boolean//////////////////////////////////////////////////////////////////////////////////
  let check: boolean = true;
  // check = '1' // error
  check = false; // no error

  //Enum Types
  // Any
  let any: any = "string"; // any bỏ qua ràng buộc kiểu dữ liệu
  any = 23;
  any = false;

  //Kế thừa type cha //////////////////////////////////////////////////////////////////////////////////////

  // DÙNG TYPE
  type Person = {
    name: string;
    age: number;
  };

  type Duy = Person & {
    job: string; // kế thừa name , age của Person
  };
  const duy: Duy = {
    name: "phamdouduy",
    age: 11,
    job: "FE",
  }; //+> no error

  // const duy2:Duy = {
  //   age:11,
  //   job:'FE'
  // } //+> error ( thiếu trường name)

  // DÙNG INTERFACE
  interface IPerson1 {
    name: string;
    age: number;
  }

  interface IEmployee extends IPerson1 {
    location: string;
  }
  const duy2: IEmployee = {
    name: "phamdouduy",
    age: 11,
    location: "HN",
  }; //+> no error

  // const duy3: IEmployee = {
  //   age: 11,
  //   location: "HN",
  // }; //+>  error

  return (
    <>
      <h1>Types</h1>
    </>
  );
};
export default Types;
