"use strict";
/*

2. enum hota kya hai?
Bhaiya, enum ka full form Enumeration hai. Iska use related, fixed values ko ek meaningful naam dene ke liye hota hai.

Maan lo tumhari application mein 3 types ke users hain:
- Admin
- User
- Guest
Inko baar-baar numbers se represent karne ke bajaye enum use kar sakte hain

enum Role{
    Admin,
    User,
    Guest
}

console.log(Role.Admin); // 0
console.log(Role.User);  // 1
console.log(Role.Guest); // 2
*/
/*
cutom vsalue de sakte hai ok
enum Role {
    Admin = 1,
    User = 2,
    Guest = 3
}

console.log(Role.Admin); // 1
console.log(Role.Guest); // 3

*/
/* string enum :----
enum role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

console.log(role.Admin);

*/
/*
 5.
 Variable mein enum ka use  topic name :----

 enum Role {
    Admin,
    User,
    Guest
}

let myRole: Role = Role.Admin;

console.log(myRole); // 0
*/
/* Real-world example:---
enum Status {
    Pending,
    Approved,
    Rejected
}

let applicationStatus: Status = Status.Approved;

if (applicationStatus === Status.Approved) {
    console.log("Application approved!");
}

*/
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["South"] = 1] = "South";
    Directions[Directions["East"] = 2] = "East";
    Directions[Directions["West"] = 3] = "West";
})(Directions || (Directions = {}));
console.log(Directions.East);
