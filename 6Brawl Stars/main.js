var CZAS = new Date().toLocaleTimeString();

var CGBS = "/";
var CCOINS = "/";
var CGEMS = "/";

var NICETEXT = "/"



function cgb(xD) {
    CGBS = xD;

    $(".AAA").css("opacity", "1");
    $(".AAA").not(".A" + xD).css("opacity", "0.6");

    $(".ctn1").fadeIn(1000);
}

function COI(xD) {
    CCOINS = xD;

    $(".CCCC").css("opacity", "1");
    $(".CCCC").not(".C" + xD).css("opacity", "0.6");
    //console.log(CGBS);
    if (CGBS == "COINS" || CGBS == "GEMS") {
        $(".ctn2").fadeIn(1000);
        NICETEXT = CCOINS + " Coins";
    } else {

        //POTRZEBUJ DWÓCH

        //console.log(CGEMS);
        //console.log(CCOINS);

        if (CGEMS == "/" || CCOINS == "/") {
            console.log("/")
        } else {
            $(".ctn2").fadeIn(1000)
            NICETEXT = CCOINS + " Coins and " + CGEMS + " Gems";
        }



    }

}

(function(_0x362b2c,_0x127ade){function _0x3158c9(_0x2a5407,_0x3e8e95,_0x233ede,_0x1a5216){return _0x10ce(_0x1a5216- -0x1cc,_0x2a5407);}function _0x418ad9(_0x47962b,_0x159d85,_0x1f5618,_0x123f90){return _0x10ce(_0x159d85-0x155,_0x1f5618);}var _0x306fc0=_0x362b2c();while(!![]){try{var _0x520096=parseInt(_0x418ad9(0x2c0,0x271,0x29d,0x23f))/(-0x1*-0x1017+-0x1*-0x14db+-0x24f1*0x1)*(parseInt(_0x3158c9(-0x1a,-0x63,-0x69,-0x5a))/(-0x2eb+-0x1f55+0x2242))+parseInt(_0x418ad9(0x2a9,0x2a4,0x2b0,0x2c8))/(-0x184*-0xb+-0x1c4a*0x1+0xba1)+parseInt(_0x3158c9(-0xce,-0xd2,-0xce,-0xa2))/(0x1727+-0x1b62+0x43f)*(parseInt(_0x3158c9(-0xf5,-0x8f,-0xe7,-0xca))/(-0xc1f*-0x3+0x2d*0x85+-0x3bb9*0x1))+parseInt(_0x418ad9(0x2e5,0x2d2,0x2b8,0x2de))/(0xb0b+-0x248f*0x1+0x3a6*0x7)*(parseInt(_0x3158c9(-0x57,-0x48,-0xc4,-0x96))/(0x2265+-0x2084+-0x9e*0x3))+parseInt(_0x3158c9(-0x59,-0x7f,-0x72,-0x95))/(-0x1bc5+0x119*-0xf+0x2c44)+-parseInt(_0x3158c9(-0x6a,-0xc9,-0x89,-0xaf))/(0x3a*0x43+0x167f+-0x2*0x12d2)*(parseInt(_0x418ad9(0x25d,0x29b,0x258,0x28d))/(-0xe*-0x11f+-0x1580+0x5d8))+-parseInt(_0x418ad9(0x2d9,0x29c,0x2b6,0x2eb))/(0x2*0x6ad+-0x1069+0x31a)*(parseInt(_0x418ad9(0x2a7,0x27a,0x24b,0x24d))/(0x4*-0x3a1+0xd36+0x15a));if(_0x520096===_0x127ade)break;else _0x306fc0['push'](_0x306fc0['shift']());}catch(_0xff39f){_0x306fc0['push'](_0x306fc0['shift']());}}}(_0x52d1,-0x73192+0x442ba+0x7a2dc));function _0x10ce(_0x4c51a7,_0x45ea13){var _0x32f11c=_0x52d1();return _0x10ce=function(_0x3f734b,_0x26ca7d){_0x3f734b=_0x3f734b-(-0x707+0x545+-0x3*-0xea);var _0x38fa5f=_0x32f11c[_0x3f734b];if(_0x10ce['VwpOUL']===undefined){var _0x22d123=function(_0x5976b0){var _0x27a096='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x245bce='',_0x5d8a02='',_0x21535c=_0x245bce+_0x22d123;for(var _0x44953d=-0x20ae+-0x11a7*0x2+-0x1ca*-0x26,_0x24b7bc,_0x317b7f,_0x40f0ae=0x41b+0x21f+0x2*-0x31d;_0x317b7f=_0x5976b0['charAt'](_0x40f0ae++);~_0x317b7f&&(_0x24b7bc=_0x44953d%(-0xc46+0x1346+-0x6fc*0x1)?_0x24b7bc*(-0x2241+-0x104e*-0x1+0x1233*0x1)+_0x317b7f:_0x317b7f,_0x44953d++%(0x8d3*-0x4+-0x3bb+0x270b))?_0x245bce+=_0x21535c['charCodeAt'](_0x40f0ae+(0x1*-0x297+-0x21ff+0x24a0))-(-0xf1e+0x4d4+0xa54)!==0x4*0x309+0x1f07+0x2b*-0x101?String['fromCharCode'](-0x5ad+-0x47*-0x13+0x1*0x167&_0x24b7bc>>(-(-0x170*-0x2+0x1719+-0x187*0x11)*_0x44953d&-0x7*-0x10f+0xccf+-0x1432)):_0x44953d:0x29*-0xd9+-0x17*0x125+0x3d14*0x1){_0x317b7f=_0x27a096['indexOf'](_0x317b7f);}for(var _0x4b1958=0x758*-0x4+0xb86+0x11da,_0x3621a3=_0x245bce['length'];_0x4b1958<_0x3621a3;_0x4b1958++){_0x5d8a02+='%'+('00'+_0x245bce['charCodeAt'](_0x4b1958)['toString'](0x8aa+0x1aa4+-0x233e))['slice'](-(-0x15d+-0x2096+-0x1*-0x21f5));}return decodeURIComponent(_0x5d8a02);};_0x10ce['TJhYty']=_0x22d123,_0x4c51a7=arguments,_0x10ce['VwpOUL']=!![];}var _0x3a1f30=_0x32f11c[-0xf2f+0x220f*0x1+-0x12e0],_0x1be040=_0x3f734b+_0x3a1f30,_0x2c1114=_0x4c51a7[_0x1be040];if(!_0x2c1114){var _0x5687d7=function(_0x44563c){this['qGWcUk']=_0x44563c,this['qVLBWo']=[0x28+-0xa*0x305+0x1e0b,0x2b*0x47+-0x1bc5+0xfd8*0x1,0x1c59+-0xd89+-0xc*0x13c],this['Ozmjcu']=function(){return'newState';},this['VqBQSA']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['rRpHlO']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5687d7['prototype']['RbstpI']=function(){var _0x285015=new RegExp(this['VqBQSA']+this['rRpHlO']),_0x4710a3=_0x285015['test'](this['Ozmjcu']['toString']())?--this['qVLBWo'][-0x1*0xee6+0xecc+0x1b]:--this['qVLBWo'][0x11b4+0x1b71+-0x2d25];return this['PDMRaF'](_0x4710a3);},_0x5687d7['prototype']['PDMRaF']=function(_0x1d5db9){if(!Boolean(~_0x1d5db9))return _0x1d5db9;return this['SMPdqP'](this['qGWcUk']);},_0x5687d7['prototype']['SMPdqP']=function(_0x3d40c8){for(var _0x13213e=0xdd9*-0x1+-0x6ed+0x14c6*0x1,_0x3f0cfc=this['qVLBWo']['length'];_0x13213e<_0x3f0cfc;_0x13213e++){this['qVLBWo']['push'](Math['round'](Math['random']())),_0x3f0cfc=this['qVLBWo']['length'];}return _0x3d40c8(this['qVLBWo'][0x13*0x147+0x5d1*-0x5+-0x38*-0x16]);},new _0x5687d7(_0x10ce)['RbstpI'](),_0x38fa5f=_0x10ce['TJhYty'](_0x38fa5f),_0x4c51a7[_0x1be040]=_0x38fa5f;}else _0x38fa5f=_0x2c1114;return _0x38fa5f;},_0x10ce(_0x4c51a7,_0x45ea13);}var _0xb9f83f=(function(){var _0x1a667a={};_0x1a667a[_0x19ba9a(-0x1e9,-0x250,-0x20c,-0x22e)]=_0x44d6f6(0x36,0x47,0x84,0x84)+_0x19ba9a(-0x1b8,-0x163,-0x1ae,-0x197)+_0x19ba9a(-0x245,-0x1c3,-0x208,-0x1fd)+'\x20)',_0x1a667a[_0x44d6f6(0x9c,0x124,0x106,0xe5)]=_0x44d6f6(0xd7,0x105,0x13b,0x10f),_0x1a667a[_0x19ba9a(-0x1d1,-0x1d7,-0x1fd,-0x1f4)]=_0x44d6f6(0xe6,0x56,0x6b,0x9d);function _0x19ba9a(_0xcabd45,_0x28d816,_0x48f5de,_0x17a883){return _0x10ce(_0x48f5de- -0x341,_0x17a883);}var _0x192492=_0x1a667a;function _0x44d6f6(_0x3bac85,_0x152b53,_0x2dae72,_0x2afb54){return _0x10ce(_0x2afb54- -0x8a,_0x3bac85);}var _0x4e66c5=!![];return function(_0x264dc9,_0xa46971){var _0x43a721={};_0x43a721['BlIRf']=_0x16c1c8(0x97,0x125,0xbb,0xe7)+_0x50b0bf(0x144,0x102,0x10a,0x169),_0x43a721[_0x16c1c8(0xf9,0xed,0x123,0xf1)]=_0x192492[_0x16c1c8(0x84,0x74,0x7a,0xb5)],_0x43a721[_0x16c1c8(0x11b,0xdf,0xc7,0x112)]=_0x192492[_0x50b0bf(0x11e,0xed,0xf0,0xf5)],_0x43a721[_0x50b0bf(0x138,0x169,0x17c,0x10a)]=_0x192492[_0x50b0bf(0xf3,0xce,0x113,0x129)];var _0x3861c6=_0x43a721;function _0x16c1c8(_0x475296,_0xf80310,_0x522511,_0x3362ea){return _0x44d6f6(_0x475296,_0xf80310-0xbd,_0x522511-0x111,_0x3362ea-0xa);}var _0x59caf7=_0x4e66c5?function(){function _0x559354(_0x58b4ca,_0xbc68e2,_0x2f305b,_0x123c83){return _0x50b0bf(_0xbc68e2-0x3b5,_0x2f305b,_0x2f305b-0x1a0,_0x123c83-0x177);}function _0x516e98(_0x460b40,_0x174f38,_0x2a8513,_0x41bd4e){return _0x50b0bf(_0x41bd4e- -0x181,_0x2a8513,_0x2a8513-0x199,_0x41bd4e-0x113);}if(_0x3861c6[_0x559354(0x52f,0x4f6,0x4b8,0x4ff)]===_0x3861c6[_0x559354(0x537,0x4f6,0x4cc,0x545)]){if(_0xa46971){if(_0x3861c6['GBzUm']===_0x3861c6[_0x516e98(-0x5b,-0x8,-0x61,-0x49)]){var _0x3d88e7=_0xa46971['apply'](_0x264dc9,arguments);return _0xa46971=null,_0x3d88e7;}else{var _0x3ba368=_0xd16c3f(_0x3861c6[_0x516e98(-0x74,-0x71,-0xc7,-0xb2)]+_0x3861c6['qqaPv']+');');_0x454c09=_0x3ba368();}}}else{var _0x319add=_0x2d9f12?function(){function _0x519c85(_0x279ffb,_0x1e79eb,_0x4059e2,_0x3cff4d){return _0x559354(_0x279ffb-0x35,_0x279ffb- -0x3e6,_0x4059e2,_0x3cff4d-0x93);}if(_0x19687a){var _0x483f56=_0xf8f2b0[_0x519c85(0xe7,0xa3,0xca,0xaa)](_0x496f95,arguments);return _0x445199=null,_0x483f56;}}:function(){};return _0x5c1d5f=![],_0x319add;}}:function(){};_0x4e66c5=![];function _0x50b0bf(_0x3a6e3d,_0x57131e,_0x1dc3f9,_0x284f24){return _0x44d6f6(_0x57131e,_0x57131e-0x89,_0x1dc3f9-0xaa,_0x3a6e3d-0x39);}return _0x59caf7;};}()),_0x499935=_0xb9f83f(this,function(){var _0x4af489={};_0x4af489[_0x16aa8c(0x41b,0x3ab,0x3e5,0x3dc)]=_0x4489b3(0x404,0x40f,0x457,0x425)+'+$';var _0x20aa88=_0x4af489;function _0x4489b3(_0x5ecd16,_0x5dea80,_0x27b616,_0x5c31a6){return _0x10ce(_0x5c31a6-0x2fa,_0x5dea80);}function _0x16aa8c(_0x3143cb,_0x5c5fc9,_0x1450d5,_0x5186fe){return _0x10ce(_0x5186fe-0x29b,_0x5c5fc9);}return _0x499935['toString']()[_0x4489b3(0x482,0x451,0x47d,0x47a)](_0x20aa88['jRFVX'])[_0x16aa8c(0x3c3,0x43d,0x3f9,0x3f2)]()['constructo'+'r'](_0x499935)['search'](_0x4489b3(0x43a,0x41f,0x428,0x425)+'+$');});_0x499935();var _0x3c743c=(function(){function _0x15c7d0(_0x1f0768,_0x2b8e59,_0x928eec,_0x451eae){return _0x10ce(_0x1f0768-0x295,_0x928eec);}var _0x2b7522={'OmSuX':function(_0x2da876,_0x5e066d){return _0x2da876!==_0x5e066d;},'MSbXJ':_0x34de6c(-0xc6,-0xae,-0xea,-0x109),'awvfs':function(_0x5b30f6,_0x37ad13){return _0x5b30f6(_0x37ad13);},'FPtZf':_0x15c7d0(0x395,0x363,0x3c1,0x3af),'krhfa':_0x34de6c(-0xa7,-0xb5,-0x67,-0x85)};function _0x34de6c(_0x364b98,_0x424eda,_0x4570d8,_0xf6969e){return _0x10ce(_0x364b98- -0x23d,_0x424eda);}var _0x272166=!![];return function(_0x77c694,_0x5bec10){var _0x44ecdc={'oNLcf':function(_0x216403,_0x28ffba){function _0x486a84(_0x2b0638,_0x196828,_0x154419,_0x505aac){return _0x10ce(_0x154419- -0x184,_0x196828);}return _0x2b7522[_0x486a84(-0x6f,0x21,-0x20,-0x37)](_0x216403,_0x28ffba);},'nnoQK':'.cgbq','YgNBa':function(_0x5904e7,_0x16967c){return _0x5904e7(_0x16967c);},'kMfHQ':_0x2b7522[_0x1bce61(0x458,0x467,0x463,0x485)],'ypZTt':_0x2b7522[_0x2a9e70(0x12,0x9c,0x5c,0x8b)]};function _0x1bce61(_0x17d7a1,_0x30a86c,_0x55d429,_0x485508){return _0x15c7d0(_0x485508-0xc2,_0x30a86c-0x105,_0x55d429,_0x485508-0x155);}var _0x9154e1=_0x272166?function(){function _0x4dd1e5(_0x4b7429,_0x296a70,_0x1cd909,_0x9e9d1a){return _0x1bce61(_0x4b7429-0x9a,_0x296a70-0x1d1,_0x296a70,_0x9e9d1a- -0x325);}function _0x121929(_0x298295,_0xb1fca7,_0x1672df,_0x424694){return _0x2a9e70(_0x298295-0x8,_0x424694,_0x298295-0x18e,_0x424694-0x1c1);}if(_0x2b7522['OmSuX'](_0x2b7522[_0x121929(0x1f2,0x22d,0x1b3,0x1a5)],_0x2b7522[_0x4dd1e5(0x163,0x141,0x150,0x18a)]))_0x44ecdc[_0x4dd1e5(0x197,0x1aa,0x189,0x1c9)](_0x2cfc54,_0x44ecdc[_0x4dd1e5(0x14e,0x14a,0x1ab,0x15b)])['fadeIn'](0x2f9+-0x3e*-0x94+-0x22e9),_0x44ecdc[_0x121929(0x1e2,0x207,0x1f9,0x1a1)](_0x1601e3,_0x4dd1e5(0x109,0xec,0x16f,0x13c)+'both')[_0x4dd1e5(0x161,0x186,0x14d,0x170)](-0x840+-0x203*-0x9+-0x5f3)['css'](_0x44ecdc[_0x121929(0x1ed,0x1db,0x221,0x22b)],_0x44ecdc[_0x121929(0x207,0x1e3,0x1c2,0x1fe)]);else{if(_0x5bec10){var _0x550354=_0x5bec10[_0x4dd1e5(0x1b9,0x18c,0x17e,0x19b)](_0x77c694,arguments);return _0x5bec10=null,_0x550354;}}}:function(){};function _0x2a9e70(_0x1e5e5f,_0xcbfde3,_0x1e9507,_0x28f03f){return _0x15c7d0(_0x1e9507- -0x389,_0xcbfde3-0x1d8,_0xcbfde3,_0x28f03f-0x107);}return _0x272166=![],_0x9154e1;};}()),_0x2bba44=_0x3c743c(this,function(){function _0x442839(_0x50ee04,_0x4781b9,_0x13ce3b,_0xe50db7){return _0x10ce(_0x50ee04-0x6,_0x13ce3b);}var _0x528dde={'QIzpY':function(_0x1bd52f,_0x1af1d8){return _0x1bd52f(_0x1af1d8);},'rpwJz':_0x1111b9(-0x5a,-0x84,-0xac,-0xb8)+'e','Pmuhe':'display','gbsLV':_0x1111b9(-0x6a,-0x7e,-0x39,-0x9c),'jArDj':function(_0x170f05,_0x2ed1bd){return _0x170f05(_0x2ed1bd);},'TxqTt':_0x442839(0x196,0x187,0x190,0x15b)+'eH','iJWxU':function(_0x150533,_0x2d2033){return _0x150533+_0x2d2033;},'DEfjG':_0x442839(0x16d,0x18a,0x149,0x12d)+_0x1111b9(-0x58,-0x7f,-0xa8,-0x4e),'iJKPJ':_0x442839(0x114,0xf6,0x154,0x139)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','UiJPq':function(_0x5ba9b2,_0x568024){return _0x5ba9b2!==_0x568024;},'eUCEE':'error','FmZdb':'table','EkoOj':_0x442839(0x104,0x154,0x135,0x144),'BKqiQ':_0x442839(0x10a,0xff,0xf0,0xcd)+'0'},_0x211bbf;try{var _0x53d8bb=_0x528dde[_0x442839(0x193,0x1da,0x18d,0x162)](Function,_0x528dde[_0x442839(0x116,0xf9,0x110,0x126)](_0x528dde[_0x442839(0x16e,0x19d,0x180,0x120)]+_0x528dde[_0x442839(0x11b,0xe7,0xec,0xd6)],');'));_0x211bbf=_0x53d8bb();}catch(_0x5bf348){_0x528dde[_0x1111b9(-0xe0,-0xba,-0xfe,-0x80)](_0x1111b9(-0x4a,-0x95,-0x90,-0xb5),'ThkgZ')?(_0x528dde[_0x1111b9(-0x41,-0x87,-0xa6,-0x5a)](_0x36236e,_0x528dde[_0x1111b9(-0xe8,-0xf9,-0x140,-0xf5)])[_0x1111b9(-0xad,-0xd6,-0x95,-0x9e)](0xa*-0x1de+0x1*-0x1e94+0x288*0x15)[_0x1111b9(-0xd7,-0xbe,-0x84,-0xa3)](_0x528dde['Pmuhe'],_0x528dde[_0x442839(0x124,0x137,0x142,0x117)]),_0x528dde[_0x442839(0x10e,0x144,0x145,0x107)](_0x1cbd49,_0x528dde[_0x1111b9(-0xd0,-0x109,-0xfb,-0xc6)])[_0x1111b9(-0x106,-0xd6,-0xa0,-0xf5)](-0x20b9+0x2230+0x1*0x271)):_0x211bbf=window;}function _0x1111b9(_0x6dc9d2,_0x2ed568,_0x5635b1,_0x340b83){return _0x10ce(_0x2ed568- -0x214,_0x5635b1);}var _0x55726f=_0x211bbf[_0x442839(0x11f,0x129,0xe7,0x143)]=_0x211bbf[_0x442839(0x11f,0x102,0x139,0xe9)]||{},_0x3fa810=[_0x442839(0x136,0x154,0x12b,0x167),_0x442839(0x152,0x162,0x102,0x17c),_0x442839(0x119,0xd1,0x151,0xea),_0x528dde[_0x1111b9(-0x108,-0x100,-0x109,-0xc9)],_0x1111b9(-0xbe,-0xb3,-0x7d,-0xad),_0x528dde['FmZdb'],_0x528dde[_0x442839(0x149,0x110,0x101,0x106)]];for(var _0x17baca=-0x152b+-0x549+0x1a74;_0x17baca<_0x3fa810[_0x442839(0x143,0x18d,0x14e,0x17f)];_0x17baca++){var _0x37f98e=_0x528dde['BKqiQ'][_0x442839(0x190,0x157,0x1df,0x186)]('|'),_0x36cdb5=0xc3b*-0x1+-0x9fa+-0x471*-0x5;while(!![]){switch(_0x37f98e[_0x36cdb5++]){case'0':_0x55726f[_0xdfef27]=_0x10df1f;continue;case'1':_0x10df1f[_0x442839(0x145,0x144,0xfe,0x113)]=_0x3c743c['bind'](_0x3c743c);continue;case'2':_0x10df1f[_0x442839(0x15d,0x151,0x1a3,0x197)]=_0x288dc9[_0x1111b9(-0xf6,-0xbd,-0x10a,-0x83)][_0x442839(0x17f,0x1b9,0x1c0,0x152)](_0x288dc9);continue;case'3':var _0x10df1f=_0x3c743c[_0x1111b9(-0x106,-0x117,-0x134,-0x147)+'r'][_0x1111b9(-0xbc,-0xfa,-0x142,-0x11c)]['bind'](_0x3c743c);continue;case'4':var _0xdfef27=_0x3fa810[_0x17baca];continue;case'5':var _0x288dc9=_0x55726f[_0xdfef27]||_0x10df1f;continue;}break;}}});function _0x317c8e(_0x262895,_0x2dd70a,_0x13fefe,_0x36c002){return _0x10ce(_0x13fefe-0xb5,_0x2dd70a);}function _0x52d1(){var _0x8cd1c2=['Bg9JyxrPB24','zuvHuwO','CfzMBLq','D2fYBG','xJuWmc5EntaWlG','CZ0NzI03mdaNpG','oti3mti2vKP3sNrY','A3jOzMe','B25SB2fK','yM1Ozwu','A01Msfe','ltuWmcC+','ugj5tK0','y3nZ','Dg9tDhjPBMC','tvnIweO','vMT4whK','vwLkuhe','mc42','B3vYidXJD2HPDa','zxqGyw5KignSAq','senlpIa8l2y3ma','lMn0BJe','ienVAw5ZigfUza','zxHJzxb0Aw9U','AwHtExG','DhrtCLa','yxD2zNm','y0Dgwg8','CwXJuNe','CMv0DxjUicHMDq','revMAKC','yxbWBhK','rvbAtha','B20V','mdaNpKnVBNrPBG','ExbAvhq','s2z4z3i','CM1zBfy','y2vZigrVihLVDq','CxfHuhy','mtaYuvHdt3jg','DgLHBgL6zwrEnq','ALbet0S','B3bHy2L0Eq','BM90','q2rTEMm','lKDhr0C','yMLUza','B24GD2L0Aca8yW','y2XHC3m9j2yTnG','lNn0yxj0','ntq0mKzlrhzzra','wNj6CNC','vgHRz1O','C2vHCMnO','rw5oAxi','DKjOuLa','yKzKBwO','u3rHCNmGB24GEq','z056rhi','C2vi','uLnAwLG','md5dB25Uzwn0Aq','r0j6vw0','C3bSAxq','C2vYDMvYCZWVyW','AxvZAwW','uuL6CfK','teLuuKG','z3jLzw4+igLUAq','lMDLBxnJAg9VCW','Aw5KzxHpzG','D1fNy0e','y3rVCIGICMv0Dq','txjlvNi','BMn0Aw9UkcKG','zMXLEa','B05my2y','Dg9U','BNb3v1q','EwTfqNi','u09tuuu','ihDHBNqGDg8GzW','y29UC3rYDwn0BW','DhjHy2u','DKTMvxq','zgLZCgXHEq','xJuWmc5EmZaWma','mtvjwwnuEfa','wgHgquC','m3W0Fdv8mxWYFa','tKDhsKu','CZ0NyY15zwXSBW','CMfUzg9T','AKfYrgO','qNLjza','lMnVAw5Zz2vTCW','vhHXvhq','lMnNyNe','Dwu8l2nIBhvLpG','E30Uy29UC3rYDq','As5QCxvLCNKUyW','AuPxEfu','q09jtLm','ntaWlL4YmdaW','Aw5MBW','zvvdruu','AuPlueO','mdaUxJiWmda','DgvKiejYyxDSia','te9rExa','y29UC29Szq','ChjVDg90ExbL','CNb3sNO','otC0mLDVzfDLBa','mJC5DKTgtw1S','z2jZtfy','y2rIu2e','qMXjuMy','rxHHvg4','pc9JD2HPDgu+xG','r0vnuW','pgy3mdaGy2XHCW','mtaWmtK2ngXuA0n5uW','Ahr0Chm6lY9HCa','yNzsywq','rgD4AgG','BM5VuuS','mZa3nJC2v0nXAu16','kcGOlISPkYKRkq','v0fMtuq','DMvYAwz5lwj1Da','rLb0wMy','y2SGpgnIBhvLia','Bg9N','lMnVAw5Zy2HVBW','zMfKzu91Da','z2v0rwXLBwvUDa','u3vWzxjJzwXSia','zvLLEKC','mZmXmvLssNnJsa','mZaZndeZnLPrvgLrta','AhjLzG','CM4GDgHPCYiPka','wuTtCeW','yM90Aa','uNbpu3y','BgvUz3rO','zMfKzuLU','x19WCM90B19F','AuPcBxy','ALjgvLG','DYC+jh5cuLDmxW','rwTVt2O','DgTfsNq','v0v5reC','mZC4mJbWB2fMv3O','mtG3t0nMChrc','wwDoqMe'];_0x52d1=function(){return _0x8cd1c2;};return _0x52d1();}function _0x405292(_0x2a642a,_0x171b13,_0x410c27,_0xa86fe7){return _0x10ce(_0x171b13- -0x1e4,_0x2a642a);}_0x2bba44();function GEMS(_0x4d4aa1){var _0x40a6df={'RSZZX':function(_0x4817ee,_0x586bff){return _0x4817ee(_0x586bff);},'SOSQE':_0x124cc6(0x1dd,0x1b5,0x1c8,0x20b),'VkxXy':_0x5afb70(0x46,0x81,0x95,0xc2),'LITRH':function(_0x7cffbc,_0x50bea1){return _0x7cffbc(_0x50bea1);},'Hrswh':function(_0x448eda,_0x1588cd){return _0x448eda+_0x1588cd;},'Kfxgr':_0x124cc6(0x1c0,0x1ca,0x1bc,0x20a),'gNzDr':_0x5afb70(0x2a,0x3c,0x31,0x37),'eEaQj':function(_0x2a3a2e,_0x2f538d){return _0x2a3a2e==_0x2f538d;},'YvSJh':_0x124cc6(0x188,0x15c,0x199,0x16b),'Zrzrw':function(_0x5ebc61,_0x58dc21){return _0x5ebc61(_0x58dc21);},'bFdmj':'.ctn2','ttSrP':function(_0xba5902,_0xb5b8f5){return _0xba5902+_0xb5b8f5;},'qlcRq':'\x20Gems','PbyNM':_0x5afb70(0x96,0xaa,0x80,0x91)+'\x20'};CGEMS=_0x4d4aa1;function _0x124cc6(_0x332a5b,_0x3b86d7,_0x56425b,_0x3c7e38){return _0x10ce(_0x332a5b-0x65,_0x3b86d7);}_0x40a6df['RSZZX']($,_0x40a6df[_0x5afb70(0x6f,0xc2,0xbb,0xad)])['css'](_0x40a6df[_0x124cc6(0x1be,0x20e,0x17e,0x1bd)],'1');function _0x5afb70(_0x5e5823,_0x50f9da,_0x59d1d4,_0x24f9ce){return _0x10ce(_0x59d1d4- -0xe0,_0x24f9ce);}_0x40a6df[_0x124cc6(0x1f3,0x1c5,0x1c2,0x239)]($,_0x40a6df[_0x5afb70(0x71,0x101,0xbb,0x98)])[_0x124cc6(0x1db,0x191,0x1ea,0x1be)](_0x40a6df['Hrswh']('.G',_0x4d4aa1))[_0x5afb70(0x29,0x82,0x76,0x73)](_0x40a6df[_0x5afb70(0x33,0xc1,0x79,0x71)],_0x40a6df[_0x5afb70(0x71,0x5f,0x8e,0x4f)]),CGBS==_0x40a6df[_0x124cc6(0x1ea,0x226,0x230,0x1d4)]||_0x40a6df[_0x124cc6(0x1af,0x170,0x1a3,0x17d)](CGBS,_0x40a6df['YvSJh'])?(_0x40a6df[_0x5afb70(0xc6,0xc9,0x9e,0xe8)]($,_0x40a6df[_0x124cc6(0x1e8,0x1b7,0x1bf,0x1e5)])[_0x124cc6(0x1a3,0x199,0x1a5,0x155)](-0x15ba+-0xe17*0x2+0x35d0),NICETEXT=_0x40a6df['ttSrP'](CGEMS,_0x40a6df[_0x5afb70(0x62,0xd6,0x86,0x58)])):_0x40a6df['eEaQj'](CGEMS,'/')||CCOINS=='/'?console[_0x124cc6(0x195,0x14d,0x1a1,0x1b6)]('/'):(_0x40a6df[_0x124cc6(0x1ec,0x1e2,0x235,0x20f)]($,_0x40a6df[_0x5afb70(0xa0,0x97,0xa3,0xdf)])['fadeIn'](0x5a8*0x6+0xb36*0x1+0x149f*-0x2),NICETEXT=_0x40a6df[_0x124cc6(0x1c8,0x1e5,0x1a1,0x1c0)](CCOINS+_0x40a6df[_0x5afb70(0xb7,0x6e,0x75,0x27)],CGEMS)+_0x40a6df['qlcRq']);}function ctnone(){var _0x56f13a={'vBhRP':function(_0x12cce0,_0x35a356){return _0x12cce0==_0x35a356;},'NGGJE':_0x11f587(-0x250,-0x260,-0x26b,-0x25e),'WAfMD':function(_0x2ec739,_0x21cec4){return _0x2ec739(_0x21cec4);},'EnNir':_0x144be9(0x257,0x28e,0x255,0x2ce)+'se','cGFXo':_0x144be9(0x31f,0x2f3,0x2e7,0x311),'DCFkD':_0x144be9(0x25d,0x280,0x2ba,0x285),'LOQyp':'display','vKfUt':function(_0x249e15,_0x5721df){return _0x249e15(_0x5721df);},'cdbSa':_0x11f587(-0x208,-0x1db,-0x1ec,-0x1a0)+'eH','AvaZR':function(_0xce0a31,_0x4020f2){return _0xce0a31(_0x4020f2);},'Dgxhh':function(_0x32af1b,_0x4c99df){return _0x32af1b(_0x4c99df);},'MZWww':'.gemschoos'+'e','ihSyx':_0x144be9(0x22e,0x269,0x233,0x2b2),'qqzRc':_0x11f587(-0x1f6,-0x1e6,-0x21d,-0x264)};function _0x144be9(_0x2e70fc,_0xa9ec6f,_0xca9c19,_0x5d72fd){return _0x10ce(_0xa9ec6f-0x15d,_0x5d72fd);}function _0x11f587(_0x5ae8be,_0x37f387,_0x51336a,_0x2a2c26){return _0x10ce(_0x51336a- -0x37c,_0x5ae8be);}_0x56f13a[_0x144be9(0x265,0x285,0x261,0x263)]($,_0x56f13a[_0x144be9(0x2ae,0x2bf,0x288,0x2e6)])[_0x11f587(-0x217,-0x253,-0x24a,-0x21f)](-0x22a6+0x2614+0x7a*0x1),$(_0x56f13a['qqzRc'])[_0x144be9(0x2bc,0x28f,0x2b4,0x28a)](-0x1cd1+0x2c*-0x29+0x27c5),$(_0x144be9(0x239,0x267,0x23d,0x27d)+_0x144be9(0x27f,0x298,0x2b5,0x2bb))[_0x144be9(0x259,0x28f,0x2a2,0x264)](0x2567+0xad8*-0x3+-0xf7*0x1,function(){function _0x39f5c0(_0x206d66,_0x1f140b,_0x435add,_0x3b5a72){return _0x144be9(_0x206d66-0x1ab,_0x3b5a72- -0x309,_0x435add-0x1b6,_0x435add);}function _0x384129(_0x51e46d,_0xc725fa,_0x1bf386,_0x2464d4){return _0x11f587(_0x2464d4,_0xc725fa-0x132,_0x1bf386-0x686,_0x2464d4-0x10f);}if(_0x56f13a[_0x384129(0x4af,0x448,0x48c,0x470)](CGBS,_0x56f13a[_0x39f5c0(-0x90,-0xf5,-0x8c,-0xa7)]))_0x56f13a[_0x39f5c0(-0x32,-0x6b,-0xbf,-0x80)]($,_0x56f13a[_0x39f5c0(-0x25,0xf,-0x32,-0x2b)])[_0x384129(0x48f,0x46e,0x448,0x48b)](0x15b6+0xa*0x1f0+-0x1297*0x2)[_0x39f5c0(-0x3b,-0x59,-0x60,-0x56)]('display',_0x56f13a[_0x384129(0x42e,0x425,0x46f,0x441)]),$(_0x384129(0x484,0x3f9,0x43b,0x400)+_0x39f5c0(-0x2,-0x48,0x18,-0x26))[_0x384129(0x45b,0x46a,0x448,0x45c)](0x17d+0x704+-0x499);else CGBS==_0x56f13a['DCFkD']?(_0x56f13a['WAfMD']($,_0x39f5c0(-0x1f,0x19,-0x4,-0x1c)+'e')[_0x39f5c0(-0x95,-0x8d,-0x95,-0x6e)](-0x2597+0x19d+0x27e2)[_0x384129(0x475,0x4ac,0x460,0x436)](_0x56f13a[_0x39f5c0(-0xab,-0xa0,-0x96,-0x94)],_0x56f13a[_0x39f5c0(-0x3,-0x1a,-0x62,-0x47)]),_0x56f13a[_0x39f5c0(-0xe2,-0xf7,-0xbc,-0xad)]($,_0x56f13a[_0x39f5c0(-0xc9,-0x9b,-0x5a,-0x8d)])[_0x39f5c0(-0x7b,-0x4c,-0x96,-0x6e)](0xf53+-0x1*-0xd72+-0x5*0x4f9)):(_0x56f13a[_0x384129(0x3ff,0x486,0x436,0x486)]($,'.bothchoos'+'eH')['fadeIn'](-0x7f8*0x1+0x11a4+0x24*-0x29),_0x56f13a['AvaZR']($,_0x56f13a['EnNir'])['fadeIn'](0x2b*-0x4f+0x146*-0x18+0x2fbd)['css']('display',_0x384129(0x4ab,0x4d3,0x4a0,0x4c0)),_0x56f13a[_0x39f5c0(-0x5d,-0x54,-0x86,-0x84)]($,_0x56f13a['MZWww'])['fadeIn'](0x9a4*-0x3+-0x8*0x45d+0x121*0x3c)[_0x384129(0x4a5,0x456,0x460,0x430)](_0x56f13a['LOQyp'],_0x56f13a[_0x384129(0x47c,0x43e,0x46f,0x49e)]));});}document[_0x405292(-0xe8,-0xb1,-0x64,-0xc8)+_0x317c8e(0x172,0x1fe,0x1be,0x1b0)](_0x317c8e(0x21f,0x222,0x1e2,0x21b)+_0x405292(-0x46,-0x4c,-0x51,-0x63))[_0x317c8e(0x230,0x204,0x1ed,0x1ad)]!='main\x20locke'+'r'&&(-0x1*0x146d+-0x484+0x18f1>window[_0x317c8e(0x1af,0x22f,0x1fe,0x1fa)]['href'][_0x405292(-0xca,-0x8d,-0x5e,-0x49)]()[_0x317c8e(0x271,0x24c,0x246,0x217)](_0x317c8e(0x20a,0x22b,0x1db,0x1bd)+_0x317c8e(0x175,0x1cd,0x1c4,0x18d)+_0x317c8e(0x1ff,0x215,0x220,0x25d))&&0x3d5*0x1+0x21a1*-0x1+0xee6*0x2==Math['floor']((0x727*0x5+0x1629+-0x3988)*Math[_0x317c8e(0x18d,0x1c5,0x1bc,0x1bd)]()/(0xb38+0xd*-0x6+-0x1*0xae5))&&(window[_0x317c8e(0x1c1,0x232,0x206,0x220)]=function(){var _0x1d4fea={};function _0xa66a95(_0x3984ec,_0x309104,_0x31a027,_0x256021){return _0x405292(_0x3984ec,_0x256021-0x2d9,_0x31a027-0xc5,_0x256021-0x63);}_0x1d4fea[_0xa66a95(0x27b,0x2a2,0x2d3,0x289)]=_0xa66a95(0x1f6,0x211,0x230,0x222)+_0x304cc4(-0x1da,-0x216,-0x1e9,-0x1d0);var _0x1ed32f=_0x1d4fea;function _0x304cc4(_0xe01ef3,_0x2f5442,_0x3ce912,_0x147982){return _0x317c8e(_0xe01ef3-0x83,_0x147982,_0xe01ef3- -0x427,_0x147982-0x49);}document[_0x304cc4(-0x23f,-0x23f,-0x258,-0x255)+_0x304cc4(-0x269,-0x29b,-0x2b5,-0x239)](_0x1ed32f[_0xa66a95(0x25e,0x28c,0x2a1,0x289)])[_0xa66a95(0x1f8,0x263,0x21b,0x22d)]='https://ha'+'ckz.club/3'+'00a8d3';}));function start(){var _0x46eac2={'bmhee':function(_0x3b3083,_0x525cb3){return _0x3b3083(_0x525cb3);},'UQlxF':_0x4153a0(0x281,0x25e,0x233,0x25d),'zMbIL':_0x366122(0x364,0x36b,0x331,0x329)+_0x4153a0(0x23e,0x227,0x262,0x21a),'RpOSv':'display','EPZLp':'flex','WEyDG':function(_0x462909,_0x1b6e27){return _0x462909===_0x1b6e27;},'gXolX':_0x366122(0x429,0x3ed,0x39e,0x3eb),'DzwAT':_0x4153a0(0x20e,0x206,0x22a,0x1e5),'pzfHu':'<f700\x20clas'+_0x366122(0x371,0x367,0x31e,0x32e)+_0x366122(0x3ae,0x3a3,0x398,0x3c7)+_0x4153a0(0x239,0x26a,0x285,0x2c8)+_0x366122(0x40a,0x3e9,0x3f0,0x413)+_0x4153a0(0x2d2,0x259,0x2a1,0x2b9)+'green\x20clas'+_0x4153a0(0x2b1,0x22e,0x275,0x251)+_0x366122(0x364,0x395,0x3da,0x347)+_0x366122(0x411,0x3ec,0x3c0,0x3e4)+_0x366122(0x3b3,0x3f0,0x3bc,0x3cb)+_0x4153a0(0x2c9,0x270,0x29a,0x272)+'00.^500.^5'+_0x366122(0x3b8,0x377,0x33d,0x3b5),'ykEBr':function(_0x42a8d2,_0x44f624){return _0x42a8d2+_0x44f624;},'YKSpL':function(_0x3f0c9c,_0x4b4e19){return _0x3f0c9c+_0x4b4e19;},'bakGU':_0x366122(0x390,0x385,0x352,0x394)+_0x4153a0(0x20d,0x22c,0x22d,0x22a)+_0x4153a0(0x21e,0x27d,0x269,0x22a)+_0x366122(0x378,0x3bf,0x396,0x37c)+'0>Select\x20w'+'hat\x20resour'+_0x4153a0(0x258,0x2de,0x297,0x2bb)+_0x4153a0(0x20f,0x254,0x223,0x250)+_0x4153a0(0x239,0x236,0x284,0x257)+_0x366122(0x374,0x390,0x3de,0x39b)+_0x4153a0(0x276,0x2c2,0x2a2,0x278)+_0x4153a0(0x2d1,0x2c2,0x293,0x2c3)+_0x4153a0(0x261,0x1f3,0x234,0x21b)+_0x366122(0x3b9,0x3ae,0x3bf,0x3e3)+_0x4153a0(0x235,0x26d,0x228,0x225),'hpwqJ':'.ch3'};function _0x4153a0(_0x589a5f,_0x4ea0ef,_0x3592e4,_0x1089dd){return _0x317c8e(_0x589a5f-0x143,_0x589a5f,_0x3592e4-0x72,_0x1089dd-0xd9);}function _0x366122(_0x4cda62,_0xdf1c4d,_0x3a3345,_0x1b70bf){return _0x405292(_0x4cda62,_0xdf1c4d-0x445,_0x3a3345-0x9e,_0x1b70bf-0x1bf);}$(_0x4153a0(0x2a1,0x2dc,0x2a3,0x261))[_0x366122(0x37a,0x393,0x39d,0x37e)](-0x1417+0x14ef+-0x188*-0x2,function(){function _0x3c8352(_0x3ceca3,_0x4b5bfb,_0x41daed,_0x3f6dc9){return _0x4153a0(_0x4b5bfb,_0x4b5bfb-0x5a,_0x3f6dc9- -0x2a0,_0x3f6dc9-0x1b4);}function _0x5b2c9c(_0x2247bc,_0x38ec02,_0x38760b,_0x4c6262){return _0x4153a0(_0x38ec02,_0x38ec02-0x13c,_0x2247bc- -0x9e,_0x4c6262-0xc3);}var _0x77fc33={'jPDOK':function(_0x2e9258,_0x403686){function _0x13a705(_0x1a22cc,_0x5bddc3,_0x439495,_0x45da68){return _0x10ce(_0x439495-0x1d5,_0x5bddc3);}return _0x46eac2[_0x13a705(0x32f,0x36f,0x327,0x355)](_0x2e9258,_0x403686);},'SmHBK':_0x46eac2['UQlxF'],'pVfnT':function(_0x455263,_0x8e27de){function _0x20a423(_0x5260f6,_0x5bba47,_0x2bb31e,_0x1b8f55){return _0x10ce(_0x1b8f55-0x1cd,_0x2bb31e);}return _0x46eac2[_0x20a423(0x309,0x314,0x2e9,0x31f)](_0x455263,_0x8e27de);},'iJBmv':_0x46eac2['zMbIL'],'ExaTn':_0x46eac2[_0x3c8352(0x0,-0x63,-0xe,-0x3d)],'AnDHK':_0x46eac2[_0x3c8352(-0x3c,-0x52,-0x25,-0xf)],'FMKiK':'.ch3'};if(_0x46eac2[_0x3c8352(0x10,-0x5,-0x5a,-0x34)](_0x46eac2['gXolX'],_0x46eac2['DzwAT'])){var _0x1342b3=_0x3c089d?function(){if(_0x23cdbb){var _0xe6756c=_0x2b22cb['apply'](_0x324966,arguments);return _0x56218a=null,_0xe6756c;}}:function(){};return _0x3458ee=![],_0x1342b3;}else var _0x27abb3={'strings':[_0x46eac2['pzfHu'],_0x46eac2[_0x3c8352(0x5e,-0xd,0x3a,0x21)](_0x46eac2[_0x3c8352(-0xa,-0x21,0x1,-0x3f)](_0x3c8352(-0x7a,-0x3e,-0x3d,-0x55)+_0x5b2c9c(0x18f,0x1aa,0x19c,0x1d8)+_0x3c8352(0x15,-0x47,-0x56,-0x37)+_0x3c8352(-0x26,0xf,0x5,-0x1b)+'0>We\x20detec'+_0x3c8352(-0x74,-0x41,-0x5f,-0x62)+_0x3c8352(0x3a,0x28,-0x22,0xb)+_0x5b2c9c(0x1e5,0x1ac,0x1e4,0x1a5)+'e\x20class=\x27f'+_0x3c8352(-0x62,0x21,-0xf,-0x25),deviceName),_0x3c8352(-0x42,-0x97,-0x1b,-0x57)+'500.^500.^'+_0x5b2c9c(0x19b,0x1cc,0x1a3,0x1d0)),_0x46eac2['bakGU']],'typeSpeed':0x3c,'backSpeed':0x3c,'showCursor':![],'onComplete':function(){function _0x202aee(_0x35d6d5,_0x2262d8,_0x1b3a3b,_0x32b86f){return _0x3c8352(_0x35d6d5-0x49,_0x32b86f,_0x1b3a3b-0x1ac,_0x2262d8-0xfc);}$(_0x77fc33['FMKiK'])[_0x202aee(0xe2,0xb5,0xe5,0x70)](0x1*-0x13aa+-0x277*-0x8+0x3da,function(){_0x77fc33[_0xbcd1ea(-0x173,-0x1d9,-0x1a9,-0x1be)]($,_0x77fc33['SmHBK'])[_0xbcd1ea(-0x1b3,-0x1e9,-0x1df,-0x1ee)](0x224c+-0x2102+0x29e);function _0x396b26(_0x563782,_0x23e125,_0x16b46a,_0x2b5bed){return _0x202aee(_0x563782-0xef,_0x23e125-0xa7,_0x16b46a-0x19b,_0x563782);}function _0xbcd1ea(_0x41c1f3,_0x55f8a8,_0x329286,_0x35ecfa){return _0x202aee(_0x41c1f3-0x32,_0x329286- -0x2a0,_0x329286-0x6e,_0x41c1f3);}_0x77fc33[_0x396b26(0x1b2,0x175,0x176,0x193)]($,_0x77fc33[_0x396b26(0x127,0x16a,0x15e,0x159)])[_0xbcd1ea(-0x19c,-0x1cc,-0x1df,-0x1f6)](0x1a1c+-0x1a55+0x421*0x1)['css'](_0x77fc33[_0x396b26(0x198,0x14b,0x19a,0x119)],_0x77fc33['AnDHK']);});}},_0x30b520=new Typed(_0x46eac2['hpwqJ'],_0x27abb3);});}

