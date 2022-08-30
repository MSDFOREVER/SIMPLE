version=[//version one music------------------------------------------------------------------------,
    {name:"music",
    up_version:"07-07-2021",
    bug:"old songs",
    author:"elaiyaraja",
    type:["thenral","natchthiram"]},
    //version tow chess-------------------------------------------------------------------------------,
    {name:"chess",
        up_version:"17-08-2021",
        bug:"time",
        author:"anandh",
        type:["board","plastic"]},
    //version three cricket---------------------------------------------------------------------------,
    {name:"cricket games",
    up_version:"15-08-2021",
    bug:"evening matches",
    author:"dhoni",
    type:["tournment","T20","ipl","worldcup"]},
    //version four twitter-----------------------------------------------------------------------------,
    {name:"twitter",
    up_version:"18-06-2021",
    bug:"old news",
    author:"clam",
    type:["live","day","months",]}]
    // starting_version="01-01-2021"
    // arr=[]
    // count=0;
    // for( i of version){
    //     for(let j=version.indexOf(i)+1;j<version.length;j++)
    //     count++
    // }
     console.table(version)
     emt={}
     for(i in version){
        if(i in emt){
            emt[i]+=1
        }else{
            emt[i]=1
        }
     }
     console.log(emt)
     up_version=version.map(n=>n.up_version)
     console.log(version)
     bug_versio=version.map(n=>n.bug_version)
     console.log(bug_version)
     authoe_version=version.map(n=>n.author_version)
     console.log(author_version)
     type_version=version.map(n=>n.type_version)
     console.log(type_version)
    // total number of version-------------------------------------------------------------------------,
   // var numberofversion=version-1;
    //-------------------------------------------------------------------------------------------------,
    
