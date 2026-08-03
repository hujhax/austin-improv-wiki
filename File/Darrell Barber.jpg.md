---
description: "REDIRECT."
image: "File/Darrell%20Barber%20Pic.jpg"
---
<div style="text-align: center;"><img src="Darrell Barber.jpg" style="max-width: 100%; height: auto;" /></div>

---
redirect: "File/Darrell Barber Pic.jpg"
---
#REDIRECT [[File/Darrell Barber Pic.jpg]]

<script>
  (function() {
    const link = document.querySelector(".center article a.internal, .center article a.internal-link");
    if (link && link.href) {
      if (window.spaNavigate) {
        window.spaNavigate(new URL(link.href));
      } else {
        window.location.replace(link.href);
      }
    }
  })();
</script>