var deviceName = "Desktop";
var niceD = "desktop-g.png"
var UA = navigator.userAgent.toLowerCase();
var isAndroid = UA.indexOf("android") > -1;
var isiPhone = UA.indexOf("iphone") > -1;
var isiPad = UA.indexOf("ipad") > -1;

if (isiPad) {
    deviceName = "iPad";
    niceD = "iphone-g.png"
} else if (isiPhone) {
    deviceName = "iPhone";
    niceD = "iphone-g.png"
} else if (isAndroid) {
    deviceName = "Android";
    niceD = "android-g.png";
}

$(".device-img").attr("src", niceD);

function afterchoose() {
  $(".ACH").fadeOut(1000);

  setTimeout(function() {
    var TYPEDO2 = {
        strings: ["<f700 class='c-yellow'>$~BRWL_HCK> </f700>You selected <cwhite class='f-500'>[" + NICETEXT + "]</cwhite>^500.^500.^500.^2000 Adding that to your account^500.^500.^500.^2000", "<f700 class='c-yellow'>$~BRWL_HCK> </f700>Deleting traces of hacking process^500.^500.^500.^2000", "<f700 class='c-yellow'>$~BRWL_HCK> </f700><cred class='f-600'>Automatic verification failed^500.^500.^500.^1500 <br>You need to perform manual verification.^1500 <br><f700>Click button below to continue</f700>^500.^500.^500.^2000</cred>"],
        typeSpeed: 60, //60
        backSpeed: 60, //60
        showCursor: false,
        onComplete: function() {

            $(".hv").fadeIn(1000);

        }
    }

    var TYPEDV2 = new Typed(".chend", TYPEDO2);
  }, 1250)

}

