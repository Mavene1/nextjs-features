let variable = "Mavene";
variable = "Omofi";

let age = 10;
age = 21;

let ageWithType: number;
ageWithType = 23;

let nameString: string;
nameString = "Maven";

let bool: boolean;
bool = true;

let stringOrNumber: string | number;
stringOrNumber = 1;

let names = ["Maven", "Omosh"];
names.push("oti");

//ARRAY
let testStringArray: string[];
testStringArray = ["test"];

let testNumberArray: number[];
testNumberArray = [1, 2, 3];

let testStringorNumberArray: (string | number)[];
testStringorNumberArray = ["test", 23, "test1"];
testStringorNumberArray = [1, 2];

//OBJECT

let user = {
  username: "user",
  age: 22,
  isAdmin: false,
};
user.username = "Mavene";
// user.age="22"
user.age = 15;
// user.phone="0717171718"

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "Mavene",
  age: 15,
  isAdmin: false,
};

let userObjPhone: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};
userObjPhone = {
  username: "Mavene",
  age: 15,
  isAdmin: false,
  phone: "0717171717",
};

//ANY
let testAny;
testAny = 1;
testAny = "my";
testAny = [1, "yu"];

//FUNCTIONS
let sayHello = () => {
  console.log("Hello Welcome");
};
// sayHello=""

let funcReturnNumber = (): number => {
  return 1;
};

let addNum = (num: number) => {
  return (num += 1);
};
addNum(1);

let sumFunc = (num: number, num1: number, anotherNum?: number) => {
  return num + num1 + anotherNum!;
};
sumFunc(3, 7);

let func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

//TYPE ALLIASES
type UserType = {
  username: string;
  age: number;
  phone?: string;
};
let betterFunc = (user: UserType) => {
  console.log(user.username);
};

type myFunc = (num: number, str: string) => void;
let myFunction: myFunc = (a, b) => {
  console.log(a + " times " + b);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "light" | "dark";
};
const userWithTheme: UserType2 = {
  username: "Mavene",
  age: 15,
  phone: "0717171717",
  theme: "light",
};

//INTERFACE
interface IUser {
  username: string;
  age: number;
  phone: string;
}

interface IEmployee extends IUser {
  employeeId: string;
}

const myEmployee: IEmployee = {
  username: "Mavene",
  age: 15,
  phone: "0717171717",
  employeeId: "yesy",
};

const myUser: IUser = {
  username: "Mavene",
  age: 15,
  phone: "0717171717",
};

//GENERICS
interface IAuthor {
  id: number;
  username: string;
}
interface ICategory {
  id: number;
  title: string;
}
interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}
interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}
const testGen: IPostBetter<ICategory> = {
  id: 1,
  title: "test",
  desc: "test",
  extra: [
    {
      id: 1,
      title: "test",
    },
  ],
};

interface IPostEvenBetter<T extends object> {
  id: 1;
  title: "test";
  desc: "test";
  extra: T[];
}

const testGen2: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "test",
  desc: "test",
  extra: [{
    id: 1,
    username: "test",
  }],
};
