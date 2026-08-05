---
description: "REDIRECT."
image: "File/SongRunner.jpg"
---
![[File/Cyber House Rules.jpg]]

---
redirect: "File/SongRunner.jpg"
---
#REDIRECT [[File/SongRunner.jpg]]

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