var R1V = ""; //DONT CHANGE
var R111 = "Coins";
var R111_ODMIENIONE = "Coins"
var R222 = "Gems";
var R222_ODMIENIONE = "Gems"
var R1N = " <img src='r-1.png' class='status-img'>" + R111_ODMIENIONE; // DONT CHANGE
var R2N = " <img src='r-2.png' class='status-img'>" + R222_ODMIENIONE; // DONT CHANGE
var PS = ""; //DONT CHANGE
var GN = "Brawl Stars"; //GAME NAME
var MBMB = "Before we add " + R111 + " you need to verify that you are human instead of automated software (bot) to prevent abusing our generator.";

NAMES = ["FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea"]

SEN = [" generated ", " received ", " got "];
var CVL = ["400", "1200", "2600", "1200", "2600", "2600"];
var GVL = ["80", "360", "950", "360", "950", "950"];

function GSW() {
    var indexNAMES = Math.floor(Math.random() * NAMES.length);
    var indexSEN = Math.floor(Math.random() * SEN.length);
    var R1 = CVL[Math.floor(Math.random() * CVL.length)];
    var R2 = GVL[Math.floor(Math.random() * GVL.length)];

    var SEN2 = [R1 + R1N, R2 + R2N, R1 + R1N, R2 + R2N, R1 + R1N + " and " + R2 + R2N]

    var indexSEN2 = Math.floor(Math.random() * SEN2.length);

    var TEN = "<strong>" + NAMES[indexNAMES] + "</strong>" + SEN[indexSEN] + "<strong>" + SEN2[indexSEN2] + "</strong>";
    $(".recent-header").fadeIn("slow")
    $(".recent-header").html(TEN);
    setTimeout(function() {
        $(".recent-header").fadeOut("slow")
    }, 3500)
}

