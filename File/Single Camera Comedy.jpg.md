---
description: "REDIRECT."
image: "File/Close%20Up.jpg"
---
![[File/Single Camera Comedy.jpg]]

---
redirect: "File/Close Up.jpg"
---
#REDIRECT [[File/Close Up.jpg]]

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