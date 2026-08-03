---
redirect: "Shows/Not This American Life"
---
#REDIRECT [[Shows/Not This American Life]]

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