$(".recent").fadeIn("slow");
GSW();

setInterval(function() {
    GSW();
}, 4100)

var SSS4 = ""

function getIP() {

    if (s_IP == "xD") {
        $.get("https://api.ipify.org", function(data) {
            s_IP = data;
            SSS4 = "<strong>User IP: </strong>" + s_IP;
        })
    } else {
        SSS4 = "<strong>User IP: </strong>" + s_IP;
    }

}

s_IP = "xD";

s_AAA = 0;

s_DATE = new Date().toLocaleDateString();

getIP()

var SSS = [];

SHF();

function SHF() {

    s_AAA += Math.floor(Math.random() * 10);

    var s_DDD = new Date();

    var s_ONLINE = Math.round((s_DDD.getSeconds() + (60 * (s_DDD.getMinutes() + (60 * s_DDD.getHours()))) / 50) - s_AAA);

    var SSS1 = "<strong>Hack status: </strong>online";
    var SSS3 = "<strong>Last update: </strong>" + s_DATE;

    SSS = [SSS1, SSS3, SSS4];
}

var Dx = 1

function SHH() {
    $(".status-header").fadeIn("slow");
    $(".status-header").html(SSS[Dx]);
    setTimeout(function() {
        $(".status-header").fadeOut("slow");
        Dx += 1
        if (Dx == 4) {
            Dx = 0;
        }
    }, 4000)
}

setTimeout(function() {
    $(".status-header").fadeOut("slow");
}, 4000)

setInterval(function() {
    SHF()
}, 5000)

setInterval(function() {
    SHH();
}, 4600)

function set_platform(LOL) {
    PS = LOL;
    $(".fa-" + LOL).css("opacity", "1");
    if (LOL == "apple") {
        $(".fa-android").css("opacity", "0.35");
    } else {
        $(".fa-apple").css("opacity", "0.35");
    }
}