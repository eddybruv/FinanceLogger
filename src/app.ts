import Invoice from "./classes/invoice";

const invOne = new Invoice('mario', "work on the mario website", 400);
const invTwo = new Invoice('luigi', "work on the luigi website", 500)

let invoices: Invoice[] = [];

invoices.push(invTwo);
invoices.push(invOne);

invoices.forEach(inv => {
    console.log(inv.format());
})

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})