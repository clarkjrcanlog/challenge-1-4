const Users = [
  {
    name: "Jani Jani",
    age: 20,
    marital_status: "married",
    address: {
      province: "Negros Occidental",
      city: "Bacolod City"
    },
    children: [
      {
        name: "Kyla",
        age: 10
      },
      {
        name: "Raymund",
        age: 16
      }
    ]
  },
  {
    name: "Lance",
    age: 26,
    marital_status: "single",
    address: {
      province: "Negros Occidental",
      city: "Bacolod City"
    },
    children: []
  },
  {
    name: "Myla",
    age: 29,
    marital_status: "single",
    address: {
      province: "Unknown",
      city: "Quezon City"
    },
    children: []
  },
  {
    name: "Kekek",
    age: 55,
    marital_status: "single",
    address: {
      province: "Unknown",
      city: "Quezon City"
    },
    children: []
  },
  {
    name: "Purdoy",
    age: 35,
    marital_status: "single",
    address: {
      province: "Unknown",
      city: "Makati City"
    },
    children: []
  },
  {
    name: "Cherry",
    age: 19,
    marital_status: "single",
    address: {
      province: "Negros Occidental",
      city: "Bacolod City"
    },
    children: []
  },
  {
    name: "Clark",
    age: 40,
    marital_status: "married",
    address: {
      province: "Negros Occidental",
      city: "Bacolod City"
    },
    children: [
      {
        name: "Gino",
        age: 10
      },
      {
        name: "Jimmy",
        age: 22
      },
      {
        name: "Lou",
        age: 20
      },
      {
        name: "Greg",
        age: 14
      },
      {
        name: "Papang",
        age: 12
      }
    ]
  }
];

// let bcCount = [];
// let qcCount = [];
// let mcCount = [];

// for (i = 0; i < Users.length; i++) {
//   if (Users[i].address.city == "Bacolod City") {
//     bcCount.push(Users[i].address.city);
//   }else if(Users[i].address.city == "Quezon City"){
//     qcCount.push(Users[i].address.city);
//   }else{
//     mcCount.push(Users[i].address.city);
//   }
// }

