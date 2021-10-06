/* All CSS here will be loaded for users of the Timeless skin */
/* Top bar font modernization */
#mw-header *,
#mw-site-navigation *,
#mw-related-navigation *  { font-family: 'Segoe UI','Segoe UI Emoji','Segoe UI Symbol','Lato','Liberation Sans','Noto Sans','Helvetica Neue','Helvetica',sans-serif  }

/* Avoid cutting off letters with descenders: g,j,p,q,y */
#personal h2 span {
    height: 1.5em;
    position:relative;
    bottom:0.1em
}

/* Triangle position patch */
#personal h2::after {
   position: relative;
   bottom: 0.5em;
}