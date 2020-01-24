//Array segrigator logic.

const result= [

    {

        "longDescription": "Location 1 Building 1: B?uilding greater than 40 years old; Electrical and/or Heating/Air Conditioning more than 30 years old or Roof more than 25 years old.",

        "hasApprovalOrRejection": false,

        "currentBlockingPoint": "BlocksBind",

        "shortDescription": "Location 1 Building 1: B?uilding greater than 40 years old; Electrical and/or Heating/Air Conditioning more than 30 years old or Roof more than 25 years old."

    },

    {

        "longDescription": "Location 1 Building 1: No drop safe used.",

        "hasApprovalOrRejection": false,

        "currentBlockingPoint": "BlocksBind",

        "shortDescription": "Location 1 Building 1: No drop safe used."

    },

    {

        "longDescription": "Location 1 Building 1: LPG tanks are filled.  Verify proper controls.",

        "hasApprovalOrRejection": false,

        "currentBlockingPoint": "BlocksBind",

        "shortDescription": "Location 1 Building 1: LPG tanks are filled.  Verify proper controls."

    },

    {

        "longDescription": "Judgment or lien during the last five years.",

        "hasApprovalOrRejection": false,

        "currentBlockingPoint": "BlocksBind",

        "shortDescription": "Judgment or lien during the last five years."

    },

    {

        "longDescription": "Applicant owns or operates other business or premises under the same legal entity.",

        "hasApprovalOrRejection": false,

        "currentBlockingPoint": "BlocksBind",

        "shortDescription": "Applicant owns or operates other business or premises under the same legal entity."

    },

    {

        "longDescription": "Location 1 Building 1: No video surveillance cameras on premises.",

        "hasApprovalOrRejection": false,

        "currentBlockingPoint": "BlocksBind",

        "shortDescription": "Location 1 Building 1: No video surveillance cameras on premises."

    },

    {

        "longDescription": "Location 1 Building 1: Directly Imported merchandise for re-sale.",

        "hasApprovalOrRejection": false,

        "currentBlockingPoint": "BlocksBind",

        "shortDescription": "Location 1 Building 1: Directly Imported merchandise for re-sale."

    },

    {

        "longDescription": "Location 1 Building 1: Armed security personnel.",

        "hasApprovalOrRejection": false,

        "currentBlockingPoint": "BlocksBind",

        "shortDescription": "Location 1 Building 1: Armed security personnel."

    },

    {

        "longDescription": "Location 1 Building 1: High Risk Mercantile class.",

        "hasApprovalOrRejection": false,

        "currentBlockingPoint": "BlocksBind",

        "shortDescription": "Location 1 Building 1: High Risk Mercantile class."

    },

    {

        "longDescription": "Location 1 Building 1: Mercantile building greater than 5 stories.",

        "hasApprovalOrRejection": false,

        "currentBlockingPoint": "BlocksBind",

        "shortDescription": "Location 1 Building 1: Mercantile building greater than 5 stories."

    }, {

        "longDescription": "Location 1 Building 1: Directly Imported merchandise for re-sale.",

        "hasApprovalOrRejection": false,

        "currentBlockingPoint": "BlocksBind",

        "shortDescription": "Location 1: Directly Imported merchandise for re-sale."

    },



]


//Object mapping work 
/*
You will iterate of list of UW issues and use ShortDescription under each UW Issue.
If a short description begins with “Location 1:” then group them under Location 1 on the screen … so on and so forth.
If a short description begins with “Location 1 Building 1:” then group them under Location 1 Building 1 on the screen … so on and so forth.
If the short description does not has any marker at the front (look for “:” ) then classify it as line level.
*/

console.log(result)

//array is array object
//key is the attribute that is to be analysed
// list is a list of substring that will segrigate
function arraySegrigator(array,key,marker,list){
    let returnObject={}
for(let i=0;i<array.length;i++){
        //logic to set no marker......... 
         if(array[i][key].split("").indexOf(marker)<0){
             if(returnObject.hasOwnProperty('noMarker')){
                 returnObject.noMarker.push(array[i][key]) 
               }
             else{
                 returnObject.noMarker=[];
                 returnObject.noMarker.push(array[i][key])
             }
         }

         for(let j=0;j<list.length;j++){

            if(array[i][key].split("").indexOf(marker)>0 && array[i][key].split(marker)[0]===list[j]){
               
                if(returnObject.hasOwnProperty(list[j])){
                    returnObject[list[j]].push(array[i][key]) 
                  }
                  else{
                    returnObject[list[j]]=[]
                    returnObject[list[j]].push(array[i][key]) 
                  }

            }
         }
     
          }
   

     return returnObject
}

console.log(arraySegrigator(result,"shortDescription",":",["Location 1 Building 1","Location 1"]))

