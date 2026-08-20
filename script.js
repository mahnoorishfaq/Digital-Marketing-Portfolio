<script>
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  const words = ["profit.", "customers.", "followers.", "growth."];
  let wi = 0;
  const cycleEl = document.getElementById('cycleWord');
  setInterval(()=>{
    cycleEl.classList.add('out');
    setTimeout(()=>{
      wi = (wi + 1) % words.length;
      cycleEl.textContent = words[wi];
      cycleEl.classList.remove('out');
    }, 420);
  }, 2400);
</script>
