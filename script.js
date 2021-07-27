var inputcontent = document.getElementById("input-content");
inputcontent.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
     event.preventDefault();
     document.getElementById("add-item").click();
    }
  });

function Additem()
{
    var inputcontent1 = document.getElementById("input-content").value;
    if (inputcontent1 === "") 
    {
        swal("Input Can't  empty", "Please write something", "warning", {
            button: "Ok",
          });
        }
        else
        {
            var output = document.getElementById('outputdata');
            var ul = document.getElementById('todolist');
            var li = document.createElement('li');
    
            li.innerHTML = `${inputcontent1}`;
            var i = document.createElement('i');
            i.className = 'far fa-trash-alt mytrash';
            i.onclick=function(){
                removeItem();
            }
            li.append(i);
            ul.append(li);
            output.append(ul);
    
            document.getElementById('input-content').value = "";
            swal("Good Job !", "task added to list successfully", "success", {
                button: "Ok",
              });
        }
    }
    
    function removeItem(){
        var trash=document.getElementsByClassName('mytrash');
        for(var i=0;i<trash.length;i++){
            trash[i].onclick=function(){
                var div=this.parentElement;
                div.style.display="none";
                swal("Good Job !", "list deleted sucessfully", "success", {
                    button: "Ok",
                  });
            }
        }
    }