export function deleteId(id:any) {
  var Tab = JSON.parse(localStorage.getItem("key") || "[]");
  for (let i = 0; i < Tab.length; i++) {
    if (Tab[i].id == id) {
      Tab.splice(i, 1);
      break;
    }

  }
  localStorage.setItem("key", JSON.stringify(Tab));
    
}