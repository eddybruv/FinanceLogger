import Invoice from "./classes/invoice.js";
import Payment from "./classes/Payment.js";
import {HasFormatter} from "./interfaces/HasFormatter.js"
import {ListTemplate} from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;

  if(type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});


// ENUMS
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

// generics
const addUID = <T extends {name: string}> (obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: "Edwin", age: 21});
console.log(docOne)

interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docThree : Resource<string> = {
  uid: 1,
  resourceName: ResourceType.PERSON,
  data: "Eddy"
}

// tuples
let arr = ["ryu", 25, true];

let tup: [string, number, boolean] = ["ryu", 25, true];