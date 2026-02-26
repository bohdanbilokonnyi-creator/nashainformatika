const tabs=document.querySelectorAll('.tab');
const contents=document.querySelectorAll('.tab-content');

tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{

    tabs.forEach(t=>t.classList.remove('active'));
    contents.forEach(c=>c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');

  });
});
<script>
const toggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
</script>
