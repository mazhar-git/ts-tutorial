
let customerData:unknown;
customerData=10;
customerData='Mazhar';

let customerName:string;

//customerName=customerData; // This line has erro because we need a string type data but whole data has unknown type.

if (typeof customerData === 'string')
{
    customerName = customerData;
}