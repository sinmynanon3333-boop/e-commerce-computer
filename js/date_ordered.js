const date_text = document.querySelector("#date_thing");
const date=new Date();
 const simple_date=date.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
date_text.innerHTML=simple_date
