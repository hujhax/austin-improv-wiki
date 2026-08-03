---
description: "Here's a quick list of some of the most useful..."
image: "File/John%20Doe%20Pic.jpg"
---
## Basic Wiki Formatting
Here's a quick list of some of the most useful ways to format text in a wiki page.

[This site](http://www.mediawiki.org/wiki/Help:Formatting) lists a more complete list of features.

<table class="wikitable">
  <tr >
    <th > Description</th>
    <th width=40%>You type</th>
    <th width=40%>You get</th>
  </tr>
  <tr >
    <th colspan="3" style="background:#ABE">character (inline) formatting – <em>applies anywhere</em></th>
  </tr>
  <tr >
    <td > Italic text</td>
    <td > <pre>
<em>italic</em>
</pre></td>
    <td >
<em>italic</em></td>
  </tr>
  <tr >
    <td > Bold text</td>
    <td > <pre>
<strong>bold</strong>
</pre></td>
    <td >
<strong>bold</strong></td>
  </tr>
  <tr >
    <td > Bold and italic</td>
    <td > <pre>
<strong><em>bold & italic</em></strong>
</pre></td>
    <td >
<strong><em>bold & italic</em></strong></td>
  </tr>
  <tr >
    <td > Escape wiki markup</td>
    <td > <pre>
&lt;nowiki&gt;no <em>markup</em>&lt;/nowiki&gt;
</pre></td>
    <td >
<nowiki>no <em>markup</em></nowiki></td>
  </tr>
  <tr >
    <th colspan="3" style="background:#ABE">section formatting – <em>only at the beginning of the line</em></th>
  </tr>
  <tr >
    <td > Headings of different levels</td>
    <td > <pre>
## Level 2
### Level 3
#### Level 4
##### Level 5
###### Level 6
</pre></td>
    <td >
## Level 2
### Level 3
#### Level 4
##### Level 5
###### Level 6
</td>
  </tr>
  <tr >
    <td > Bullet list</td>
    <td >
<pre>
* Start each line
<em> with an asterisk (</em>).
<em></em> More asterisks gives deeper
<em></em>* and deeper levels.
* Line breaks<br />don't break levels.
<em></em>* But jumping levels creates empty space.
Any other start ends the list.
</pre></td>
    <td >
* Start each line
<em> with an asterisk (</em>).
<em></em> More asterisks gives deeper
<em></em>* and deeper levels.
* Line breaks<br />don't break levels.
<em></em>* But jumping levels creates empty space.
Any other start ends the list.</td>
  </tr>
  <tr >
    <td > Numbered list</td>
    <td >
<pre>
1. Start each line
1. with a number sign (#).
  1. More number signs gives deeper
    1. and deeper
    1. levels.
1. Line breaks<br />don't break levels.
    1. But jumping levels creates empty space.
1. Blank lines
1. end the list and start another.
Any other start also
ends the list.
</pre></td>
    <td >
1. Start each line
1. with a number sign (#).
  1. More number signs gives deeper
    1. and deeper
    1. levels.
1. Line breaks<br />don't break levels.
    1. But jumping levels creates empty space.
1. Blank lines
1. end the list and start another.
Any other start also
ends the list.</td>
  </tr>
</table>

## Links
Here's a quick list of how to make some simple links.

[This site](http://www.mediawiki.org/wiki/Help:Links) lists a more complete list of features.


<table border="1" class="wikitable">
  <tr >
    <th >Description</th>
    <th >You type</th>
    <th >You get</th>
  </tr>
  <tr >
    <td >Internal link</td>
    <td ><pre><a class="internal-link" href="Main Page">Main Page</a></pre></td>
    <td ><a class="internal-link" href="Main Page">Main Page</a></td>
  </tr>
  <tr >
    <td >Piped link</td>
    <td ><pre><a class="internal-link" href="Main Page">different text</a></pre></td>
    <td ><a class="internal-link" href="Main Page">different text</a></td>
  </tr>
  <tr >
    <td >External link</td>
    <td ><tt><nowiki>http://mediawiki.org</nowiki></tt></td>
    <td >http://mediawiki.org</td>
  </tr>
  <tr >
    <td >External link with different label</td>
    <td ><tt><nowiki><a href="http://mediawiki.org">MediaWiki</a></nowiki></tt></td>
    <td ><a href="http://mediawiki.org">MediaWiki</a></td>
  </tr>
</table>

## Infoboxes
You may be wondering how to make those little colorful "information boxes" depicted on (for example) the troupe, theater, and performer pages.

To do that, you just include an "infobox" template at the top of the page.  For a performer, that text might look like this:
 <nowiki><div>
	<table class="infobox infobox-performer">
		<tr>
			<th colspan="2" class="infobox-header">John Doe</th>
		</tr>
		<tr class="">
			<td colspan="2" class="" class="infobox-picture">
				![](/File/John%20Doe%20Pic.jpg)
			</td>
		</tr>
		<tr class="">
			<th scope="row" class="category-header">Primary Theater</th>
			<td class="category"><a class="internal-link" href="Theatres-The Hideout Theatre">The Hideout Theatre</a></td>
		</tr>
		<tr class="">
			<th scope="row" class="category-header">Years Active</th>
			<td class="category">2008-Present</td>
		</tr>
	</table>
</div></nowiki>

For more information about infoboxes, check the documentation on infoboxes for [[Template/Infobox Troupe|troupes]], [[Template/Infobox Performer|performers]], [[Template/Infobox Show|shows]], and [[Template/Infobox Theater|theaters]].