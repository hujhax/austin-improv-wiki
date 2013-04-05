## Basic Wiki Formatting
Here's a quick list of some of the most useful ways to format text in a wiki page.

[http://www.mediawiki.org/wiki/Help:Formatting This site] lists a more complete list of features.

{| class="wikitable"
! Description
! width=40% | You type
! width=40% | You get
|-
! colspan="3" style="background:#ABE" | character (inline) formatting – *applies anywhere*
|-
| Italic text
| <pre>
*italic*
</pre>
|
*italic*
|-
| Bold text
| <pre>
**bold**
</pre>
|
**bold**
|-
| Bold and italic
| <pre>
***bold & italic***
</pre>
|
***bold & italic***
|-
| Escape wiki markup
| <pre>
&lt;nowiki&gt;no *markup*&lt;/nowiki&gt;
</pre>
|
<nowiki>no *markup*</nowiki>
|-
! colspan="3" style="background:#ABE" | section formatting – *only at the beginning of the line*
|-
| Headings of different levels 
| <pre>

## Level 2
### Level 3
#### Level 4
##### Level 5
###### Level 6
</pre>
|

## Level 2
### Level 3
#### Level 4
##### Level 5
###### Level 6
|-
| Bullet list
|
<pre>
* Start each line
* with an [[Wikipedia - asterisk|asterisk]] (*).
** More asterisks gives deeper
*** and deeper levels.
* Line breaks<br />don't break levels.
*** But jumping levels creates empty space.
Any other start ends the list.
</pre>
|
* Start each line
* with an [[Wikipedia - asterisk|asterisk]] (*).
** More asterisks gives deeper
*** and deeper levels.
* Line breaks<br />don't break levels.
*** But jumping levels creates empty space.
Any other start ends the list.
|-
| Numbered list
|
<pre>
# Start each line
# with a [[Wikipedia - Number sign|number sign]] (#).
## More number signs gives deeper
### and deeper
### levels.
# Line breaks<br />don't break levels.
### But jumping levels creates empty space.
# Blank lines

# end the list and start another.
Any other start also
ends the list.
</pre>
|
# Start each line
# with a [[Wikipedia - Number sign|number sign]] (#).
## More number signs gives deeper
### and deeper
### levels.
# Line breaks<br />don't break levels.
### But jumping levels creates empty space.
# Blank lines

# end the list and start another.
Any other start also
ends the list.
|}