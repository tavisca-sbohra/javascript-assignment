function strings1 (val)
{
  this.val=val;


  this.concatstrings=function(val2)
  {
   document.getElementById("output").value =this.val+val2;
   };
                
  this.lengthCal=function()
   {
    var i=0,len=0;
     while(this.val[i]!=null)
     {
      i++;
      len++;   
      } 
      document.getElementById("output").value = len;
   };

   this.getSubstring=function()
     {
      var i=0;
      var no1=0,no2=0;
      var sub="",
      no1 = document.getElementById("index1").value ,
      no2 =document.getElementById("index2").value ,
      i=no1;
      while(i<no2)
       {
        sub+=this.val[i];
        i++;
       }
     document.getElementById("output").value = sub;
    };

    this.getCharAt=function(i)
    {
      document.getElementById("output").value=this.val[document.getElementById("string2").value];
    };

    this.getIndexOf=function(v)
    {
      var i=0,result="";
      while(this.val[i]!=null)
      {
        if(this.val[i]==v[0])
        {
          result=result + i ;
          result+=" ";
          
        }
        i++;
      }
      document.getElementById("output").value=result;
    };

    this.getLastIndexOf=function(v)
    {
      var i=0,result="";
       while(this.val[i]!=null) 
       {
        if(this.val[i]==v[0])
        {
          result=i;
        }
        i++;
       }
       document.getElementById("output").value=result;
    };

    this.getReplace=function(replace,replacewith)
    {
      var i=0,newstring="";
      while(this.val[i]!=null)
      {
        if(this.val[i]==replace[0])
        {
          newstring+=replacewith[0];
        }
        else
          newstring+=this.val[i];
        i++;
      }
      document.getElementById("output").value=newstring;
    };
}



         

                

            