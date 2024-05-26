import React, { useState } from "react";
import addNew from "./addNew1";

const Function: React.FC = () => {
  // hàm trả về 1 giá trị nào đó ///////////////////////////////////////////////////////////////////////////////////////////////////////
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  // VOID hàm ko trả về giá trị nào( thực chất nó trả về undefined)///////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleLog = (message: string): void => {
    console.log("message", message);
  };
  
  const a = handleLog("duy");
  console.log(a); //=> undefined

  // NEVER ko trả về cái gì hết
  // const handleError = (errorMessage: string): never => {
  //   throw new Error(errorMessage);
  // };
  // console.log(handleError("error"));

  // UNION TYPE // nhiều kiểu dữ liệu cho 1 biến/////////////////////////////////////////////////
  const UnionType = (a: string | number, b: string | number) => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
    throw new Error("loi");
  };
  // console.log("UnionType", UnionType(true, "nam")); //error
  console.log("UnionType", UnionType("duy", "nam")); //no error

  //Type Aliases///////////////////////////////////////////////////////////////////////////////////////////////////////
  type aType = string | number;
  type bType = string | number | boolean;
  const UnionTypeAliases = (a: aType, b: bType) => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
    throw new Error("loi");
  };
  // console.log("UnionTypeAliases", UnionTypeAliases(true, "nam")); //error
  console.log("UnionTypeAliases", UnionTypeAliases("duy", "nam")); //no error

  //Optional Parameters (?)/////////////////////////////////////////////////////////////
  const summ = (a: number, b: number, c?: number): number => {
    if (c) {
      return a + b + c;
    }
    return a + b;
  };
  console.log("check sum", summ(2, 4)); // 6
  console.log("check sum", summ(2, 4, 6)); //12

  //Default Parameters/////////////////////////////////////////////////////////////
  const summ8 = (a: number, b: number, c = false) => {
    if (c === false) {
      return a + b;
    }
    if (c) {
      return a - b;
    }
  };
  console.log("check sum", summ8(2, 4)); //6
  console.log("check sum", summ8(2, 4, true)); //-2
  // console.log("check sum", summ8(2, 4, 2)); // error : c = false nó đã gán kiểu boolean cho c

  // Rest Parameters//////////////////////////////////////////////////////////////////////////////////////////////////////////

  //TH1
  function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((item) => (total += item));
    // [10,20].forEach((item) => (total += item)); // lấy 10 , 20 cho vào mảng numbers
    return total;
  }
  console.log("total", getTotal(10, 20));

  //TH2
  function multipy(n: number, ...m: number[]) {
    return m.map((item) => item * n);
  }
  console.log("multipy", multipy(10, 1, 2, 3)); //10 20 30

  //Function Overloading(viết lại các hàm có tên giống nhau)
  console.log("Function Overloading", addNew(1, 2));
  return (
    <>
      <h1>Function</h1>
    </>
  );
};
export default Function;
