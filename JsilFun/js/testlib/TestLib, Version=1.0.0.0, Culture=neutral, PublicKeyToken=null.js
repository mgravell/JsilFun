/* Generated by JSIL v0.8.2 build 35719. See http://jsil.org/ for more information. */ 
'use strict';
var $asm01 = JSIL.DeclareAssembly("TestLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("TestLib");
/* class TestLib.MagicType */ 

(function MagicType$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm00.System.Int32)) ();
  };


  function MagicType__ctor () {
  }; 

  function MagicType_Add (x, y) {
    return (((x | 0) + (y | 0)) | 0);
  }; 

  function MagicType_Multiply (x, y) {
    return Math.imul(x, y);
  }; 

  JSIL.MakeType({
      BaseType: $asm00.TypeRef("System.Object"), 
      Name: "TestLib.MagicType", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      MagicType__ctor
    );

    $.Method({Static:true , Public:true }, "Add", 
      new JSIL.MethodSignature($.Int32, [$.Int32, $.Int32]), 
      MagicType_Add
    );

    $.Method({Static:false, Public:true }, "Multiply", 
      new JSIL.MethodSignature($.Int32, [$.Int32, $.Int32]), 
      MagicType_Multiply
    );


    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

