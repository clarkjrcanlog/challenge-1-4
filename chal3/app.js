/**
 * @title Challenge 3 - Who's Your Daddy - NodeJS
 * @description Create a nodejs program that displays the same output. (Run the code)
 * @rule #1: Use the sample "Fathers" data
 * @rule #2: Free Google
 */

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  }),
  Fathers = [
    //1st father obj
    {
      name: "Sir Jimmy",
      Wives: [
        {
          name: "Anna",
          children: [
            {
              name: "Sharon",
              age: 3
            },
            {
              name: "Gale",
              age: 1
            }
          ]
        },
        {
          name: "Badita",
          children: [
            {
              name: "Laura",
              age: 5
            },
            {
              name: "Rico",
              age: 2
            }
          ]
        }
      ]
    },
    //2nd father obj
    {
      name: "John Paul",
      Wives: [
        {
          name: "Laura",
          children: [
            {
              name: "Michelle",
              age: 3
            },
            {
              name: "Dina",
              age: 1
            }
          ]
        },
        {
          name: "Mitch",
          children: [
            {
              name: "Brownie",
              age: 2
            },
            {
              name: "Blackie",
              age: 1
            }
          ]
        }
      ]
    },
    //3st father obj
    {
      name: "Clark",
      Wives: [
        {
          name: "Mikay",
          children: [
            {
              name: "Ralf",
              age: 12
            },
            {
              name: "Jeff",
              age: 9
            }
          ]
        },
        {
          name: "Maria",
          children: [
            {
              name: "Chloe",
              age: 5
            },
            {
              name: "Paltak",
              age: 6
            }
          ]
        }
      ]
    }
  ];

// var TinkerTechInc_0x550c=['0xe','0xf','0x11','0x12','0x10','0x13','0x7','0x14','0x15','0x16','shift','Who\x27s\x20your\x20daddy?\x20(Enter\x20child\x27s\x20name)\x20','0x1','0x2','children','0x4','0x5','name','0x6','0x9','0xa','log','My\x20Daddy\x20is\x20','question','Wives','filter','toLowerCase','push','0x3','close','0x0','0xb','0xc','0xd'];(function(_0x3c54b4,_0x548740){var _0x4d9cd7=function(_0x5b3d23){while(--_0x5b3d23){_0x3c54b4['push'](_0x3c54b4['shift']());}};_0x4d9cd7(++_0x548740);}(TinkerTechInc_0x550c,0x1e6));var TinkerTechInc_0x56ae=function(_0x583fbf,_0x213ba4){_0x583fbf=_0x583fbf-0x0;var _0x477b6f=TinkerTechInc_0x550c[_0x583fbf];return _0x477b6f;};var TinkerTechInc_0x3a50=[TinkerTechInc_0x56ae('0x0'),TinkerTechInc_0x56ae('0x1'),TinkerTechInc_0x56ae('0x2'),TinkerTechInc_0x56ae('0x3'),TinkerTechInc_0x56ae('0x4'),'0x3',TinkerTechInc_0x56ae('0x5'),TinkerTechInc_0x56ae('0x6'),TinkerTechInc_0x56ae('0x7'),TinkerTechInc_0x56ae('0x8'),'0x8',TinkerTechInc_0x56ae('0x9'),TinkerTechInc_0x56ae('0xa'),TinkerTechInc_0x56ae('0xb'),TinkerTechInc_0x56ae('0xc'),'\x20and\x20My\x20Mommy\x20is\x20','No\x20result\x20found',TinkerTechInc_0x56ae('0xd'),'map',TinkerTechInc_0x56ae('0xe'),TinkerTechInc_0x56ae('0xf'),TinkerTechInc_0x56ae('0x10'),TinkerTechInc_0x56ae('0x11')];(function(_0x981158,_0x57b080){var _0x219af0=function(_0x441e3a){while(--_0x441e3a){_0x981158[TinkerTechInc_0x56ae('0x11')](_0x981158['shift']());}};_0x219af0(++_0x57b080);}(TinkerTechInc_0x3a50,0x166));var TinkerTechInc_0x5142=function(_0x503809,_0xe42b77){_0x503809=_0x503809-0x0;var _0x56465b=TinkerTechInc_0x3a50[_0x503809];return _0x56465b;};var TinkerTechInca=[TinkerTechInc_0x5142('0x0'),TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x2')),TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x3')),TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x12')),TinkerTechInc_0x56ae('0x13'),TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x5')),TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x6')),TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x8')),TinkerTechInc_0x5142('0x7'),'name',TinkerTechInc_0x5142('0x8')];(function(_0x273d4d,_0x36471c){var _0xd5b662=function(_0x26d672){while(--_0x26d672){_0x273d4d[TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x9'))](_0x273d4d[TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0xa'))]());}};_0xd5b662(++_0x36471c);}(TinkerTechInca,0x118));var TinkerTechIncb=function(_0x5db4b0,_0x4283ce){_0x5db4b0=_0x5db4b0-0x0;var _0x239b12=TinkerTechInca[_0x5db4b0];return _0x239b12;};readline[TinkerTechIncb(TinkerTechInc_0x56ae('0x14'))](TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x15')),_0x44dcfd=>{let _0x4d5611='';let _0x52a03d='';Fathers[TinkerTechIncb(TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x16')))](_0x5d0880=>{_0x5d0880[TinkerTechIncb(TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x17')))][TinkerTechIncb(TinkerTechInc_0x5142('0xc'))](_0x16033c=>{_0x16033c[TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x18'))][TinkerTechIncb(TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x19')))](_0x225616=>{if(_0x225616[TinkerTechIncb(TinkerTechInc_0x5142('0x10'))][TinkerTechIncb(TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x1a')))]()===_0x44dcfd[TinkerTechIncb(TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x1a')))]()){_0x52a03d=_0x16033c[TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x1b'))];_0x4d5611=_0x5d0880[TinkerTechIncb(TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x1c')))];}});});});_0x4d5611&&_0x52a03d?console[TinkerTechIncb(TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x1d')))](TinkerTechIncb(TinkerTechInc_0x56ae('0x1e'))+_0x4d5611+TinkerTechIncb(TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x1f')))+_0x52a03d):console[TinkerTechIncb(TinkerTechInc_0x56ae('0x8'))](TinkerTechIncb(TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x20'))));readline[TinkerTechIncb(TinkerTechInc_0x5142(TinkerTechInc_0x56ae('0x21')))]();});



readline.question(`Who's your daddy? (Enter child's name) `, name => {

    this.name = name;
    var inputName = name.toLowerCase();
    

for (i = 0; i < Fathers.length; i++) {
  for (j = 0; j < Fathers[i].Wives.length; j++) {
    for (k = 0; k < Fathers[i].Wives[j].children.length; k++) {
      var childName = Fathers[i].Wives[j].children[k].name;
      var lowChildName = childName.toLowerCase();
      if (lowChildName == inputName) {
        console.log(`My Daddy is: ${Fathers[i].name}, My Mommy is : ${Fathers[i].Wives[j].name}`);
      }

    }
  }
}


    readline.close();
  });
  