// console.log(`city: ${bcCount[0]} users: ${bcCount.length}\ncity: ${qcCount[0]} users: ${qcCount.length}\ncity: ${mcCount[0]} users: ${mcCount.length}`);

 //var TinkerTechInc_0x1316=["0x3","Display data of user that are single\n","city","0xe","0xf","0x11","0x14","0x15","0x16","0x18","0x19","0x17","0x1c","0x1d","0x4","0x6","0x7","0x9","0xb","0xd","filter","0x10","log","City with most users\nb","marital_status","address","length","users","0x5","0x2","0x8","0xa","Display number of users by city \n","0xc","Display data of User with most children\n","max","0x12","0x1a","single","0x1b","0x1","0x1f","0x20","0x22","0x23","0x24","0x26","0x27","0x28","0x29","apply","children","shift","push","0x0"];!function(e,n){!function(n){for(;--n;)e.push(e.shift())}(++n)}(TinkerTechInc_0x1316,270);var TinkerTechInc_0x338b=function(e,n){return TinkerTechInc_0x1316[e-=0]},TinkerTechInc_0xa4fa=[TinkerTechInc_0x338b("0x0"),TinkerTechInc_0x338b("0x1"),TinkerTechInc_0x338b("0x2"),"0x1","0x2",TinkerTechInc_0x338b("0x3"),TinkerTechInc_0x338b("0x4"),TinkerTechInc_0x338b("0x5"),TinkerTechInc_0x338b("0x6"),TinkerTechInc_0x338b("0x7"),TinkerTechInc_0x338b("0x8"),TinkerTechInc_0x338b("0x9"),TinkerTechInc_0x338b("0xa"),"0x13",TinkerTechInc_0x338b("0xb"),TinkerTechInc_0x338b("0xc"),TinkerTechInc_0x338b("0xd"),TinkerTechInc_0x338b("0xe"),TinkerTechInc_0x338b("0xf"),"0x1a","0x1b",TinkerTechInc_0x338b("0x10"),TinkerTechInc_0x338b("0x11"),TinkerTechInc_0x338b("0x12"),TinkerTechInc_0x338b("0x13"),TinkerTechInc_0x338b("0x14"),TinkerTechInc_0x338b("0x15"),"map","0x8",TinkerTechInc_0x338b("0x16"),"0xa",TinkerTechInc_0x338b("0x17"),"0xc",TinkerTechInc_0x338b("0x18"),TinkerTechInc_0x338b("0x19"),TinkerTechInc_0x338b("0x1a"),TinkerTechInc_0x338b("0x1b"),TinkerTechInc_0x338b("0x1c"),TinkerTechInc_0x338b("0x1d"),TinkerTechInc_0x338b("0x1e"),TinkerTechInc_0x338b("0x1f"),TinkerTechInc_0x338b("0x20")];!function(e,n){!function(n){for(;--n;)e.push(e[TinkerTechInc_0x338b("0x2")]())}(++n)}(TinkerTechInc_0xa4fa,402);var TinkerTechInc_0x4e01=function(e,n){return TinkerTechInc_0xa4fa[e-=0]},TinkerTechInc_0x4647=[TinkerTechInc_0x338b("0x5"),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x4")),TinkerTechInc_0x338b("0x21"),TinkerTechInc_0x4e01("0x1"),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x22")),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x5")),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x13")),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x21")),TinkerTechInc_0x4e01("0x6"),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x15")),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x23")),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x16")),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x24")),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x17")),TinkerTechInc_0x338b("0x25"),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x26")),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x18")),TinkerTechInc_0x338b("0x27"),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x8")),TinkerTechInc_0x4e01("0xf"),TinkerTechInc_0x4e01("0x10"),TinkerTechInc_0x338b("0x3"),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0xa")),TinkerTechInc_0x338b("0x28"),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x29")),TinkerTechInc_0x4e01("0x13"),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0xb")),TinkerTechInc_0x338b("0x4"),TinkerTechInc_0x4e01("0x15"),TinkerTechInc_0x4e01("0x16")];!function(e,n){!function(n){for(;--n;)e[TinkerTechInc_0x4e01("0x17")](e[TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0xb"))]())}(++n)}(TinkerTechInc_0x4647,434);var TinkerTechInc_0x33bd=function(e,n){return TinkerTechInc_0x4647[e-=0]},TinkerTechInca=[TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0xe"))),TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0xc"))),TinkerTechInc_0x33bd(TinkerTechInc_0x338b("0x22")),TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0xf"))),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x2a")),TinkerTechInc_0x33bd(TinkerTechInc_0x338b("0x13")),TinkerTechInc_0x338b("0x2b"),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x5")),TinkerTechInc_0x338b("0x19"),TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x2c")),TinkerTechInc_0x33bd(TinkerTechInc_0x338b("0x21")),TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x2d"))),TinkerTechInc_0x33bd(TinkerTechInc_0x338b("0x15")),TinkerTechInc_0x33bd(TinkerTechInc_0x4e01("0x4")),TinkerTechInc_0x33bd(TinkerTechInc_0x338b("0x16")),TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x14"))),TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x15")))];!function(e,n){!function(n){for(;--n;)e[TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x22")))](e[TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x23")))]())}(++n)}(TinkerTechInca,449);var TinkerTechIncb=function(e,n){return TinkerTechInca[e-=0]};let usersByCity=[];Users[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01("0x9")))](e=>{usersByCity[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x11"))))](n=>n[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x338b("0x9")))]===e[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x17"))))][TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x12"))))])[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01("0x1e")))]?usersByCity[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x11"))))](n=>n[TinkerTechIncb(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0xd")))]===e[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x338b("0x1a")))][TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01("0x1d")))])[0][TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x2e"))))]++:usersByCity[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x338b("0x29")))]({city:e[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x17"))))][TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01("0x1d")))],users:1})});let cityWithMostUsers=Math[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x2f"))))][TinkerTechInc_0x33bd(TinkerTechInc_0x4e01("0x6"))](Math,usersByCity[TinkerTechInc_0x33bd(TinkerTechInc_0x4e01("0x21"))](e=>e[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x2e"))))])),userWithMostChildren=Math[TinkerTechIncb(TinkerTechInc_0x4e01("0x2"))][TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x30"))))](Math,Users[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x16"))))](e=>e[TinkerTechIncb(TinkerTechInc_0x33bd("0x17"))][TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x1a"))]));console[TinkerTechInc_0x4e01("0xc")](TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x31")))),usersByCity,"\n"),console[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x32"))))](TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01("0x25"))),usersByCity[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x11"))))](e=>e[TinkerTechIncb("0x6")]===cityWithMostUsers)[0],"\n"),console[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x32"))))](TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x33")))),Users[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x338b("0x8")))](e=>e[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x34"))))][TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x2d")))]===userWithMostChildren)[0],"\n"),console[TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x32"))))](TinkerTechIncb(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x11"))),Users[TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x35")))](e=>e[TinkerTechIncb(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x12")))]===TinkerTechIncb(TinkerTechInc_0x33bd(TinkerTechInc_0x4e01(TinkerTechInc_0x338b("0x36"))))));


// Users per City
function usersPerCity(){

let counter = [];
Users.forEach(cities => {
  var check = 0;
  counter.forEach(e => {
    if(cities.address.city === e.city){
      check = 1
    }
  })

  if(check === 0){
    counter.push({"city":cities.address.city, "users":0 });
  }

})

Users.forEach(cities => {
  counter.forEach(e => {
    if(cities.address.city === e.city){
      e.users++
    }
  })
  
})
console.log("Display number of user by city")
console.log(counter)


// //Highest Value

let maxValue = [];

counter.forEach(e => {
  if(maxValue.length === 0){
    maxValue.push({"city": e.city, "users": e.users})
  }else{
  maxValue.forEach(a =>{
    if(e.users > a.users){
      maxValue.pop()
      maxValue.push({"city": e.city, "users": e.users})
    }else if(e.users === a.users ){
      maxValue.push({"city": e.city, "users": e.users})
    }
  })
}
})

console.log("City of most users")
console.log(maxValue);


}

//Child count per user
function findNumbChild(){

let numChild = []

Users.forEach(e => {
  if(numChild.length === 0){
    numChild.push({"name": e.name, "childCount": e.children.length})
  }else{
    numChild.forEach(a => {
      if(e.children.length > a.childCount){
        numChild.pop()
        numChild.push({"name": e.name, "childCount": e.children.length})
      }else if(e.children.length == a.childCount){
        numChild.push({"name": e.name, "childCount": e.children.length})
      }
    })
  }
})

Users.forEach(e => {
  numChild.forEach(a => {
    if(a.name === e.name){
      console.log("Display data of User with most children")
      console.log(e)
    }
  })
})

}

//single status
function findStatus(){
const singleStatus = Users.filter((e) => {
  return e.marital_status == "single"
})

console.log("Display data of user that are single")
console.log(singleStatus)

}



// usersPerCity()
// findNumbChild()
// findStatus()


arr1 = [1, 2, 3]
arr2 = [4,5,6]

arr3 = arr1.concat(arr2);



console.log(arr3.filter(e => arr2.includes(e)));


