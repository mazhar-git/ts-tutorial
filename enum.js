"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Contributor"] = 2] = "Contributor";
    Role[Role["Reader"] = 3] = "Reader";
})(Role || (Role = {}));
console.log(Role);
