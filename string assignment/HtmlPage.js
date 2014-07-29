
function stringManupulation() 
          {
              var e = document.getElementById("selectOp");
              var operation = e.options[e.selectedIndex].value;
              var first ,second;

                 
               var one = new strings1(document.getElementById("string1").value);

                  
                 
                
                if(operation=="Concat")
                {
                  one.concatstrings(document.getElementById("string2").value);
                }
                if(operation=="Length")
                {
                   one.lengthCal();
                }
                if(operation=="Substring")
                {
                  one.getSubstring();
                }
                if(operation=="CharAt")
                {
                  one.getCharAt();                    
                }
                if(operation=="LastIndexOf")
                {
                  one.getLastIndexOf(document.getElementById("string2").value);
                }
                if(operation=="IndexOf")
                {
                    one.getIndexOf(document.getElementById("string2").value);
                }
                if(operation=="Replace")
                {
                  one.getReplace(document.getElementById("index1").value,document.getElementById("index2").value);
                }
              }
function strings1 (val)
{
  this.val=val;


  this.concatstrings=function(val2)
  {
   document.getElementById("output").innerHTML =this.val+val2;
   };
                
  this.lengthCal=function()
   {
    var i=0,len=0;
     while(this.val[i]!=null)
     {
      i++;
      len++;   
      } 
      document.getElementById("output").innerHTML = len;
   };

   this.getSubstring=function()
     {
      var i=0;
      var no1=0,no2=0;
      var sub="",
      no1 = document.getElementById("index1").value ,
      no2 =document.getElementById("index2").value ;
      //index 2  is the length of the substring
      while(i>-1 && i<no2 && this.val[i]!=null)
       {
        sub+=this.val[no1];
        i++;
        no1++;
       }
       if(sub.length==no2)
            document.getElementById("output").innerHTML = sub;
          else
            document.getElementById("output").innerHTML = "substring out of bounds";
    };

    this.getCharAt=function(i)
    {
      if(document.getElementById("string2").value<this.val.length)
      document.getElementById("output").innerHTML=this.val[document.getElementById("string2").value];
    else
      document.getElementById("output").innerHTML="-1";
    };

    this.getIndexOf=function(v)
    {
      var i=0,result="";
      while(this.val[i]!=null)
      {
        if(this.val[i]==v[0] && result=="")
        {
          result=i ;
        }
        i++;
      }
      if(result=="")
      document.getElementById("output").innerHTML=-1;
      else
        document.getElementById("output").innerHTML=result;
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
       if(result=="")
         document.getElementById("output").innerHTML=-1;
       else
        document.getElementById("output").innerHTML=result;
    };

    this.getReplace=function(replace,replacewith)
    {
      var i=0,j=0,newstring="";
      
      document.getElementById("output").innerHTML=newstring;
    };
}


var clkevnt=document.getElementById("button1");
      clkevnt.onclick = stringManupulation;


         

                

            